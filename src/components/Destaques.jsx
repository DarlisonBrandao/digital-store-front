import foneouvido from "../assets/foneouvido.png";
import tenis2 from "../assets/tenis2.png";
import camisa from "../assets/camisa.svg";
import calca from "../assets/calca.svg";
import bone from "../assets/bone.svg";
import fone from "../assets/fone.svg";
import tenis3 from "../assets/tenis3.svg";

const Destaques = () => {
  return (
    <section id="destaques">
      <h3>coleções em destaque</h3>
      <div className="colecoes">
        <div>
          <div className="conteudo">
            <h6> 30% off</h6>
            <h2>
              Novo drop <br /> Supreme
            </h2>
            <a href="" className="btn inverso">
              Comprar
            </a>
          </div>
          <img src={camisa} alt="" />
        </div>

        <div>
          <div className="conteudo">
            <h6> 30% off</h6>
            <h2>
              Coleção
              <br /> Adidas
            </h2>
            <a href="" className="btn inverso">
              Comprar
            </a>
          </div>
          <img src={tenis2} alt="" />
        </div>

        <div>
          <div className="conteudo">
            <h6> 30% off</h6>
            <h2>
              Novo <br /> Beats Bass
            </h2>
            <a href="" className="btn inverso">
              Comprar
            </a>
          </div>
          <img src={foneouvido} alt="" />
        </div>
      </div>
      <h3>Departamentos</h3>
      <div className="departamentos">
        <div>
          <div className="icon">
            <img src={camisa} alt="" />
          </div>
          Camisetas
        </div>

        <div>
          <div className="icon">
            <img src={calca} alt="" />
          </div>
          Calças
        </div>

        <div>
          <div className="icon">
            <img src={bone} className="bone" alt="" />
          </div>
          Bonés
        </div>

        <div>
          <div className="icon">
            <img src={fone} alt="" />
          </div>
          headphones
        </div>

        <div>
          <div className="icon">
            <img src={tenis3} alt="" />
          </div>
          Tenis
        </div>
      </div>
    </section>
  );
};

export default Destaques;
