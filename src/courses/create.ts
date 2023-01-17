import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de ReactJS',
      duration: 200,
      description: 'Curso de ReactJS básico.',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Joao Manoel'
          },
          create: {
            name: 'Joao Manoel'
          }
        }
      }
    }
  })

  console.log(response)
}

main()
