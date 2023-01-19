import { Modules, Prisma } from "@prisma/client"
import { prisma } from "../lib/prisma"

async function main() {
  const response = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT * FROM modules`
  )

  response.map(item => console.log(item.name))

  // console.log(response)
}

main()