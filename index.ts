import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
    // Create a user
    /*const user = await prisma.user.create({
        data: {
            name : "John",
            email: "john@gmail.cm"
        }
    })
    console.log("Created user:", user);*/


    // Get all users
    /*const users = await prisma.user.findMany();
    console.log("All users:", users);*/


    // Create article and associate it with a user
    /*const article = await prisma.article.create({
        data: {
            title: "Shopify blog post",
            body: "Shopify is a great platform for e-commerce.",
            author: {
                connect: {
                    id: 1 // Assuming the user with ID 1 exists
                }
            }
        }
    })
    console.log("Created article:", article);*/


    // Get all articles with their authors
    /*const articles = await prisma.article.findMany();
    console.log("All articles:", articles);*/

    // create a user and article and associate them
    /*const userWithArticle = await prisma.user.create({
        data: {
            name: "Jak",
            email: "mail@heyjak.com",
            articles: {
                create: {
                    "title": "Jak's first article",
                    "body": "This is the body of Jak's first article."
                }
            }
        }
    })
    console.log(userWithArticle);*/


    // Get all users with their articles
    const usersWithArticles = await prisma.user.findMany({
        include: {
            articles: true
        }
    });
    
    // fetch articles with their authors
    usersWithArticles.forEach( user => {
        console.log(
            `User: ${user.name} (${user.email}) has articles:`
        )
        console.log("Articles: ")
        user.articles.forEach(article => {
            console.log(`- ${article.title}: ${article.body}`);
        })
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

