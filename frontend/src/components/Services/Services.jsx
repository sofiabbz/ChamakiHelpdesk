import { useState } from "react";
import estrela from "../../assets/estrela.png";
import "./Services.css";

function Services() {
  const [activeCard, setActiveCard] = useState(null);
  // activeCard (card ativo) — guarda qual serviço está aberto
  // null significa nenhum aberto

  const services = [
    {
      id: 1,
      title: "Formatação e Instalação de Sistema",
      description:
        "Seu computador lento ou com erros constantes? Fazemos a formatação completa e reinstalação do sistema operacional, deixando sua máquina como nova.",
    },
    {
      id: 2,
      title: "Remoção de Vírus e Malware",
      description:
        "Computador travando, abrindo pop-ups ou com comportamento estranho? Identificamos e removemos todas as ameaças, deixando seu PC limpo e protegido.",
    },
    {
      id: 3,
      title: "Manutenção Preventiva",
      description:
        "Prevenir é melhor que remediar. Fazemos limpeza interna, atualização de drivers, otimização do sistema e troca de pasta térmica pra seu PC rodar sempre bem.",
    },
    {
      id: 4,
      title: "Suporte Remoto",
      description:
        "Resolvemos seu problema sem você sair de casa. Através de acesso remoto, nosso técnico se conecta ao seu computador e faz o diagnóstico e reparo na hora.",
    },
  ];
  // array (lista) de objetos — cada objeto é um serviço
  // com id, title (título) e description (descrição)

  return (
    <section className="services" id="servicos">
      {/* id="servicos" — permite que o link do navbar role até aqui */}

      <div className="services-header">
        <div className="services-header-left">
          <p className="services-subtitle">
            Oferecemos os melhores serviços para te ajudar, veja só:
          </p>
          <span className="services-hint">
            (Clique no serviço para + infos)
          </span>
        </div>

        <div className="services-card">
          <img src={estrela} alt="" className="services-star" />
          <h2 className="services-title">Serviços</h2>
        </div>
      </div>

      <div className="services-list">
        {services.map((service) => (
          // map (mapear) — percorre cada serviço e cria um elemento
          <div key={service.id}>
            <button
              className="service-item"
              onClick={() =>
                setActiveCard(activeCard === service.id ? null : service.id)
              }
              // ao clicar: se já está aberto, fecha (null)
              // se está fechado, abre (service.id)
            >
              <span>&gt; {service.title}</span>
            </button>

            {activeCard === service.id && (
              // se esse serviço está ativo, mostra a descrição
              <div className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
