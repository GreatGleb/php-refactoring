<?php

namespace App\Enums;

/**
 * Represents the lifecycle states of an order
 *
 * Tracks order progression through fulfillment workflow
 */
enum OrderStatus: string {
    /**
     * Order has been created but not yet processed
     *
     * - Payments may be pending
     * - Items not yet shipped
     * - Still editable by customer
     */
    case PENDING = 'pending';

    /**
     * Order has been successfully fulfilled
     *
     * - Payment confirmed
     * - Items shipped/delivered
     * - Considered immutable
     */
    case COMPLETED = 'completed';

    /**
     * Order was cancelled before completion
     *
     * - May be initiated by customer or system
     * - Triggers refund process if paid
     * - Terminal state
     */
    case CANCELLED = 'cancelled';
}