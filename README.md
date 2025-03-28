# PHP Order Management System

[![PHP 8.1+](https://img.shields.io/badge/PHP-8.1%2B-777BB4?logo=php)](https://php.net)
[![Docs](https://img.shields.io/badge/Docs-Online-blue)](https://yourusername.github.io/php-refactoring/docs/)

A refactored PHP order management system implementing SOLID principles and domain-driven design.
### Features
- Order validation and processing
- Discount calculation rules
- Mock email notifications
- File-based logging

## **Installation**
```bash
git clone https://github.com/GreatGleb/php-refactoring.git
cd php-refactoring
composer install
php .\src\public\index.php
```

## Documentation

📚 [Live API Documentation](https://greatgleb.github.io/php-refactoring/)  
*Automatically generated by [phpDocumentor](https://www.phpdoc.org/)*

## **Architecture**
```text
src/
├── Contracts/
│   ├── LoggerInterface.php
│   ├── EmailServiceInterface.php  
│   └── OrderInterface.php
├── Entities/
│   ├── Order.php
│   └── OrderItem.php
├── Enums/
│   ├── OrderStatus.php
│   └── CustomerType.php
├── Processors/
│   └── OrderProcessor.php
└── Services/
    ├── LoggerService.php
    ├── EmailService.php
    └── OrderDiscountCalculator.php
```

## **License**

MIT © Gleb Sugak