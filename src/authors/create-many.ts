import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.authors.create({
    data: {
      name: 'Anonymous',
      books: {
        createMany: {
          data: [
            { name: 'Como ser um hacker' },
            { name: 'Técnicas avançadas de hacker' }
          ]
        }
      }
    }
  })

  console.log(response)
}

main()