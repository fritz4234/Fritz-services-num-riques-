CREATE TABLE `exchangeRateSettings` (
	`id` int NOT NULL,
	`htgPerUsdMinor` int NOT NULL DEFAULT 0,
	`updatedBy` int,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `exchangeRateSettings_id` PRIMARY KEY(`id`)
);
