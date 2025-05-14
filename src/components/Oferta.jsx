import produtooferta from "../assets/produtooferta.png";

const Oferta = () => {
  return (
    <section id="oferta">
      <div>
        <div className="produto-detalhe"></div>
        <img src={produtooferta} alt="" className="produto-oferta" />
      </div>
      <div className="flex-1">
        <h6>Oferta especial</h6>
        <h2>
          Air Jordan edição de <br /> colecionador
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          pariatur ab at nulla! Autem, maxime et? Dolorum labore fugiat
          doloribus dignissimos ab at sunt ipsa nesciunt. Nam repellendus
          quaerat quod.
        </p>
        <a href="" className="btn">
          Ver Oferta
        </a>
      </div>
    </section>
  );
};

export default Oferta;
