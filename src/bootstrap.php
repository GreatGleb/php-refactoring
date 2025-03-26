<?php

/**
 * Application Entry Point - Order Processing Script
 *
 * Initializes dependencies and processes sample orders through the system.
 *
 * @package App
 * @see OrderProcessor For the main processing logic
 * @see LoggerService For logging implementation
 * @see EmailService For email notification service
 */

// Load composer autoloader
require __DIR__ . '../../vendor/autoload.php';

use App\Services\LoggerService;
use App\Services\EmailService;
use App\Processors\OrderProcessor;

/**
 * Sample orders data for processing
 *
 * @var array[] $orders Array of order data structures containing:
 *     @type string $status Order status (pending/completed)
 *     @type string $customer_email Valid customer email
 *     @type string $customer_type Customer type (vip/regular)
 *     @type array[] $items Array of order items containing:
 *         @type float $price Item unit price
 *         @type int $quantity Item quantity
 */
$orders = [
    [
        'status' => 'pending',
        'customer_email' => 'customer1@example.com',
        'customer_type' => 'vip',
        'items' => [
            ['price' => 50, 'quantity' => 2],
            ['price' => 30, 'quantity' => 1]
        ]
    ],
    [
        'status' => 'completed',
        'customer_email' => 'customer2@example.com',
        'customer_type' => 'regular',
        'items' => [
            ['price' => 20, 'quantity' => 3]
        ]
    ]
];

$logger = new LoggerService();
$emailService = new EmailService($logger);

$processor = new OrderProcessor($emailService, $logger);
$processor->processOrders($orders);