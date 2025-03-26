<?php

namespace App\Contracts;

/**
 * Defines the contract for order calculations and discount applications
 */
interface OrderInterface {
    /**
     * Calculates the total order amount before discounts
     *
     * @return float The sum of all order items' subtotals
     *
     * @throws \RuntimeException If order items data is invalid
     */
    public function calculateTotal(): float;

    /**
     * Applies applicable discounts to the order total
     *
     * @param float $total The pre-discount order total
     * @return float The final total after applying all discounts
     *
     * @throws \InvalidArgumentException If $total is not a positive number
     * @throws \RuntimeException If discount calculation fails
     */
    public function applyDiscount(float $total): float;
}