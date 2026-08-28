const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
// Importa as rotas

const app = express();

app.use(cors());
app.use(express.json());

// Conecta as rotas ao servidor
app.use("/api/users", userRoutes);
// Todas as rotas de usuário começam com /api/users

app.use("/api/tickets", ticketRoutes);
// Todas as rotas de chamado começam com /api/tickets

app.get("/", (req, res) => {
  res.json({ message: "Servidor Chamaki rodando!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});