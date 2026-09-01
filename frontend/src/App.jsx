import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ClientDashboard from "./pages/ClientDashboard/ClientDashboard";
import TechDashboard from "./pages/TechDashboard/TechDashboard";
import NewTicket from "./pages/NewTicket/NewTicket";
import TicketDetail from "./pages/TicketDetail/TicketDetail";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-tecnico"
          element={
            <ProtectedRoute>
              <TechDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/novo-chamado"
          element={
            <ProtectedRoute>
              <NewTicket />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chamado/:id"
          element={
            <ProtectedRoute>
              <TicketDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relatorios"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/configuracoes"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
