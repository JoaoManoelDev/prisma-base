import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.books.create({
    data: {
      name: 'Arquitetura limpa',
      author_id: '3b1fdfdd-dc13-4b98-aff1-f7113b03b4e1'
    },
  })

  console.log(response)
}

main()