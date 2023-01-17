import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de Flutter',
      description: 'Curso avançado de Flutter',
      duration: 300,
      teacher: {
        create: {
          name: 'Junior Araujo'
        }
      }
    }
  })

  console.log(response)
}

main()
