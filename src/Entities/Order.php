<?php

namespace App\Entities;

use App\Contracts\OrderInterface;
use App\Enums\OrderStatus;
use App\Enums\CustomerType;
use App\Services\OrderDiscountCalculator;
use InvalidArgumentException;

/**
 * Represents a customer order with items, status, and pricing calculations
 *
 * Handles order validation, total calculations, and discount applications
 */
class Order implements OrderInterface {
    /** @var OrderStatus Current status of the order */
    private OrderStatus $status;

    /** @var string Customer's email address */
    private string $customerEmail;

    /** @var CustomerType Type of customer (VIP/Regular) */
    private CustomerType $customerType;

    /** @var OrderItem[] Array of order items */
    private array $items = [];

    /**
     * Creates a new Order instance
     *
     * @param array $orderData {
     *     @var string $status Order status (must be valid OrderStatus value)
     *     @var string $customer_email Valid email address
     *     @var string $customer_type Customer type (must be valid CustomerType value)
     *     @var array $items Array of item arrays [['price' => float, 'quantity' => int]]
     * }
     * @throws InvalidArgumentException On validation failures
     */
    public function __construct(array $orderData) {
        $this->validateOrderData($orderData);

        $this->status = OrderStatus::from($orderData['status']);
        $this->customerEmail = $orderData['customer_email'];
        $this->customerType = CustomerType::from($orderData['customer_type']);

        foreach ($orderData['items'] as $item) {
            $this->items[] = new OrderItem($item['price'], $item['quantity']);
        }
    }

    /**
     * Validates order data structure and values
     *
     * @param array $orderData Input order data
     * @return void
     * @throws InvalidArgumentException When validation fails
     */
    private function validateOrderData(array $orderData): void {
        $requiredFields = ['status', 'customer_email', 'customer_type', 'items'];

        foreach ($requiredFields as $field) {
            if (!isset($orderData[$field])) {
                throw new InvalidArgumentException("Missing required field: {$field}");
            }
        }

        if (!filter_var($orderData['customer_email'], FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException('Invalid email format');
        }
    }

    /**
     * Checks if order is in pending status
     *
     * @return bool True if order status is PENDING
     */
    public function isPending(): bool {
        return $this->status === OrderStatus::PENDING;
    }

    /**
     * Calculates the subtotal of all order items
     *
     * @return float Sum of all item subtotals
     */
    public function calculateTotal(): float {
        return array_reduce($this->items, function($total, OrderItem $item) {
            return $total + $item->getSubtotal();
        }, 0.0);
    }

    /**
     * Applies applicable discounts to the order total
     *
     * @param float $total Pre-discount order total
     * @return float Total after discounts
     * @throws InvalidArgumentException If total is not positive
     */
    public function applyDiscount(float $total): float {
        $discountCalculator = new OrderDiscountCalculator();
        return $discountCalculator->calculate($total, $this->customerType);
    }

    /**
     * Gets the customer's email address
     *
     * @return string Customer email
     */
    public function getCustomerEmail(): string {
        return $this->customerEmail;
    }
}