import React from 'react'
import logo from "../../assets/logo.svg";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";

import * as S from "./Footer_style";



 function Footer() {
  return (
    <S.Footer>
        <section>
            <div>
                <img className='img' src={logo} alt="" />
                <h3>© McDonald’s 2024</h3>
            </div>
            <div className='store'>
              <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR&gl=US" target='blank'> <img  className='img1'  src={playstore} alt="" /> </a>
              <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187" target='blank'> <img  className='img2'  src={appstore} alt="" /> </a> 
            </div>
        </section>
    </S.Footer>
  )
}

export default Footer













