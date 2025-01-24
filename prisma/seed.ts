import { PrismaClient } from "@prisma/client";
import { lessons, users } from "./data";

const prisma = new PrismaClient();

async function seed() {
  try {
    console.log("Seeding lessons...");
    await prisma.lesson.deleteMany();
    await prisma.user.deleteMany();

    const addedLessons = await Promise.all(
      lessons.map(async (lesson) => {
        return prisma.lesson.create({
          data: lesson,
        });
      }),
    );
    users.forEach(async (user) => {
      await prisma.user.create({
        data: { ...user, lessons: [addedLessons[0].id] },
      });
    });

    console.log("Seeding completed!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
