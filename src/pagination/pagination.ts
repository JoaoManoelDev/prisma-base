import { prisma } from "../lib/prisma"

async function main() {
  let skip = 0
  let existData = true

  while(existData) {
    const response = await prisma.courses.findMany({
      skip,
      take: 2
    })

    skip += 2
    console.log(response)
    console.log('---------------------------')

    if (response.length <= 0) {
      existData = false
    }

  }

} 

main()