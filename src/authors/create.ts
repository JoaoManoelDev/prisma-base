import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.authors.create({
    data: {
      name: 'CS Lewis',
      books: {
        create: {
          name: 'Cristianismo puro e simples'
        }
      }
    }
  })

  console.log(response)
}

main()