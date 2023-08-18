import { Fragment, useContext } from "react"
import { useViewportWidth } from "../../utils/getViewport";
import { ThemeContext } from "styled-components";

import {    LogoDivContainer,
            LogoText
        } from './logo.styles'
import { Link } from "react-router-dom";

const Logo = () => {
    const width = useViewportWidth();
    const theme = useContext(ThemeContext);
    
    return (
        <Fragment>
            <Link to='/'>
                <LogoDivContainer>
                { (width > theme.bp.tablets) ? <img src="https://mohanpurtransport.ca/wp-content/uploads/2021/12/IMG-2017.jpg" alt="Logo" /> : "" }
                    <LogoText>
                        Mohanpur <span>Transport</span>
                    </LogoText> 
                </LogoDivContainer>
            </Link>
        </Fragment>
    )
}

export default Logo;
