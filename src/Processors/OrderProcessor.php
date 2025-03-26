<?php

namespace App\Processors;

use App\Contracts\EmailServiceInterface;
use App\Contracts\LoggerInterface;
use App\Entities\Order;
use App\Exceptions\OrderProcessingException;
use Exception;

/**
 * Orchestrates order processing workflow
 *
 * Handles the complete order fulfillment pipeline including:
 * - Order creation and validation
 * - Total calculation and discount application
 * - Customer notification
 * - Status tracking and logging
 */
class OrderProcessor {
    /**
     * @var EmailServiceInterface Service for sending order confirmations
     */
    private EmailServiceInterface $emailService;

    /**
     * @var LoggerInterface Service for recording processing events
     */
    private LoggerInterface $logger;


    /**
     * Initializes the order processor with required services
     *
     * @param EmailServiceInterface $emailService
     * @param LoggerInterface $logger
     */
    public function __construct(
        EmailServiceInterface $emailService,
        LoggerInterface $logger
    ) {
        $this->emailService = $emailService;
        $this->logger = $logger;
    }

    /**
     * Processes a batch of orders
     *
     * @param array $ordersData Array of order data arrays
     * @return void
     * @throws OrderProcessingException When batch processing fails
     * @throws \InvalidArgumentException When order data is invalid
     */
    public function processOrders(array $ordersData): void {
        try {
            $orders = $this->createOrders($ordersData);

            foreach ($orders as $order) {
                $this->processOrder($order);
            }
        } catch (Exception $e) {
            $this->logger->error('Order processing failed', [
                'error' => $e->getMessage()
            ]);
            throw new OrderProcessingException('Failed to process orders', 0, $e);
        }
    }

    /**
     * Processes an individual order
     *
     * @param Order $order The order to process
     * @return void
     * @throws OrderProcessingException When order processing fails
     */
    private function processOrder(Order $order): void {
        if ($order->isPending()) {
            $total = $order->calculateTotal();
            $finalTotal = $order->applyDiscount($total);

            $this->emailService->sendOrderConfirmation(
                $order->getCustomerEmail(),
                $finalTotal
            );

            $this->logger->info('Order processed successfully', [
                'email' => $order->getCustomerEmail(),
                'total' => $finalTotal
            ]);
        }
    }

    /**
     * Creates Order objects from raw data
     *
     * @param array $ordersData Array of order data arrays
     * @return Order[] Array of validated Order objects
     * @throws \InvalidArgumentException When order data is invalid
     */
    private function createOrders(array $ordersData): array {
        return array_map(function($orderData) {
            return new Order($orderData);
        }, $ordersData);
    }
}
