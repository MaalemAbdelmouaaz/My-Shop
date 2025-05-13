import { PrismaClient } from "@prisma/client";
import COUNTRIES from "../src/data/countries.json";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding countries...");
  
  // Create countries
  for (const country of COUNTRIES) {
    await prisma.country.upsert({
      where: { code: country.code },
      update: {},
      create: {
        name: country.name,
        code: country.code,
      },
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 