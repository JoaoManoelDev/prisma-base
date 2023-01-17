import { prisma } from './lib/prisma'

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de MySQL',
      duration: 200,
      description: 'Curso de MySQL básico.'
    }
  })

  console.log(response)
}

main()
