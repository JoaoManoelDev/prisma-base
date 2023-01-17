import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.courses.findMany({
    include: {
      teacher: true
    }
  })

  console.log(response)
}

main()