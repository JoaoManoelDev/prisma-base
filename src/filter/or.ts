import { prisma } from "../lib/prisma"

async function main() {
  const response = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: 'ReactJS',
            mode: 'insensitive'
          },
        },
        {
          name: {
            contains: 'React',
            mode: 'insensitive'
          }
        }
      ],
      AND: {
        duration: 200
      }
    }
  })

  console.log(response)
}

main()