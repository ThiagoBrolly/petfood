import './styles.css';

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img 
            src="https://a-static.mlcdn.com.br/618x463/racao-pedigree-carne-frango-e-cereais-para-caes-adultos-racas-medias-e-grandes-15-kg/lojapedigree/10219837/6fc9e9af2cf235c254ffb7472f754793.jpg"
            alt="Produto"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Ração Pedigree Carne Frango e Cereais Para Cães Adultos Raças Médias e Grandes 15 kg</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
}

export default Product;