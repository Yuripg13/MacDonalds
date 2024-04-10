import bigmacc from "../../assets/bigmacc.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import sofa from "../../assets/sofa.png";
import loja from "../../assets/loja.png";
import juntos from "../../assets/juntos.png";
import * as S from "./Main_style.jsx";
import Card from "./Card";
import { useState } from "react"

function Main() {

  const [imgEvent, setImgEvent] = useState (bigmacc);

  
  return (
    <main>
      <S.Section>

        <div>
          <img className="hamburguer"  src={imgEvent} alt="" />
          <h1>BATEU AQUELA <color>#FOME</color> DE <color>#MÉQUI?</color></h1>
        </div>

        <figure>
          <img onClick={() => {setImgEvent(bigmacc)}} className="bigmac" src={bigmacc} alt="" />
          <img onClick={() => {setImgEvent(batata)}} className="bigmac" src={batata} alt="" />
          <img onClick={() => {setImgEvent(sorvete)}} className="bigmac"  src={sorvete} alt="" />
        </figure>
      </S.Section>

      <S.Segundasection>
        <h2 className="promocao">Promoção</h2>
        <div className="card" >
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card imagem={loja} texto={"venha conhecer nossa nova loja"} />
          <Card imagem={juntos} texto={"Confira as medidas que o Méqui adotou!"} />
        </div>
      </S.Segundasection>
    </main>

  

  );
}

export default Main; 