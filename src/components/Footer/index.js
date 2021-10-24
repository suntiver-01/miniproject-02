import React from 'react'
import * as S from './Footer.styled'

const Footer = () => {
    return (
        <React.Fragment>
                <S.FooterContainer>
                    <S.FooterLinksWrapper>
                        <S.FooterDesc>
                            <h1>Explorix</h1>
                            <p>We strive to cretate the best experiences for our customers</p>
                        </S.FooterDesc>

                        <S.FooterLinkItems>
                                    <S.FooterLinkTitle>Contact Us </S.FooterLinkTitle>
                                    <S.FooterLink> Contact </S.FooterLink>
                                    <S.FooterLink> Support </S.FooterLink>
                                    <S.FooterLink> Destinations </S.FooterLink>
                                    <S.FooterLink> Sponsorships </S.FooterLink>
                        </S.FooterLinkItems>
                    </S.FooterLinksWrapper>
                    <S.FooterLinksWrapper>
                         <S.FooterLinkItems>
                                    <S.FooterLinkTitle>Vidoes</S.FooterLinkTitle>
                                    <S.FooterLink> Contact </S.FooterLink>
                                    <S.FooterLink> Support </S.FooterLink>
                                    <S.FooterLink> Destinations </S.FooterLink>
                                    <S.FooterLink> Sponsorships </S.FooterLink>
                        </S.FooterLinkItems>
                        <S.FooterLinkItems>
                                    <S.FooterLinkTitle>Social Media </S.FooterLinkTitle>
                                    <S.FooterLink> Contact </S.FooterLink>
                                    <S.FooterLink> Support </S.FooterLink>
                                    <S.FooterLink> Destinations </S.FooterLink>
                                    <S.FooterLink> Sponsorships </S.FooterLink>
                        </S.FooterLinkItems>
                    </S.FooterLinksWrapper>

                </S.FooterContainer>

        </React.Fragment>
    )
}

export default Footer
