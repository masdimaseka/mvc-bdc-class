const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShoeController {
  static async listPage(req, res) {
    const result = await prisma.shoe.findMany({
      include: {
        category: true,
      },
    });
    res.render("pages/shoe/list", { shoes: result });
  }

  static async detailPage(req, res) {
    const result = await prisma.shoe.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        category: true,
      },
    });
    res.render("pages/shoe/detail", { shoe: result });
  }

  static async createPage(req, res) {
    const categories = await prisma.category.findMany();
    res.render("pages/shoe/add", { categories: categories });
  }

  static async store(req, res) {
    await prisma.shoe.create({
      data: {
        name: req.body.name,
        merk: req.body.merk,
        qty: Number(req.body.qty),
        available: req.body.available === "true" ? true : false,
        price: Number(req.body.price),
        img: req.file.filename,
        desc: req.body.desc,
        categoryId: Number(req.body.category),
      },
    });

    res.redirect("/shoe");
  }

  static async editPage(req, res) {
    const categories = await prisma.category.findMany();
    const result = await prisma.shoe.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.render("pages/shoe/edit", { shoe: result, categories: categories });
  }

  static async update(req, res) {
    await prisma.shoe.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        merk: req.body.merk,
        qty: Number(req.body.qty),
        available: req.body.available === "true" ? true : false,
        price: Number(req.body.price),
        img: req.file ? req.file.name : undefined,
        desc: req.body.desc,
      },
    });

    res.redirect("/shoe");
  }

  static async delete(req, res) {
    await prisma.shoe.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.redirect("/shoe");
  }
}

module.exports = ShoeController;
