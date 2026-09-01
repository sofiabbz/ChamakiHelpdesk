const express = require("express");
const { PrismaClient } = require("@prisma/client");
// PrismaClient — conecta com o banco de dados

const router = express.Router();
// Router (roteador) — agrupa as rotas de usuário

const prisma = new PrismaClient();

// CADASTRAR usuário
router.post("/cadastro", async (req, res) => {
  try {
    const { name, email, cpf, phone, password, role } = req.body;

    const user = await prisma.user.create({
      data: { name, email, cpf, phone, password, role: role || "client" },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar usuário" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Email ou senha incorretos" });
    }

    res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
  } catch (error) {
    res.status(400).json({ error: "Erro ao fazer login" });
  }
});

// ATUALIZAR perfil
router.put("/:id", async (req, res) => {
  try {
    const { name, phone } = req.body;

    const user = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: { name, phone },
    });

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar perfil" });
  }
});

module.exports = router;
// Exporta o router pra usar no server.js