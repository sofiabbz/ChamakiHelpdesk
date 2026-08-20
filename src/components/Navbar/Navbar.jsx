import "./Navbar.css";

function Navbar() {
  // Essa função é o componente da barra de navegação
  // Ela retorna o HTML que aparece no topo da landing page

  return (
    <nav className="navbar">
      {/* className é como o React escreve "class" do HTML */}
      {/* Conecta esse elemento com o estilo .navbar no CSS */}

      <h1 className="navbar-logo">Chamaki</h1>
      {/* Logo do site */}

      <ul className="navbar-links">
        {/* ul = unordered list (lista não ordenada) */}
        {/* Cada li = list item (item da lista) */}

        <li><a href="#home">Home</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sobre">Sobre nós</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <button className="navbar-btn">Entrar</button>
      {/* Botão que futuramente leva pra tela de login */}
    </nav>
  );
}

export default Navbar;