import logo from "../assets/logo.png";
import lupa from "../assets/icon-lupa.png";
import carrinho from "../assets/icon-carrinho.png";

const Header = () => {
  return (
    <header>
      <div className="topo">
        <div className="logo">
          <img src={logo} alt="Logo" />
          DIGITAL STORE
        </div>

        <div className="buscador">
          <input type="text" placeholder="Pesquisar produtos..." />
          <img src={lupa} alt="Lupa" />
        </div>

        <div className="acoes">
          <a href="">Cadastre-se</a>
          <a href="" className="btn">
            Entrar
          </a>
        </div>

        <div className="carrinho">
          <img src={carrinho} alt="carrinho" />
          <span>2</span>
        </div>
      </div>

      <nav>
        <a href="/" className="active">
          Home
        </a>
        <a href="/produtos">Produtos</a>
        <a href="/categorias">Categorias</a>
        <a href="/meus-pedidos">Meus Pedidos</a>
      </nav>
    </header>
  );
};

export default Header;
