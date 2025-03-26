<?php

namespace App\Contracts;

/**
 * Contract for email notification services related to order processing
 */
interface EmailServiceInterface {
    /**
     * Sends order confirmation email to customer
     *
     * @param string $email Recipient's email address
     * @param float $total Total order amount after discounts
     *
     * @return void
     *
     * @throws \RuntimeException When email delivery fails
     * @throws \InvalidArgumentException When email format is invalid
     */
    public function sendOrderConfirmation(string $email, float $total): void;
}