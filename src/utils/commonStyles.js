import { css } from "styled-components";

export const Heading = css`
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
    letter-spacing: 0.05rem;
    font-size: 3rem;
    font-weight: 300;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
        font-size: 2rem;
    }
`