import { Fragment } from "react"
import Logo from "../logo/logo"
import iconData from '../../assets/data/footerLinks.json'
import { contentList } from "../nav/nav"

import {
            FooterContainer,
            SocialDiv,
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
                    <SocialDiv ogicon={iconData[0].iconSource} alticon={iconData[0].hoverIconSource} />
                    <FooterLogoDiv>
                        <Logo />
                    </FooterLogoDiv>
                    <SocialDiv ogicon={iconData[1].iconSource} alticon={iconData[1].hoverIconSource} />
                </FirstRowDiv>
                <SecondRowDiv>
                {
                    contentList.map(content => (<FooterLink key={content}>{content}</FooterLink>))
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