const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

// CRIAR chamado
router.post("/", async (req, res) => {
  try {
    const { title, description, category, priority, userId } = req.body;

    const ticket = await prisma.ticket.create({
      data: { title, description, category, priority, userId },
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar chamado" });
  }
});

// LISTAR todos os chamados
router.get("/", async (req, res) => {
  // get — método HTTP pra buscar dados
  try {
    const tickets = await prisma.ticket.findMany({
      include: { user: true, comments: true },
      orderBy: { createdAt: "desc" },
    });
    // findMany — busca todos os chamados
    // include — traz os dados do usuário e comentários junto
    // orderBy — ordena do mais recente pro mais antigo

    res.json(tickets);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar chamados" });
  }
});

// BUSCAR um chamado pelo ID
router.get("/:id", async (req, res) => {
  // :id — parâmetro dinâmico na URL
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: parseInt(req.params.id) },
      // parseInt — converte o id de texto pra número
      include: {
        user: true,
        comments: { include: { user: true } },
      },
    });

    if (!ticket) {
      return res.status(404).json({ error: "Chamado não encontrado" });
      // 404 = Not Found (não encontrado)
    }

    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar chamado" });
  }
});

// ATUALIZAR status do chamado
router.put("/:id", async (req, res) => {
  // put — método HTTP pra atualizar dados
  try {
    const { status } = req.body;

    const ticket = await prisma.ticket.update({
      where: { id: parseInt(req.params.id) },
      data: { status },
    });

    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar chamado" });
  }
});

// ADICIONAR comentário
router.post("/:id/comments", async (req, res) => {
  try {
    const { text, userId } = req.body;

    const comment = await prisma.comment.create({
      data: {
        text,
        userId,
        ticketId: parseInt(req.params.id),
      },
      include: { user: true },
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: "Erro ao adicionar comentário" });
  }
});

module.exports = router;