const { PrismaClient } = require("@prisma/client");
const { generateHash } = require("../lib/bcrypt");
const prisma = new PrismaClient();

const shoes = [
  {
    name: "Sport Shoe",
    merk: "Nike",
    qty: 12,
    available: false,
    desc: "Wearing a good pair of shoes is important for maintaining overall foot health and preventing foot pain and injuries. Good shoes provide proper support and cushioning for the feet, reducing the impact of everyday activities like walking, running, and standing. Quality shoes are made from durable materials that allow the feet to breathe and move naturally, preventing foot odor and fungal infections. Additionally, good shoes can improve posture, reduce back pain, and enhance athletic performance for sports and exercise. Investing in a good pair of shoes is a smart choice for anyone who wants to prioritize their foot health and comfort.",
    price: 50000,
    img: "https://www.travelandleisure.com/thmb/eKGIFTp7RBsI6GbSv_Jqs3S8kAE=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/adidas-womens-cloudfoam-pure-running-shoe-5f4e6602f9444d0f8570ec4c3f949c22.jpg",
    categoryId: 1,
  },
  {
    name: "Sport Shoe",
    merk: "Adidas",
    qty: 10,
    available: true,
    desc: "Wearing a good pair of shoes is important for maintaining overall foot health and preventing foot pain and injuries. Good shoes provide proper support and cushioning for the feet, reducing the impact of everyday activities like walking, running, and standing. Quality shoes are made from durable materials that allow the feet to breathe and move naturally, preventing foot odor and fungal infections. Additionally, good shoes can improve posture, reduce back pain, and enhance athletic performance for sports and exercise. Investing in a good pair of shoes is a smart choice for anyone who wants to prioritize their foot health and comfort.",
    price: 90000,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3e85cebb-b631-4c33-9fd6-dc13eae442d4/mc-trainer-training-shoe-T9vmbZ.png",
    categoryId: 1,
  },
  {
    name: "Flat Shoe",
    merk: "Gucci",
    qty: 20,
    available: true,
    desc: "Wearing a good pair of shoes is important for maintaining overall foot health and preventing foot pain and injuries. Good shoes provide proper support and cushioning for the feet, reducing the impact of everyday activities like walking, running, and standing. Quality shoes are made from durable materials that allow the feet to breathe and move naturally, preventing foot odor and fungal infections. Additionally, good shoes can improve posture, reduce back pain, and enhance athletic performance for sports and exercise. Investing in a good pair of shoes is a smart choice for anyone who wants to prioritize their foot health and comfort.",
    price: 190000,
    img: "https://www.travelandleisure.com/thmb/1uFVFdJdietsGpy6D85Ikci54wE=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Allbirds-Womens-Plant-Pacers-c51a6d93cc554e60b33b3313c1bad464.jpg",
    categoryId: 1,
  },
];

const categories = [{ name: "Sport Shoe" }, { name: "Cassual Shoe" }];

async function main() {
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  for (const shoe of shoes) {
    await prisma.shoe.create({
      data: shoe,
    });
  }

  await prisma.user.create({
    data: {
      username: "admin",
      password: await generateHash("123"),
    },
  });
  console.log("Seed data success");
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
