import { Fragment, useContext, useState } from "react";
import { useViewportWidth } from "../../utils/getViewport";
import { ThemeContext } from "styled-components";
import { Outlet } from "react-router-dom";

import Logo from "../logo/logo";
import MenuSVG from '/asset/IconsSVG/menu.svg'
import CloseSVG from '/asset/IconsSVG/close.svg'

import MenuList from '../../data/menuList.json'

import { NavDiv,
         NavDivContainer,
         ContentDivContainer,
         ContentLink,
         MobileDivContainer,
         HamburgerMenu,
         HamburgerMenuIcon,
         HamburgerContent,
         SpecialBannerDiv,
         SpecialBanner
        } from "./nav.styles";


    export const contentList = [
        "About",
        "Services",
        "Contact",
    ]

const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const width = useViewportWidth();
    const theme = useContext(ThemeContext);


    const specialBannerList = [
        "1 800 TOLL FREE",
        "GET A QUOTE"
    ]

    const onHamburgerClick = () => setHamburgerOpen(!hamburgerOpen);


    return(
        <Fragment> 
            <NavDiv>
                    <Logo />

                    <SpecialBannerDiv>
                        <SpecialBanner href="tel:4379950360">{specialBannerList[0]}</SpecialBanner>
                        <SpecialBanner>{specialBannerList[1]}</SpecialBanner>
                    </SpecialBannerDiv>

                {   (width > theme.bp.tablets) 
                    ?  (   
                        <NavDivContainer>
                            <ContentDivContainer>
                            {
                                MenuList.map(menuItem => (
                                    <ContentLink key={menuItem.menuName} to={menuItem.path}>
                                        {menuItem.menuName}
                                    </ContentLink>
                                ))
                            }

                            </ContentDivContainer>
                        </NavDivContainer>
                        ) :
                        (
                        <MobileDivContainer>
                            <HamburgerMenuIcon onClick={onHamburgerClick}>
                                { hamburgerOpen ? (
                                    <div>
                                    <img src={CloseSVG} alt="Close Menu" className="closeSVG" />
                                    <HamburgerMenu>
                                    {
                                        MenuList.map(menuItem => (
                                            <HamburgerContent key={menuItem.menuName} to={menuItem.path}>
                                                {menuItem.menuName}
                                            </HamburgerContent>
                                        ))
                                    }
                                    </HamburgerMenu>
                                    </div>
                                    ) : <img src={MenuSVG} alt="Menu Hamburger" />}
                            </HamburgerMenuIcon>   
                        </MobileDivContainer>
                    )
                }
            </NavDiv>
            <Outlet />
        </Fragment>
    )
}

export default Nav;