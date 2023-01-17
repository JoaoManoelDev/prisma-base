import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      description: 'Curso avançado de React Native',
      duration: 300,
      teacher: {
        connect: {
          id: '676a1e1c-bcb3-49f9-ab39-85267af85b67'
        }
      }
    }
  })

  console.log(response)
}

main()
