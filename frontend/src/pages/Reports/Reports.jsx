import Sidebar from "../../components/Sidebar/Sidebar";
import "./Reports.css";

function Reports() {
  return (
    <div className="reports-page">
      <Sidebar type="tech" />
      <main className="reports-main">
        <h1 className="reports-title">Relatórios</h1>
        <p className="reports-subtitle">Em breve você poderá gerar relatórios dos chamados.</p>

        <div className="reports-card">
          <div className="reports-coming-soon">
            <span className="reports-icon">📊</span>
            <h2>Em desenvolvimento</h2>
            <p>Esta funcionalidade estará disponível em breve. Você poderá gerar relatórios de chamados por período, categoria, técnico e status.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reports;