<?php

namespace App\Services;

use App\Contracts\LoggerInterface;

/**
 * File-based logging service implementation
 *
 * Provides log message handling with different severity levels,
 * writing to a specified log file with timestamp and context data.
 */
class LoggerService implements LoggerInterface {
    /**
     * @var string Path to the log file
     */
    private string $logFile;

    /**
     * Constructor initializes the logger service
     *
     * @param string $logFile Path to the log file (default: 'app.log')
     *
     * @throws \RuntimeException If log file cannot be created
     */
    public function __construct(string $logFile = 'app.log') {
        $this->logFile = $logFile;

        if (!file_exists($this->logFile)) {
            touch($this->logFile);
        }
    }

    /**
     * Logs an informational message
     *
     * @param string $message The log message
     * @param array $context Additional context data (optional)
     *
     * @return void
     *
     * @throws \RuntimeException If writing to log file fails
     */
    public function info(string $message, array $context = []): void {
        $this->log('INFO', $message, $context);
    }

    /**
     * Logs an error message
     *
     * @param string $message The error message
     * @param array $context Additional context data (optional)
     *
     * @return void
     *
     * @throws \RuntimeException If writing to log file fails
     */
    public function error(string $message, array $context = []): void {
        $this->log('ERROR', $message, $context);
    }

    /**
     * Internal log message handler
     *
     * @param string $level Log level (INFO/ERROR)
     * @param string $message The message to log
     * @param array $context Additional context data
     *
     * @return void
     *
     * @throws \RuntimeException If writing to log file fails
     */
    private function log(string $level, string $message, array $context = []): void {
        $logEntry = sprintf(
            "[%s] %s: %s %s\n",
            date('Y-m-d H:i:s'),
            $level,
            $message,
            !empty($context) ? json_encode($context) : ''
        );

        file_put_contents($this->logFile, $logEntry, FILE_APPEND);
    }
}
