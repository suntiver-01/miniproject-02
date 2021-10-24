import React from "react";
import * as S from "./Stats.styled";
import { StatsData } from "./data";

const Stats = () => {
  return (
    <React.Fragment>
      <S.StatsContainer>
        <S.Heading>Why Choose Us ?</S.Heading>
        <S.Wrapper>
          {StatsData.map((item, index) => {
            return (
              <S.StatusBox key={index}>
                <S.Icon>{item.icon}</S.Icon>
                <S.Title>{item.title}</S.Title>
                <S.Description>{item.desc}</S.Description>
              </S.StatusBox>
            );
          })}
        </S.Wrapper>
      </S.StatsContainer>
    </React.Fragment>
  );
};

export default Stats;
