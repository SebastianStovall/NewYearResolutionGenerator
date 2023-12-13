import { prisma } from '../../../server/db/client'

async function getResolution(req, res) {
    if(req.method === "GET"){
        const resolution = await retrieveRandomInstance()
        console.log("RESOLUTION ----> ", resolution)
        if(!resolution){
            res.status(500).json({message: 'Error retrieving your resolution'})
        } else {
            res.status(200).json(resolution)
        }
    }
}

export async function retrieveRandomInstance(){
    try {
        const count = await prisma.resolution.count()
        let randomId = null
        while(randomId === null || randomId === 0) randomId = Math.floor(Math.random() * count)

        const resolution = await prisma.resolution.findUnique({
            where: {
                id: randomId
            }
        })
        return resolution

    } catch (e) {
        console.error(e);
        return null;

    } finally {
        await prisma.$disconnect();
    }
}

export default getResolution
