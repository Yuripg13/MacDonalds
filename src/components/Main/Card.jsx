import * as S from "./Main_style.jsx";

export default function Card({ imagem, texto }) {
  return (
    <S.Card className="card">
       <img src={imagem} alt="img" />
       <h2>{texto}</h2>
       <a href="https://www.mcdonalds.com.br/" target="blank"> <button>Clique aqui</button>  </a>   
    </S.Card>
  );
}





