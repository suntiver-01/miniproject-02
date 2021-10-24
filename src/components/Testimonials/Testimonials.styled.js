import styled from 'styled-components';


export const  TestimonialsContainer = styled.div`
      width: 100%;
      background: #fcfcfc;
      color: #000;
      padding: 5rem calc((100vw - 1300px) /2);
      height: 100%;
`

export const  TopLine = styled.p`
      color: #077bf1;
      font-size: 1rem;
      padding-left: 2rem;
      margin-bottom: 0.75rem;
`

export const  Description = styled.div`
     text-align: start;
     padding-left: 2rem;
     margin-bottom: 4rem;
     font-size: clamp(1.5rem,5vw,2rem);
     font-weight: bold;
      
`

export const  ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:0 2rem;

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    
    }

`

export const  ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
      
`
export const  Testimonial = styled.div`
      padding-top: 1rem;
      padding-right: 2rem;
      h3{
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-style: italic;
      }

      p{
          color: #3b3b3b;
      }

`

export const  ColumnTwo = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 2rem;
      grid-gap: 10px;
      @media screen and (max-width:500px){
        grid-template-columns: 1fr;
    
     }

`

export const Images = styled.img`
      height: 100%;
      max-width: 100%;
      border-radius: 10px;
      filter: brightness(80%);
    
`

