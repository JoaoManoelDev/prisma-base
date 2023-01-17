import { prisma } from '../lib/prisma'

async function main() {
  const response = await prisma.coursesModules.create({
    data: {
      course_id: '426ea196-b6c9-45a2-b4ad-f5b4efa3e415',
      module_id: '27da2aef-78aa-4bc0-98b1-0917f01f1c79',
    }
  })

  console.log(response)
}

main()