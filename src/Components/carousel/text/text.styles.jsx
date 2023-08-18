import { styled} from "styled-components";

// const TextDiv = styled.div`
//     padding: 50px;
//     text-align: center;

//     @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
//         padding: 20px;
//         display: block;
//         text-align: center;
//     }

//     @media screen and (max-height: 400px){
//         padding: 20px;
//     }
//     /* :nth-child(odd){
//         background-color: ${(p) => p.theme.color.metallicGold};
//     } */

// `

// const TextContainerDiv = styled.div`
//     max-width: 280px;
//     min-width: 150px;
//     min-height: auto;
//     /* height: 150px; */
//     background-color: ${(p) => p.theme.color.lightDarkBlue};
//     z-index: 1;
//     position: relative;
//     transform: translate(15vw, -30vh);
//     color: white;
//     align-items: center;
//     border-radius: 5px;
//     font-size: 1.1rem;
//     box-sizing: border-box;


//     /* &:hover{
//         background-color: ${(p) => p.theme.color.grey};
//         color: black;
//         font-weight: 700;
//     } */

//     @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
//         transform: translate(0vw, -10vh);
//         min-width: 100%;
//         height: 60px;
//         background-color: ${(p) => p.theme.color.darkBlue};

//         &:hover{
//             background-color: ${(p) => p.theme.color.darkGrey};
//         }
//     }

//     @media screen and (max-width: ${(p) => `${p.theme.bp.phones}px`}){
//         transform: translate(0vw, -12vh);
//         font-size: 0.9rem;
//     }

//     @media screen and (max-height: 400px){
//         min-width: 400px;
//     }
// `

const TextContainerDiv = styled.div`
    grid-column: 3/6;
    grid-row: 2/5;
    z-index: 1;
    background-color: ${(p) => p.theme.color.lightYellow};
    color: black;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 100px / 120px;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.05rem;

    @media screen and (max-width: ${(p) => `${p.theme.bp.largeDesktops}px`}){
        grid-column: 2/6;
        grid-row: 2/5;
    }

    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        grid-row: 5/7; 
        grid-column: 1/14;
        border-radius: 10px;
        color: black;
        background-color: transparent;
    }
`

const TextContainerDivRight= styled(TextContainerDiv)`
    grid-column: 9/12;
    grid-row: 4/7;
    border-radius: 100px / 120px 10px;
    @media screen and (max-width: ${(p) => `${p.theme.bp.largeDesktops}px`}){
        grid-column: 9/13;

    }
    @media screen and (max-width: ${(p) => `${p.theme.bp.tablets}px`}){
        grid-row: 5/7; 
        grid-column: 1/14;
        border-radius: 10px;
        color: black;
        background-color: transparent;
    }
`

const TextDiv = styled.div`
    text-align: center;
    text-transform: uppercase;
`
export {
    TextContainerDiv,
    TextContainerDivRight,
    TextDiv
}