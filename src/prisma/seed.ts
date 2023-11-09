import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const load = async () => {
    try {
      await createOrders();
    } catch (error) {
      console.error(error);
      process.exit(1);
    } finally {
      await client.$disconnect();
    }
  };
  load();
  
  function generateRandomId(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  //+++++++++++++++++++++++======FUNCTIONS SEED======+++++++++++++++++++++++++++++++
  async function createOrders() {
    try {
      const products = await client.product.findMany();
  
      if (products.length === 0) {
        console.log('There is no products available.');
        return;
      }
  
      for (const product of products) {
        const platformId = generateRandomId(10);
  
        const order = await client.order.create({
          data: {
            platform_id: platformId,
          },
        });
  
        console.log(`Order created with platform_id: ${platformId}`);
  
        await client.orderProducts.create({
          data: {
            order: {
              connect: {
                platform_id: platformId,
              },
            },
            product: {
              connect: {
                platform_id: String(product.platform_id),
              },
            },
          },
        });
  
        console.log(`Product associated with: ${product.id}`);
      }
  
      console.log('OK.');
  
    } catch (error) {
      console.error('Erro while creating orders:', error);
    } finally {
      await client.$disconnect();
    }
  }