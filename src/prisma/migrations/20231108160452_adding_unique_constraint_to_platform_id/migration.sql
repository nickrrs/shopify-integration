/*
  Warnings:

  - A unique constraint covering the columns `[platform_id]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[platform_id]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `orders_platform_id_key` ON `orders`(`platform_id`);

-- CreateIndex
CREATE UNIQUE INDEX `products_platform_id_key` ON `products`(`platform_id`);
