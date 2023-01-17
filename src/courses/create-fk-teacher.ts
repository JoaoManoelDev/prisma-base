import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de Futebol',
      description: 'Curso avançado de Futebol',
      duration: 300,
      teachers_id: "3781fd77-686a-4fab-96f7-d692c1e7695c"
    }
  })

  console.log(response)
}

main()
