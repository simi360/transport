import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterContainer = styled.div`
    background: ${(p) => p.theme.color.darkGrey};
    padding: 50px;
    color: whitesmoke;
`


const SocialDiv = styled.div`
    width: 30px;
    height: 30px;
    background: url(${(p) => p.ogicon}) no-repeat;
    background-size: contain;
    cursor: pointer;


    &:hover{
        background: url(${(p) => p.alticon}) no-repeat;
        background-size: contain;
    }
`

const FirstRowDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`

const FooterLogoDiv = styled.div`
    margin-top: -50px;

`
const SecondRowDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`

const FooterLink = styled(Link)`
    padding: 10px;
    text-transform: capitalize;
    color: white;

    &:after{
        content: " ●";
    }

`

const ThirdRowDiv = styled.div`
    text-align: center;
    padding-top: 20px;
`
export {
    FooterContainer,
    SocialDiv,
    FirstRowDiv,
    FooterLogoDiv,
    SecondRowDiv,
    FooterLink,
    ThirdRowDiv
}