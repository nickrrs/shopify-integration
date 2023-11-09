-- DropForeignKey
ALTER TABLE `order_products` DROP FOREIGN KEY `order_products_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_products` DROP FOREIGN KEY `order_products_product_id_fkey`;

-- AlterTable
ALTER TABLE `order_products` MODIFY `order_id` VARCHAR(191) NOT NULL,
    MODIFY `product_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `order_products` ADD CONSTRAINT `order_products_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`platform_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_products` ADD CONSTRAINT `order_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`platform_id`) ON DELETE SET NULL ON UPDATE CASCADE;
