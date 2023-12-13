import { prisma } from '../../../server/db/client'

async function getResolution(req, res) {
    if(req.method === "GET"){
        const resolution = await retrieveRandomInstance()
        if(!resolution){
            res.status(500).json({message: 'Error retrieving your resolution'})
        } else {
            res.status(200).json(resolution)
        }
    } else if (req.method === 'POST') {
        const data = req.body.resolution
        console.log("DATA", data)
        const newResolution = await createNewResolution(data)
        if (!newResolution) {
            res.status(500).json({message: 'ERROR WHILE CREATING RESOLUTION'})
        } else {
            res.status(200).json({message: 'successfully created resolution'})
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


async function createNewResolution(data) {
    const count = await prisma.resolution.count() // issue reset local autoincrement for postgresql, use count instead then have new instance be (count + 1)
    console.log("COUNT", count)
    try {
        const newResolution = await prisma.resolution.create({
            data: {
                id: count + 1,
                prompt: data.text,
                image: null
            }
        })
        return newResolution

    } catch (e) {
        console.error(e);
        return null;

    } finally {
        await prisma.$disconnect();
    }
}

export default getResolution
