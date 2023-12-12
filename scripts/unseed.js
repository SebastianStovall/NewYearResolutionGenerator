const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

    async function unseedDatabase() {

        try {

            await prisma.resolution.deleteMany()

            console.log("UNSEEDED ALL DATA SUCCESS")

        } catch(e) {
            console.log("ERROR WHILE UNSEEDING DATA: ", e)
        } finally {
            await prisma.$disconnect()
        }
}

unseedDatabase()
