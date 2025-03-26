<?php

namespace App\Services;

use App\Enums\CustomerType;

/**
 * Handles order discount calculations based on business rules
 *
 * Applies tiered discounts according to order value and customer type
 */
class OrderDiscountCalculator {
    /**
     * Minimum order amount to qualify for large order discount
     * @var float
     */
    private const LARGE_ORDER_THRESHOLD = 100.0;

    /**
     * Discount percentage applied to large orders
     * @var float
     */
    private const LARGE_ORDER_DISCOUNT = 0.1;

    /**
     * Additional discount percentage for VIP customers
     * @var float
     */
    private const VIP_DISCOUNT = 0.1;

    /**
     * Calculates final order total after applying all applicable discounts
     *
     * @param float $total Pre-discount order total
     * @param CustomerType $customerType Customer classification
     * @return float Final amount after discounts
     *
     * @throws \InvalidArgumentException If total is not positive
     */
    public function calculate(float $total, CustomerType $customerType): float {
        $finalTotal = $this->applyLargeOrderDiscount($total);
        return $this->applyCustomerTypeDiscount($finalTotal, $customerType);
    }

    /**
     * Applies large order discount if qualified
     *
     * @param float $total Order subtotal
     * @return float Total after large order discount (if applicable)
     */
    private function applyLargeOrderDiscount(float $total): float {
        if ($total > self::LARGE_ORDER_THRESHOLD) {
            return $total * (1 - self::LARGE_ORDER_DISCOUNT);
        }
        return $total;
    }

    /**
     * Applies customer-specific discount
     *
     * @param float $total Order total
     * @param CustomerType $customerType Customer classification
     * @return float Total after customer discount (if applicable)
     */
    private function applyCustomerTypeDiscount(float $total, CustomerType $customerType): float {
        if ($customerType === CustomerType::VIP) {
            return $total * (1 - self::VIP_DISCOUNT);
        }
        return $total;
    }
}
