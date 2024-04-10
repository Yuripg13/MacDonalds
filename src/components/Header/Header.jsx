import logo from "../../assets/logo.svg";
import cell1 from "../../assets/cell1.svg";
import cell2 from "../../assets/cell2.svg";

import * as S from "./header_style";

function Header() {

  const refresh = () => {
    window.location.reload();
 }


  return (
    <S.Header>
      <img onClick={refresh} src={logo} alt="" />

      <section>
        <div className="baixe">
          <img className="cell1" src={cell1} alt="" />
          <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR&gl=US" target="blank" >
          <h3 className="baixe">Baixe o App</h3>
          </a>
        </div>
        <div className="mequi">
          <a href="https://www.mcdonalds.com.br/pedidos" target="blank" >
          <h3 className="peca">Peça seu Méqui</h3>
          </a>
          <img className="cell2" src={cell2} alt="" />
        </div>
      </section>
    </S.Header>
  );
}

export default Header;
