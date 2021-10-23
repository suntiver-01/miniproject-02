import React from "react";
import Navbar from '../Navbar'
import HeadBG from '../HeadBG'
import GlobalStyle from "../globals.styled";
export default function Home() {
  return (
    <React.Fragment>
        <GlobalStyle />
        <Navbar/>
        <HeadBG/>
     
  
    </React.Fragment>
  );
}
