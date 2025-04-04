Search.appendIndex(
    [
                {
            "fqsen": "\\App\\Contracts\\EmailServiceInterface",
            "name": "EmailServiceInterface",
            "summary": "Contract\u0020for\u0020email\u0020notification\u0020services\u0020related\u0020to\u0020order\u0020processing",
            "url": "classes/App-Contracts-EmailServiceInterface.html"
        },                {
            "fqsen": "\\App\\Contracts\\EmailServiceInterface\u003A\u003AsendOrderConfirmation\u0028\u0029",
            "name": "sendOrderConfirmation",
            "summary": "Sends\u0020order\u0020confirmation\u0020email\u0020to\u0020customer",
            "url": "classes/App-Contracts-EmailServiceInterface.html#method_sendOrderConfirmation"
        },                {
            "fqsen": "\\App\\Contracts\\LoggerInterface",
            "name": "LoggerInterface",
            "summary": "Defines\u0020the\u0020standard\u0020logging\u0020interface\u0020for\u0020application\u002Dwide\u0020logging\u0020capabilities",
            "url": "classes/App-Contracts-LoggerInterface.html"
        },                {
            "fqsen": "\\App\\Contracts\\LoggerInterface\u003A\u003Ainfo\u0028\u0029",
            "name": "info",
            "summary": "Logs\u0020an\u0020informational\u0020message",
            "url": "classes/App-Contracts-LoggerInterface.html#method_info"
        },                {
            "fqsen": "\\App\\Contracts\\LoggerInterface\u003A\u003Aerror\u0028\u0029",
            "name": "error",
            "summary": "Logs\u0020an\u0020error\u0020message",
            "url": "classes/App-Contracts-LoggerInterface.html#method_error"
        },                {
            "fqsen": "\\App\\Contracts\\OrderInterface",
            "name": "OrderInterface",
            "summary": "Defines\u0020the\u0020contract\u0020for\u0020order\u0020calculations\u0020and\u0020discount\u0020applications",
            "url": "classes/App-Contracts-OrderInterface.html"
        },                {
            "fqsen": "\\App\\Contracts\\OrderInterface\u003A\u003AcalculateTotal\u0028\u0029",
            "name": "calculateTotal",
            "summary": "Calculates\u0020the\u0020total\u0020order\u0020amount\u0020before\u0020discounts",
            "url": "classes/App-Contracts-OrderInterface.html#method_calculateTotal"
        },                {
            "fqsen": "\\App\\Contracts\\OrderInterface\u003A\u003AapplyDiscount\u0028\u0029",
            "name": "applyDiscount",
            "summary": "Applies\u0020applicable\u0020discounts\u0020to\u0020the\u0020order\u0020total",
            "url": "classes/App-Contracts-OrderInterface.html#method_applyDiscount"
        },                {
            "fqsen": "\\App\\Entities\\Order",
            "name": "Order",
            "summary": "Represents\u0020a\u0020customer\u0020order\u0020with\u0020items,\u0020status,\u0020and\u0020pricing\u0020calculations",
            "url": "classes/App-Entities-Order.html"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Creates\u0020a\u0020new\u0020Order\u0020instance",
            "url": "classes/App-Entities-Order.html#method___construct"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003AvalidateOrderData\u0028\u0029",
            "name": "validateOrderData",
            "summary": "Validates\u0020order\u0020data\u0020structure\u0020and\u0020values",
            "url": "classes/App-Entities-Order.html#method_validateOrderData"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003AisPending\u0028\u0029",
            "name": "isPending",
            "summary": "Checks\u0020if\u0020order\u0020is\u0020in\u0020pending\u0020status",
            "url": "classes/App-Entities-Order.html#method_isPending"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003AcalculateTotal\u0028\u0029",
            "name": "calculateTotal",
            "summary": "Calculates\u0020the\u0020subtotal\u0020of\u0020all\u0020order\u0020items",
            "url": "classes/App-Entities-Order.html#method_calculateTotal"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003AapplyDiscount\u0028\u0029",
            "name": "applyDiscount",
            "summary": "Applies\u0020applicable\u0020discounts\u0020to\u0020the\u0020order\u0020total",
            "url": "classes/App-Entities-Order.html#method_applyDiscount"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003AgetCustomerEmail\u0028\u0029",
            "name": "getCustomerEmail",
            "summary": "Gets\u0020the\u0020customer\u0027s\u0020email\u0020address",
            "url": "classes/App-Entities-Order.html#method_getCustomerEmail"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003A\u0024status",
            "name": "status",
            "summary": "",
            "url": "classes/App-Entities-Order.html#property_status"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003A\u0024customerEmail",
            "name": "customerEmail",
            "summary": "",
            "url": "classes/App-Entities-Order.html#property_customerEmail"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003A\u0024customerType",
            "name": "customerType",
            "summary": "",
            "url": "classes/App-Entities-Order.html#property_customerType"
        },                {
            "fqsen": "\\App\\Entities\\Order\u003A\u003A\u0024items",
            "name": "items",
            "summary": "",
            "url": "classes/App-Entities-Order.html#property_items"
        },                {
            "fqsen": "\\App\\Entities\\OrderItem",
            "name": "OrderItem",
            "summary": "Value\u0020Object\u0020representing\u0020a\u0020single\u0020line\u0020item\u0020in\u0020an\u0020order",
            "url": "classes/App-Entities-OrderItem.html"
        },                {
            "fqsen": "\\App\\Entities\\OrderItem\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Creates\u0020a\u0020new\u0020OrderItem\u0020instance",
            "url": "classes/App-Entities-OrderItem.html#method___construct"
        },                {
            "fqsen": "\\App\\Entities\\OrderItem\u003A\u003AvalidatePrice\u0028\u0029",
            "name": "validatePrice",
            "summary": "Validates\u0020the\u0020item\u0020price",
            "url": "classes/App-Entities-OrderItem.html#method_validatePrice"
        },                {
            "fqsen": "\\App\\Entities\\OrderItem\u003A\u003AvalidateQuantity\u0028\u0029",
            "name": "validateQuantity",
            "summary": "Validates\u0020the\u0020item\u0020quantity",
            "url": "classes/App-Entities-OrderItem.html#method_validateQuantity"
        },                {
            "fqsen": "\\App\\Entities\\OrderItem\u003A\u003AgetSubtotal\u0028\u0029",
            "name": "getSubtotal",
            "summary": "Calculates\u0020the\u0020subtotal\u0020for\u0020this\u0020line\u0020item",
            "url": "classes/App-Entities-OrderItem.html#method_getSubtotal"
        },                {
            "fqsen": "\\App\\Entities\\OrderItem\u003A\u003A\u0024price",
            "name": "price",
            "summary": "",
            "url": "classes/App-Entities-OrderItem.html#property_price"
        },                {
            "fqsen": "\\App\\Entities\\OrderItem\u003A\u003A\u0024quantity",
            "name": "quantity",
            "summary": "",
            "url": "classes/App-Entities-OrderItem.html#property_quantity"
        },                {
            "fqsen": "\\App\\Enums\\CustomerType",
            "name": "CustomerType",
            "summary": "Represents\u0020customer\u0020classification\u0020types",
            "url": "classes/App-Enums-CustomerType.html"
        },                {
            "fqsen": "\\App\\Enums\\CustomerType\u003A\u003AVIP",
            "name": "VIP",
            "summary": "VIP\u0020customers\u0020receive\u0020premium\u0020benefits\u0020and\u0020discounts",
            "url": "classes/App-Enums-CustomerType.html#enumcase_VIP"
        },                {
            "fqsen": "\\App\\Enums\\CustomerType\u003A\u003AREGULAR",
            "name": "REGULAR",
            "summary": "Regular\u0020customers\u0020with\u0020standard\u0020pricing",
            "url": "classes/App-Enums-CustomerType.html#enumcase_REGULAR"
        },                {
            "fqsen": "\\App\\Enums\\OrderStatus",
            "name": "OrderStatus",
            "summary": "Represents\u0020the\u0020lifecycle\u0020states\u0020of\u0020an\u0020order",
            "url": "classes/App-Enums-OrderStatus.html"
        },                {
            "fqsen": "\\App\\Enums\\OrderStatus\u003A\u003APENDING",
            "name": "PENDING",
            "summary": "Order\u0020has\u0020been\u0020created\u0020but\u0020not\u0020yet\u0020processed",
            "url": "classes/App-Enums-OrderStatus.html#enumcase_PENDING"
        },                {
            "fqsen": "\\App\\Enums\\OrderStatus\u003A\u003ACOMPLETED",
            "name": "COMPLETED",
            "summary": "Order\u0020has\u0020been\u0020successfully\u0020fulfilled",
            "url": "classes/App-Enums-OrderStatus.html#enumcase_COMPLETED"
        },                {
            "fqsen": "\\App\\Enums\\OrderStatus\u003A\u003ACANCELLED",
            "name": "CANCELLED",
            "summary": "Order\u0020was\u0020cancelled\u0020before\u0020completion",
            "url": "classes/App-Enums-OrderStatus.html#enumcase_CANCELLED"
        },                {
            "fqsen": "\\App\\Exceptions\\OrderProcessingException",
            "name": "OrderProcessingException",
            "summary": "Custom\u0020exception\u0020for\u0020order\u0020processing\u0020failures",
            "url": "classes/App-Exceptions-OrderProcessingException.html"
        },                {
            "fqsen": "\\App\\Processors\\OrderProcessor",
            "name": "OrderProcessor",
            "summary": "Orchestrates\u0020order\u0020processing\u0020workflow",
            "url": "classes/App-Processors-OrderProcessor.html"
        },                {
            "fqsen": "\\App\\Processors\\OrderProcessor\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Initializes\u0020the\u0020order\u0020processor\u0020with\u0020required\u0020services",
            "url": "classes/App-Processors-OrderProcessor.html#method___construct"
        },                {
            "fqsen": "\\App\\Processors\\OrderProcessor\u003A\u003AprocessOrders\u0028\u0029",
            "name": "processOrders",
            "summary": "Processes\u0020a\u0020batch\u0020of\u0020orders",
            "url": "classes/App-Processors-OrderProcessor.html#method_processOrders"
        },                {
            "fqsen": "\\App\\Processors\\OrderProcessor\u003A\u003AprocessOrder\u0028\u0029",
            "name": "processOrder",
            "summary": "Processes\u0020an\u0020individual\u0020order",
            "url": "classes/App-Processors-OrderProcessor.html#method_processOrder"
        },                {
            "fqsen": "\\App\\Processors\\OrderProcessor\u003A\u003AcreateOrders\u0028\u0029",
            "name": "createOrders",
            "summary": "Creates\u0020Order\u0020objects\u0020from\u0020raw\u0020data",
            "url": "classes/App-Processors-OrderProcessor.html#method_createOrders"
        },                {
            "fqsen": "\\App\\Processors\\OrderProcessor\u003A\u003A\u0024emailService",
            "name": "emailService",
            "summary": "",
            "url": "classes/App-Processors-OrderProcessor.html#property_emailService"
        },                {
            "fqsen": "\\App\\Processors\\OrderProcessor\u003A\u003A\u0024logger",
            "name": "logger",
            "summary": "",
            "url": "classes/App-Processors-OrderProcessor.html#property_logger"
        },                {
            "fqsen": "\\App\\Services\\EmailService",
            "name": "EmailService",
            "summary": "Email\u0020notification\u0020service\u0020for\u0020order\u0020processing\u0020system",
            "url": "classes/App-Services-EmailService.html"
        },                {
            "fqsen": "\\App\\Services\\EmailService\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Constructor\u0020for\u0020EmailService",
            "url": "classes/App-Services-EmailService.html#method___construct"
        },                {
            "fqsen": "\\App\\Services\\EmailService\u003A\u003AsendOrderConfirmation\u0028\u0029",
            "name": "sendOrderConfirmation",
            "summary": "Sends\u0020an\u0020order\u0020confirmation\u0020email\u0020to\u0020the\u0020customer",
            "url": "classes/App-Services-EmailService.html#method_sendOrderConfirmation"
        },                {
            "fqsen": "\\App\\Services\\EmailService\u003A\u003AcreateEmailMessage\u0028\u0029",
            "name": "createEmailMessage",
            "summary": "Generates\u0020the\u0020email\u0020message\u0020body\u0020for\u0020order\u0020confirmation",
            "url": "classes/App-Services-EmailService.html#method_createEmailMessage"
        },                {
            "fqsen": "\\App\\Services\\EmailService\u003A\u003A\u0024logger",
            "name": "logger",
            "summary": "",
            "url": "classes/App-Services-EmailService.html#property_logger"
        },                {
            "fqsen": "\\App\\Services\\LoggerService",
            "name": "LoggerService",
            "summary": "File\u002Dbased\u0020logging\u0020service\u0020implementation",
            "url": "classes/App-Services-LoggerService.html"
        },                {
            "fqsen": "\\App\\Services\\LoggerService\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Constructor\u0020initializes\u0020the\u0020logger\u0020service",
            "url": "classes/App-Services-LoggerService.html#method___construct"
        },                {
            "fqsen": "\\App\\Services\\LoggerService\u003A\u003Ainfo\u0028\u0029",
            "name": "info",
            "summary": "Logs\u0020an\u0020informational\u0020message",
            "url": "classes/App-Services-LoggerService.html#method_info"
        },                {
            "fqsen": "\\App\\Services\\LoggerService\u003A\u003Aerror\u0028\u0029",
            "name": "error",
            "summary": "Logs\u0020an\u0020error\u0020message",
            "url": "classes/App-Services-LoggerService.html#method_error"
        },                {
            "fqsen": "\\App\\Services\\LoggerService\u003A\u003Alog\u0028\u0029",
            "name": "log",
            "summary": "Internal\u0020log\u0020message\u0020handler",
            "url": "classes/App-Services-LoggerService.html#method_log"
        },                {
            "fqsen": "\\App\\Services\\LoggerService\u003A\u003A\u0024logFile",
            "name": "logFile",
            "summary": "",
            "url": "classes/App-Services-LoggerService.html#property_logFile"
        },                {
            "fqsen": "\\App\\Services\\OrderDiscountCalculator",
            "name": "OrderDiscountCalculator",
            "summary": "Handles\u0020order\u0020discount\u0020calculations\u0020based\u0020on\u0020business\u0020rules",
            "url": "classes/App-Services-OrderDiscountCalculator.html"
        },                {
            "fqsen": "\\App\\Services\\OrderDiscountCalculator\u003A\u003Acalculate\u0028\u0029",
            "name": "calculate",
            "summary": "Calculates\u0020final\u0020order\u0020total\u0020after\u0020applying\u0020all\u0020applicable\u0020discounts",
            "url": "classes/App-Services-OrderDiscountCalculator.html#method_calculate"
        },                {
            "fqsen": "\\App\\Services\\OrderDiscountCalculator\u003A\u003AapplyLargeOrderDiscount\u0028\u0029",
            "name": "applyLargeOrderDiscount",
            "summary": "Applies\u0020large\u0020order\u0020discount\u0020if\u0020qualified",
            "url": "classes/App-Services-OrderDiscountCalculator.html#method_applyLargeOrderDiscount"
        },                {
            "fqsen": "\\App\\Services\\OrderDiscountCalculator\u003A\u003AapplyCustomerTypeDiscount\u0028\u0029",
            "name": "applyCustomerTypeDiscount",
            "summary": "Applies\u0020customer\u002Dspecific\u0020discount",
            "url": "classes/App-Services-OrderDiscountCalculator.html#method_applyCustomerTypeDiscount"
        },                {
            "fqsen": "\\App\\Services\\OrderDiscountCalculator\u003A\u003ALARGE_ORDER_THRESHOLD",
            "name": "LARGE_ORDER_THRESHOLD",
            "summary": "Minimum\u0020order\u0020amount\u0020to\u0020qualify\u0020for\u0020large\u0020order\u0020discount",
            "url": "classes/App-Services-OrderDiscountCalculator.html#constant_LARGE_ORDER_THRESHOLD"
        },                {
            "fqsen": "\\App\\Services\\OrderDiscountCalculator\u003A\u003ALARGE_ORDER_DISCOUNT",
            "name": "LARGE_ORDER_DISCOUNT",
            "summary": "Discount\u0020percentage\u0020applied\u0020to\u0020large\u0020orders",
            "url": "classes/App-Services-OrderDiscountCalculator.html#constant_LARGE_ORDER_DISCOUNT"
        },                {
            "fqsen": "\\App\\Services\\OrderDiscountCalculator\u003A\u003AVIP_DISCOUNT",
            "name": "VIP_DISCOUNT",
            "summary": "Additional\u0020discount\u0020percentage\u0020for\u0020VIP\u0020customers",
            "url": "classes/App-Services-OrderDiscountCalculator.html#constant_VIP_DISCOUNT"
        },                {
            "fqsen": "\\",
            "name": "\\",
            "summary": "",
            "url": "namespaces/default.html"
        },                {
            "fqsen": "\\App\\Contracts",
            "name": "Contracts",
            "summary": "",
            "url": "namespaces/app-contracts.html"
        },                {
            "fqsen": "\\App",
            "name": "App",
            "summary": "",
            "url": "namespaces/app.html"
        },                {
            "fqsen": "\\App\\Entities",
            "name": "Entities",
            "summary": "",
            "url": "namespaces/app-entities.html"
        },                {
            "fqsen": "\\App\\Enums",
            "name": "Enums",
            "summary": "",
            "url": "namespaces/app-enums.html"
        },                {
            "fqsen": "\\App\\Exceptions",
            "name": "Exceptions",
            "summary": "",
            "url": "namespaces/app-exceptions.html"
        },                {
            "fqsen": "\\App\\Processors",
            "name": "Processors",
            "summary": "",
            "url": "namespaces/app-processors.html"
        },                {
            "fqsen": "\\App\\Services",
            "name": "Services",
            "summary": "",
            "url": "namespaces/app-services.html"
        }            ]
);
