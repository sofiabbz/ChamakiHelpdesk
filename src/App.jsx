import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ClientDashboard from "./pages/ClientDashboard/ClientDashboard";
import TechDashboard from "./pages/TechDashboard/TechDashboard";
import NewTicket from "./pages/NewTicket/NewTicket";
import TicketDetail from "./pages/TicketDetail/TicketDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/dashboard-tecnico" element={<TechDashboard />} />
        <Route path="/novo-chamado" element={<NewTicket />} />
        <Route path="/chamado/:id" element={<TicketDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;