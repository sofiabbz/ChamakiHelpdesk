const express = require("express");
const { PrismaClient } = require("@prisma/client");
// PrismaClient — conecta com o banco de dados

const router = express.Router();
// Router (roteador) — agrupa as rotas de usuário

const prisma = new PrismaClient();

// CADASTRAR usuário
router.post("/cadastro", async (req, res) => {
  // post — método HTTP pra criar dados
  // async — permite usar await (esperar)
  try {
    const { name, email, cpf, phone, password } = req.body;
    // Pega os dados que vieram do formulário

    const user = await prisma.user.create({
      data: { name, email, cpf, phone, password },
    });
    // Cria o usuário no banco de dados

    res.status(201).json(user);
    // 201 = Created (criado com sucesso)
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar usuário" });
    // 400 = Bad Request (algo deu errado)
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });
    // findUnique — busca um usuário pelo email

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Email ou senha incorretos" });
      // 401 = Unauthorized (não autorizado)
    }

    res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
  } catch (error) {
    res.status(400).json({ error: "Erro ao fazer login" });
  }
});

module.exports = router;
// Exporta o router pra usar no server.js