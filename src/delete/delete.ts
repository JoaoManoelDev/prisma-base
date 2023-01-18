import { prisma } from "../lib/prisma"

async function main() {
  const response = await prisma.coursesModules.delete({
    where: {
      id: '1beec197-47ad-4b1a-afc3-3912cef28b45'
    }
  })
}

main()