import { Fragment } from "react"
import Logo from "../logo/logo"

import iconData from '../../data/footerLinks.json'
import MenuList from '../../data/menuList.json'

import {
            FooterContainer,
            SocialATag,
            FirstRowDiv,
            FooterLogoDiv,
            SecondRowDiv,
            FooterLink,
            ThirdRowDiv
        } from './footer.styles'


const Footer = () => {

    return(
        <Fragment>
            <FooterContainer>
                <FirstRowDiv>
                    <SocialATag ogicon={iconData[0].iconSource} alticon={iconData[0].hoverIconSource} href="tel:4379950360" />
                    <FooterLogoDiv>
                        <Logo />
                    </FooterLogoDiv>
                    <SocialATag ogicon={iconData[1].iconSource} alticon={iconData[1].hoverIconSource} href="mailto: harsimrankaur2313@gmail.com?subject=Transportation Query- redirect from website"/>
                </FirstRowDiv>
                <SecondRowDiv>
                {
                    MenuList.map(menuItem => (
                        <FooterLink key={menuItem.menuName} to={menuItem.path}>
                            {menuItem.menuName}
                        </FooterLink>
                    ))
                }
                </SecondRowDiv>
                <ThirdRowDiv>
                <span>
                    &copy; Mohanpur Transport 2023
                </span>
                </ThirdRowDiv>
            </FooterContainer>
        </Fragment>
    )
}

export default Footer;