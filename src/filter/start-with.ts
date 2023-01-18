import { prisma } from "../lib/prisma"

async function main() {
  const response = await prisma.courses.findMany({
    where: {
      name: {
        startsWith: "curso",
        mode: 'insensitive'
      },
    }
  })

  console.log(response)
}

main()