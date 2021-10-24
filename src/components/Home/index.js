import React from "react";
import Navbar from '../Navbar'
import HeadBG from '../HeadBG'
import GlobalStyle from "../globals.styled";
import Trips from "../Trips";
import Testimonials from '../Testimonials'
export default function Home() {
  return (
    <React.Fragment>
        <GlobalStyle />
        <Navbar/>
        <HeadBG/>
        <Trips heading="Our Favorite Destination"/>
        <Testimonials/>
     
  
    </React.Fragment>
  );
}
