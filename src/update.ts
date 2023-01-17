import { prisma } from './lib/prisma'

async function main() {
  const response = await prisma.courses.update({
    where: {
      id: "3f18f24f-abff-4cbd-a8f2-c4a97ae9f817"
    },
    data: {
      duration: 300,
      description: 'Curso de NodeJS avançado'
    }
  })

  console.log(response)
}

main()