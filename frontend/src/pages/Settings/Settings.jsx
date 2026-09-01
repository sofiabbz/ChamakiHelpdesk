import Sidebar from "../../components/Sidebar/Sidebar";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings-page">
      <Sidebar type="tech" />
      <main className="settings-main">
        <h1 className="settings-title">Configurações</h1>
        <p className="settings-subtitle">Gerencie as configurações do sistema.</p>

        <div className="settings-card">
          <div className="settings-coming-soon">
            <span className="settings-icon">⚙️</span>
            <h2>Em desenvolvimento</h2>
            <p>Esta funcionalidade estará disponível em breve. Você poderá configurar categorias, prioridades, notificações e permissões do sistema.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;