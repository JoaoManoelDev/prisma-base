import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.modules.create({
    data: {
      name: 'react-hook-form',
      description: 'Conhecendo o react-hook-form',
      courses: {
        create: {
          course: {
            connect: {
              id: '426ea196-b6c9-45a2-b4ad-f5b4efa3e415'
            }
          }
        }
      }
    }
  })

  console.log(response)
}

main()