const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CategoryController {
  static async listPage(req, res) {
    const resault = await prisma.category.findMany();
    res.render("pages/category/list", { categories: resault });
  }
  static async createPage(req, res) {
    res.render("pages/category/create", { categories: [] });
  }
  static async editPage(req, res) {
    const resault = await prisma.category.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.render("pages/category/edit", { category: resault });
  }
  static async add(req, res) {
    await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });
    res.redirect("/category");
  }
  static async update(req, res) {
    await prisma.category.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
      },
    });
    res.redirect("/category");
  }
  static async delete(req, res) {
    await prisma.category.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.redirect("/category");
  }
}

module.exports = CategoryController;
