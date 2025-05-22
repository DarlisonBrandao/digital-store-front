import logo from "../assets/logo.png";
import lupa from "../assets/icon-lupa.png";
import carrinho from "../assets/icon-carrinho.png";
import { NavLink } from "react-router";

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
          <a href="/auth" className="btn">
            Entrar
          </a>
        </div>

        <div className="carrinho">
          <img src={carrinho} alt="carrinho" />
          <span>2</span>
        </div>
      </div>

      <nav>
        <NavLink to= "/">Home</NavLink>
        <NavLink to= "/produtos">Produtos</NavLink>
        <NavLink to= "/categorias">Categorias</NavLink>
        <NavLink to= "/meus-pedidos">Meus Pedidos</NavLink>

      </nav>
    </header>
  );
};

export default Header;
