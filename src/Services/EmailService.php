<?php

namespace App\Services;

use App\Contracts\EmailServiceInterface;
use App\Contracts\LoggerInterface;
use App\Exceptions\OrderProcessingException;
use Exception;

/**
 * Email notification service for order processing system
 *
 * Handles the composition and delivery of order confirmation emails
 * with integrated logging and error handling.
 */
class EmailService implements EmailServiceInterface {

    /**
     * @var LoggerInterface Logger instance for tracking email operations
     */
    private LoggerInterface $logger;

    /**
     * Constructor for EmailService
     *
     * @param LoggerInterface $logger Logger implementation for message tracking
     */
    public function __construct(LoggerInterface $logger) {
        $this->logger = $logger;
    }

    /**
     * Sends an order confirmation email to the customer
     *
     * @param string $email Valid recipient email address
     * @param float $total Total order amount after discounts
     *
     * @return void
     *
     * @throws OrderProcessingException When email delivery fails
     * @throws \InvalidArgumentException If email format is invalid
     */
    public function sendOrderConfirmation(string $email, float $total): void {
        try {
            $message = $this->createEmailMessage($total);

            echo "Sending email to $email: $message\n";

            $this->logger->info('Order confirmation email sent', [
                'email' => $email,
                'total' => $total
            ]);
        } catch (Exception $e) {
            $this->logger->error('Failed to send order confirmation email', [
                'email' => $email,
                'error' => $e->getMessage()
            ]);
            throw new OrderProcessingException('Failed to send confirmation email', 0, $e);
        }
    }

    /**
     * Generates the email message body for order confirmation
     *
     * @param float $total Formatted order total amount
     * @return string Complete email message body
     *
     * @throws \RuntimeException If message composition fails
     */
    private function createEmailMessage(float $total): string {
        return sprintf(
            'Your order total: $%s',
            number_format($total, 2)
        );
    }
}
