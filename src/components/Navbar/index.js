import React from 'react';
import * as S from './Navbar.styled';
import {menuData } from './Menudata'
import {Button} from '../globals.styled'
function Navbar() {

  return (
    <React.Fragment>
            <S.Nav>
                <S.NavLink>EXPLORIX</S.NavLink>
                 <S.Bars />
                 <S.NavMenu>
                     {menuData.map((item,index) => (
                         <S.NavLink  to={item.id}  key={index}>
                                {item.title}dd
                         </S.NavLink>
                     ))}
                 </S.NavMenu>
                 <S.Navbtn>
                     <Button primary="true" round="true">
                            Book

                     </Button>
                 </S.Navbtn>
            </S.Nav>
    </React.Fragment>
  );
}

export default Navbar;
