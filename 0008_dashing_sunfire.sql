ALTER TABLE `users` ADD `accountStatus` enum('ACTIVE','SUSPENDED','BLOCKED') DEFAULT 'ACTIVE' NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `accountStatusUntil` timestamp;