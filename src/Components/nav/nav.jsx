import { Fragment, useContext, useState } from "react";
import { useViewportWidth } from "../../utils/getViewport";
import { ThemeContext } from "styled-components";
import Logo from "../logo/logo";

import MenuSVG from '../../assets/IconsSVG/menu.svg'
import CloseSVG from '../../assets/IconsSVG/close.svg'

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
                        {specialBannerList.map(banner => (<SpecialBanner key={banner}>{banner}</SpecialBanner>))}
                    </SpecialBannerDiv>

                {   (width > theme.bp.tablets) 
                    ?  (   
                        <NavDivContainer>
                            <ContentDivContainer>
                                {contentList.map(content => (<ContentLink key={content}>{content}</ContentLink>))}
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
                                        { contentList.map(content => (<HamburgerContent key={content}>{content}</HamburgerContent>))}
                                    </HamburgerMenu>
                                    </div>
                                    ) : <img src={MenuSVG} alt="Menu Hamburger" />}
                            </HamburgerMenuIcon>
                            
                        </MobileDivContainer>
                    )
                }
            </NavDiv>
        </Fragment>
    )
}

export default Nav;