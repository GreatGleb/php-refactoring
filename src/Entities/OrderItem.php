<?php

namespace App\Entities;

use InvalidArgumentException;

/**
 * Value Object representing a single line item in an order
 *
 * Encapsulates item pricing and quantity logic with validation
 */
class OrderItem {
    /**
     * @var float Unit price of the item (must be positive)
     */
    private float $price;

    /**
     * @var int Quantity ordered (must be positive integer)
     */
    private int $quantity;

    /**
     * Creates a new OrderItem instance
     *
     * @param float $price Per-unit price (must be > 0)
     * @param int $quantity Number of units ordered (must be > 0)
     * @throws InvalidArgumentException If price or quantity is invalid
     */
    public function __construct(float $price, int $quantity) {
        $this->validatePrice($price);
        $this->validateQuantity($quantity);

        $this->price = $price;
        $this->quantity = $quantity;
    }

    /**
     * Validates the item price
     *
     * @param float $price Price to validate
     * @return void
     * @throws InvalidArgumentException If price is not positive
     */
    private function validatePrice(float $price): void {
        if ($price <= 0) {
            throw new InvalidArgumentException('Price must be greater than zero');
        }
    }

    /**
     * Validates the item quantity
     *
     * @param int $quantity Quantity to validate
     * @return void
     * @throws InvalidArgumentException If quantity is not positive
     */
    private function validateQuantity(int $quantity): void {
        if ($quantity <= 0) {
            throw new InvalidArgumentException('Quantity must be greater than zero');
        }
    }

    /**
     * Calculates the subtotal for this line item
     *
     * @return float Subtotal (price × quantity)
     */
    public function getSubtotal(): float {
        return $this->price * $this->quantity;
    }
}
