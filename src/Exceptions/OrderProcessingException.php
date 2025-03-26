<?php

namespace App\Exceptions;

use RuntimeException;

/**
 * Custom exception for order processing failures
 *
 * Thrown when errors occur during order validation, calculation,
 * or fulfillment processes. Provides context for error handling
 * and recovery mechanisms.
 */
class OrderProcessingException extends RuntimeException {}