import tenis from "../assets/tenis.png";
import pontinhos from "../assets/pontinhos.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="conteudo">
        <h6>Melhores ofertas personalizadas</h6>
        <h2>
          Queima de
          <br />
          estoque Nike 🔥
        </h2>
        <p>
          Consequat culpa exercitation mollit nisi excepteur do
          <br />
          do tempor laboris eiusmod irure consectetur.
        </p>
        <a href="" className="btn">
          Ver Ofertas
        </a>
      </div>
      <img src={tenis} alt="" className="tenis" />
      <img src={pontinhos} alt="" className="detalhe" />
    </section>
  );
};

export default Banner;
