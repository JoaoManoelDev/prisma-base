import express from 'express'
import { prisma } from './lib/prisma'

const app = express()

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de NodeJS',
      duration: 200,
      description: 'Curso de NodeJs básico.'
    }
  })

  console.log(response)
}

main()

app.listen(3333, () => console.log('Server running in port 3333.'))