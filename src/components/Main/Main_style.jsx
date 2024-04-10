import styled from "styled-components";

export const Section = styled.section`

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #ffc72c;

  h1 {
    color: white;
    width: 35%;
    height: 90px;
  }

  h1 color {
    color: red;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 20vw;
    margin: 50px;
  }

  

  .bigmac {
    width: 10vw;
    cursor: pointer;
  }

  .hamburguer {
    height: 15vw;
  }


`;

export const Card = styled.div`


  
  width: 20vw;
  border-radius: 7px;
  border: none;
  

  img {
    width: 100%;
  }

  h2 {
    margin-left: 9%;
    margin-top: 10%;

  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFBC0D;
    border-radius: 8px;
    width: 6vw;
    height: 2vw;
    margin-left: 1%;
    margin-top: 5%;
    margin-bottom: 5%;
    cursor: pointer;
    border: none;
  }

  background-color: white;

`

export const Segundasection = styled.section`

background-color: #FEB706;
   
border: solid 2px red;

  .card{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 3vw;


  }


  .promocao {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 10%;  
}


`

 








