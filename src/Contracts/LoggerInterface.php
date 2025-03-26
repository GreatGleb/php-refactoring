<?php

namespace App\Contracts;

/**
 * Defines the standard logging interface for application-wide logging capabilities
 */
interface LoggerInterface {
    /**
     * Logs an informational message
     *
     * @param string $message The log message
     * @param array $context Optional context data to accompany the message
     *                       (e.g., ['user_id' => 123, 'action' => 'login'])
     * @return void
     *
     * @throws \InvalidArgumentException If message format is invalid
     */
    public function info(string $message, array $context = []): void;

    /**
     * Logs an error message
     *
     * @param string $message The error message
     * @param array $context Additional context about the error
     *                      (e.g., ['exception' => $e, 'file' => __FILE__])
     * @return void
     *
     * @throws \InvalidArgumentException If message format is invalid
     */
    public function error(string $message, array $context = []): void;
}