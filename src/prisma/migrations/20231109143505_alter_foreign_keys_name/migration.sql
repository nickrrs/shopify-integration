/*
  Warnings:

  - You are about to drop the column `orderID` on the `order_products` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `order_products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_id]` on the table `order_products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order_id` to the `order_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order_products` DROP FOREIGN KEY `order_products_orderID_fkey`;

-- DropForeignKey
ALTER TABLE `order_products` DROP FOREIGN KEY `order_products_productId_fkey`;

-- AlterTable
ALTER TABLE `order_products` DROP COLUMN `orderID`,
    DROP COLUMN `productId`,
    ADD COLUMN `order_id` INTEGER NOT NULL,
    ADD COLUMN `product_id` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `order_products_product_id_key` ON `order_products`(`product_id`);

-- AddForeignKey
ALTER TABLE `order_products` ADD CONSTRAINT `order_products_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_products` ADD CONSTRAINT `order_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
