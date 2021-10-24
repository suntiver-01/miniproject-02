import React from 'react'
import * as S from './HeadBG.styled'
import {Button} from '../globals.styled'

const HeadBG = () => {
    return (
        <React.Fragment>
                <S.BgContainer>
                    <S.Bg>
                        <S.VideoBg  src={'/assets/videos/city.mp4'}  type="video/mp4"  autoPlay  loop muted playsInline />
                    </S.Bg>

                    <S.BgContent>
                        <S.BgItems>
                            <S.BgH1>Unreal Destinations</S.BgH1>
                             <S.BgP>Out of this word</S.BgP>
                            <Button primary="true"  big="true" round="true">Travel Now</Button>
                        </S.BgItems>
                    </S.BgContent>
                </S.BgContainer>


        </React.Fragment>
    )
}

export default HeadBG
