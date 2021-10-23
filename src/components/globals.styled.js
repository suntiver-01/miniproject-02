import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
   background: ${({ primary }) => (primary ? '#F26A2E' : '#077BF1')};
   white-space: nowrap;
   padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
   color:#fff;
   font-size: ${({big}) => (big ? "20px" : "16px")};
   outline: none;
   border: none;
   min-width: 100px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s !important;
   border-radius: ${({round}) => (round ? "50px" : "none")};

   &:hover{
     background: ${({ primary }) => (primary ? '#077BF1' : '#F26A2E')};
     transform: translateY(-2px);
   }


`;

export default GlobalStyle;
