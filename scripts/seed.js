const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

    async function seedDatabase() {
        try {
            // seed resolutions
            const resolutions = [
                { id: 1, prompt: 'Exercise for at least 30 minutes every day.', image: '' },
                { id: 2, prompt: 'Eat a more balanced and nutritious diet.', image: '' },
                { id: 3, prompt: 'Practice mindfulness and meditation regularly.', image: '' },
                { id: 4, prompt: 'Learn a new skill or hobby.', image: '' },
                { id: 5, prompt: 'Read a book every month.', image: '' },
                { id: 6, prompt: 'Save a specific amount of money each month.', image: '' },
                { id: 7, prompt: 'Volunteer for a local charity or community organization.', image: '' },
                { id: 8, prompt: 'Travel to a new place and explore different cultures.', image: '' },
                { id: 9, prompt: 'Spend more quality time with family and friends.', image: '' },
                { id: 10, prompt: 'Drink more water and reduce soda or sugary drinks.', image: '' },
                { id: 11, prompt: 'Quit smoking or reduce tobacco consumption.', image: '' },
                { id: 12, prompt: 'Get enough sleep each night (7-8 hours).', image: '' },
                { id: 13, prompt: 'Set and achieve career-related goals.', image: '' },
                { id: 14, prompt: 'Reduce stress through relaxation techniques.', image: '' },
                { id: 15, prompt: 'Start a gratitude journal.', image: '' },
                { id: 16, prompt: 'Be more environmentally conscious (reduce, reuse, recycle).', image: '' },
                { id: 17, prompt: 'Learn a new language.', image: '' },
                { id: 18, prompt: 'Practice better time management.', image: '' },
                { id: 19, prompt: 'Take up a fitness challenge, like running a marathon.', image: '' },
                { id: 20, prompt: 'Disconnect from technology for a specific amount of time each day.', image: '' },
                { id: 21, prompt: 'Improve work-life balance.', image: '' },
                { id: 22, prompt: 'Develop a daily or weekly routine.', image: '' },
                { id: 23, prompt: 'Foster better communication in relationships.', image: '' },
                { id: 24, prompt: 'Learn to cook and eat more homemade meals.', image: '' },
                { id: 25, prompt: 'Focus on personal growth and self-improvement.', image: '' },
                { id: 26, prompt: 'Start a side hustle or small business.', image: '' },
                { id: 27, prompt: 'Spend less time on social media.', image: '' },
                { id: 28, prompt: 'Foster a positive mindset and practice optimism.', image: '' },
                { id: 29, prompt: 'Attend a personal development workshop or seminar.', image: '' },
                { id: 30, prompt: 'Set boundaries and learn to say no when necessary.', image: '' },
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
