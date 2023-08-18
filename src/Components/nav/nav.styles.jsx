import { styled } from "styled-components";
import { Link } from "react-router-dom";

const SpecialBannerDiv = styled.div`
    position: absolute;
    right: 10vw;
    top: 0px;
    display: flex;

    :last-child{
        cursor: pointer;
        background-color: ${(p) => p.theme.color.metallicGold};
    }

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        right: 0vw;
    }
`
const SpecialBanner = styled.button`
    /* border: solid 3px #1d3652; */
    color: white;
    padding: 5px 10px;
    background-color: ${(p) => p.theme.color.darkBlue};
    width: 25vw;
    height: 40px;

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        width: 50vw;
    }

`

const NavDivContainer = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    left: 50vw;
    width: 50vw;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;

    a{
        text-decoration: none;
        cursor: pointer;
        color: ${(p) => p.theme.color.dark};
    }
`

const ContentDivContainer = styled.div`
    margin-right: 20px;
`

const ContentLink = styled(Link)`
    padding: 10px;
    text-transform: uppercase;
    font-weight: 700;
`

const MobileDivContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
`

const HamburgerMenuIcon = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;

    img{
        position: absolute;
        top: 70px;
        right: 20px;
    }
`

const HamburgerMenu = styled.div`
    margin-top: -20px;
    width:90vw;
    position: relative;
    right: calc(10vw/2);
    left: calc(5vw/2);
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: whitesmoke;
    cursor: none;
    z-index: 1;
    margin-bottom: 10px;
`

const HamburgerContent = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: large;
    padding: 15px;
    text-align: center;
`

const NavDiv = styled.div`
    z-index: 10;
`
export {
    NavDiv,
    NavDivContainer,
    ContentDivContainer,
    ContentLink,
    MobileDivContainer,
    HamburgerMenuIcon,
    HamburgerMenu,
    HamburgerContent,
    SpecialBannerDiv,
    SpecialBanner
}