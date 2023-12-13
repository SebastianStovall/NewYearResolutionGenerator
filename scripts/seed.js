const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

    async function seedDatabase() {
        try {
            // seed resolutions
            const resolutions = [
                { id: 1, prompt: 'Exercise for at least 30 minutes every day.', image: 'https://th.bing.com/th/id/OIG.JYwBVDuWenA.0H8vDtZd?pid=ImgGn' },
                { id: 2, prompt: 'Eat a more balanced and nutritious diet.', image: 'https://th.bing.com/th/id/OIG.wHO2YpjH89HhxdYbroV8?pid=ImgGn' },
                { id: 3, prompt: 'Practice mindfulness and meditation regularly.', image: 'https://th.bing.com/th/id/OIG.qNNCMRjxR3CYbuqHdlgh?pid=ImgGn' },
                { id: 4, prompt: 'Learn a new skill or hobby.', image: 'https://th.bing.com/th/id/OIG.05DjTGH6f_J2bc.NtvWg?pid=ImgGn' },
                { id: 5, prompt: 'Read a book every month.', image: 'https://th.bing.com/th/id/OIG.vENivMkUdZXpqFZnkS1C?pid=ImgGn' },
                { id: 6, prompt: 'Save a specific amount of money each month.', image: 'https://th.bing.com/th/id/OIG.haCeSGYb_J2W7auoTH_q?pid=ImgGn' },
                { id: 7, prompt: 'Volunteer for a local charity or community organization.', image: 'https://th.bing.com/th/id/OIG.7kVcQQCkx170ksjGSnfH?pid=ImgGn' },
                { id: 8, prompt: 'Travel to a new place and explore different cultures.', image: 'https://th.bing.com/th/id/OIG.Nuq_dI9vGFTvF299HpDs?pid=ImgGn' },
                { id: 9, prompt: 'Spend more quality time with family and friends.', image: 'https://th.bing.com/th/id/OIG.id3q1SQf3Hh18V52L9cc?pid=ImgGn' },
                { id: 10, prompt: 'Drink more water and reduce soda or sugary drinks.', image: 'https://th.bing.com/th/id/OIG.OeYUvKieVWsglr.E33BB?pid=ImgGn' },
                { id: 11, prompt: 'Quit smoking or reduce tobacco consumption.', image: 'https://th.bing.com/th/id/OIG.zdAauI7ip_RBWVMfx452?pid=ImgGn' },
                { id: 12, prompt: 'Get enough sleep each night (7-8 hours).', image: 'https://th.bing.com/th/id/OIG.iiVMp_9c.tjSAg2pUFz3?pid=ImgGn' },
                { id: 13, prompt: 'Set and achieve career-related goals.', image: 'https://th.bing.com/th/id/OIG.dz5ES2x6cWPzg17tGrEV?pid=ImgGn' },
                { id: 14, prompt: 'Reduce stress through relaxation techniques.', image: 'https://th.bing.com/th/id/OIG.IvCplncf8vPtfGmgoX1d?pid=ImgGn' },
                { id: 15, prompt: 'Start a gratitude journal.', image: 'https://th.bing.com/th/id/OIG.Dz8Tfd9Gw7iSFjTnEBrW?w=1024&h=1024&rs=1&pid=ImgDetMain' },
                { id: 16, prompt: 'Be more environmentally conscious (reduce, reuse, recycle).', image: 'https://th.bing.com/th/id/OIG.jJW14RoOEI9jd2bCpxcY?pid=ImgGn' },
                { id: 17, prompt: 'Learn a new language.', image: 'https://th.bing.com/th/id/OIG.gkJj.oVlAnL1Ef.L7K2f?pid=ImgGn' },
                { id: 18, prompt: 'Practice better time management.', image: 'https://th.bing.com/th/id/OIG.CCK76adWGYZ6zC81NEVS?pid=ImgGn' },
                { id: 19, prompt: 'Take up a fitness challenge, like running a marathon.', image: 'https://th.bing.com/th/id/OIG.Ox.J6lLnTsrKfh0YQAp2?pid=ImgGn' },
                { id: 20, prompt: 'Disconnect from technology for a specific amount of time each day.', image: 'https://th.bing.com/th/id/OIG.U59MdmP5Ne4OtiLQAKgu?pid=ImgGn' },
                { id: 21, prompt: 'Improve work-life balance.', image: 'https://th.bing.com/th/id/OIG.xgbeHy3KMs7lo6bYfZNL?pid=ImgGn' },
                { id: 22, prompt: 'Develop a daily or weekly routine.', image: 'https://th.bing.com/th/id/OIG.zi7.NTBpmM4lKx6f98wL?pid=ImgGn' },
                { id: 23, prompt: 'Foster better communication in relationships.', image: 'https://th.bing.com/th/id/OIG.JJhBsGauUB0rpFqYpipd?pid=ImgGn' },
                { id: 24, prompt: 'Learn to cook and eat more homemade meals.', image: 'https://th.bing.com/th/id/OIG.28TQ6DcB7SgQJkx5x8jY?pid=ImgGn' },
                { id: 25, prompt: 'Focus on personal growth and self-improvement.', image: 'https://th.bing.com/th/id/OIG.mV7gcc5Dk.O3nBk8WSqM?pid=ImgGn' },
                { id: 26, prompt: 'Start a side hustle or small business.', image: 'https://th.bing.com/th/id/OIG.AqwEaKSjABHZxMkSnOjR?pid=ImgGn' },
                { id: 27, prompt: 'Spend less time on social media.', image: 'https://th.bing.com/th/id/OIG.Gw1JbNYrPW3lxwckQN0I?pid=ImgGn' },
                { id: 28, prompt: 'Foster a positive mindset and practice optimism.', image: 'https://th.bing.com/th/id/OIG.UiRr6vvOSAz93VFzQYGR?pid=ImgGn' },
                { id: 29, prompt: 'Attend a personal development workshop or seminar.', image: 'https://cdn.discordapp.com/attachments/972706009728561162/1184350979290837092/OIG.jpg' },
                { id: 30, prompt: 'Set boundaries and learn to say no when necessary.', image: 'https://cdn.discordapp.com/attachments/972706009728561162/1184350694212386927/abeaa68d-3c3a-4e7e-b480-f41ed99285cb.jpg' },
            ]

            for (const resolution of resolutions) {
                await prisma.resolution.create({
                    data: resolution
                });
            }

    console.log("SEEDED DATA SUCCESSFULLY")

    } catch(e) {
        console.log("ERROR WHILE SEEDING DATA", e)
    } finally {
        await prisma.$disconnect()
    }
}

seedDatabase()
