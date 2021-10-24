import React from 'react'
import * as S from './Email.styled'


const Email = () => {
    return (
        <React.Fragment>
            <S.EmailContainer>
            <S.EmailContent>
                <h1>Get Access to Exclusive Offers</h1>
                <p>Sign up for your newsletter below to get $100 off your first  trip!</p>
         
            <S.FormWrap>
                        <label  htmlFor="email">
                            <input  type="email" placeholder="Enter your email" id="email"/>
                        </label>
                        <S.ButtonS
                          as="button"
                          type="submit"
                          primary="true"
                          round="true"
                        
                        >Sign up</S.ButtonS>
            </S.FormWrap>
            </S.EmailContent>
            </S.EmailContainer>

        </React.Fragment>
    )
}

export default Email
