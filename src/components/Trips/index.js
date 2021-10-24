import React from "react";
import * as S from "./Trips.styled";
import { data } from "./data";
import { ImLocation } from "react-icons/im";

function Trips(props) {
  const getTrips = () => {
    const tripsArray = [];
    data?.forEach((item, index) => {
      tripsArray.push(
        <S.ProductCard key={index}>
          <S.Img src={item.img} alt={item.alt}  />
          <S.ProductInfo>
            <S.TextWrap>
              <ImLocation />
              <S.ProductTitle>{item.name}</S.ProductTitle>
            </S.TextWrap>
            <S.ButtonS primary="true" round="true" >{item.Button}</S.ButtonS>
          </S.ProductInfo>
        </S.ProductCard>
      );
    });

    return tripsArray;
  };

  return (
    <React.Fragment>
      <S.ProductContainer>
        <S.ProductsHeading>{props.heading}</S.ProductsHeading>
        <S.ProductWrapper>{getTrips()}</S.ProductWrapper>
      </S.ProductContainer>
    </React.Fragment>
  );
}

export default Trips;
