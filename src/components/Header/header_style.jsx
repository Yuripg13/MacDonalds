import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: sans-serif;
     text-decoration: none;
 }

`;


export const Header = styled.header`
  
  display: flex;
  justify-content: space-between;

  div {
    
    display: flex;
  }

  section {
    display: flex;
  }

  .mequi {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#FFC72C;
    height: 3vw;
    margin: 2px;
    margin-top: 21px;
    border-radius: 7px;
    cursor: pointer;
  }

  .baixe {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 21px;
    margin: 21px;
    height: 3vw;
    border-radius: 7px;
    cursor: pointer;
  }

  .cell1 {
    width: 30px;
  }

  .cell2 {
    width: 30px;
  }

  .peca {
    margin-left: 9px;
    color: black;
  
  }

  .baixe {
    font-weight: normal;
    margin-left: 1px;
    color: black;
    text-decoration: none;
  }

  img {
    margin: 15px;
    width: 5%;
    cursor: pointer;
  }
  
`;