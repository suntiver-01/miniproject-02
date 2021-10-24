import React from "react";
import * as S from "./Testimonials.styled";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { data } from "./data";

function Testimonials() {
  return (
    <React.Fragment>
      <S.TestimonialsContainer>
        <S.TopLine>Testimonials</S.TopLine>

        <S.Description>What People are Saying</S.Description>

        <S.ContentWrapper>
          <S.ColumnOne>
            <S.Testimonial>
              <IoMdCheckmarkCircleOutline
                style={{
                  color: "#3fffa8",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Sean Michaels</h3>
              <p>
                "The greatest experience of my life! It was so much gun
                exploring the mountains ant they made it super exsy to book my
                trip and accommodation."
              </p>
            </S.Testimonial>
            <S.Testimonial>
              <FaRegLightbulb
                style={{
                  color: "#f9b19b",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              />
              <h3>Sarah Kin</h3>
              <p>
                "The greatest experience of my life! It was so much gun
                exploring the mountains ant they made it super exsy to book my
                trip and accommodation."
              </p>
            </S.Testimonial>
          </S.ColumnOne>
          <S.ColumnTwo>
            {data?.map((item, index) => (
              <S.Images src={item.img} key={index} alt={item.alt} />
            ))}
          </S.ColumnTwo>
        </S.ContentWrapper>
      </S.TestimonialsContainer>
    </React.Fragment>
  );
}

export default Testimonials;
