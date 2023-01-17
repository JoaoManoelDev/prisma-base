import { prisma } from './lib/prisma'

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de NodeJS',
      duration: 200,
      description: 'Curso de NodeJs básico.'
    }
  })

  console.log(response)
}

main()
