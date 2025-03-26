<?php

namespace App\Enums;

/**
 * Represents customer classification types
 */
enum CustomerType: string {
    /**
     * VIP customers receive premium benefits and discounts
     */
    case VIP = 'vip';

    /**
     * Regular customers with standard pricing
     */
    case REGULAR = 'regular';
}