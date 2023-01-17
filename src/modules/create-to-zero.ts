import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'Curso de Elixir',
          description: 'Curso avançado de Elixir',
          duration: 300,
          teacher: {
            create: {
              name: 'Professor Elixir'
            }
          }
        },
      },
      module: {
        create: {
          name: 'Fênix',
          description: 'Conhecendo o Fênix no Elixir'
        }
      }
    }
  })

  console.log(response)
}

main()