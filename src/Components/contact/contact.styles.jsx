import { styled } from "styled-components";
import { Heading } from "../../utils/commonStyles";


const ContactContainer = styled.div`
    background-color: ${(p) => p.theme.color.grey};
    margin-top: 50px;

    padding-bottom: 50px;
`

const ContactHeading = styled.h1`
    ${Heading}
    padding-top: 100px;
`

const ContactContents = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
        flex-direction: column-reverse;

    }
`

const ContactImageContainer = styled.div`
    max-width: 50%;
    align-self: flex-end;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
       align-self: center;
       max-width: 75%;
       display: none;
    }


    img{
        max-width: 100%;
        object-fit: cover;
        overflow: hidden;
    }

`
const FormContainer = styled.div`
    width: 90%;
    padding: 20px;

    @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
       max-width: 100%;
    }
`

const Button = styled.button`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 50%;
  border: none;
  border-radius: 0;
  margin-left: 25%;
  cursor: pointer;
  color: black;
  background: linear-gradient(to left, ${(p) => p.theme.color.metallicGold} 50%, ${(p) => p.theme.color.lightDarkBlue} 50%) right;
  background-size: 200%;
  transition: .5s ease-out;

  &:hover {
    background-position: left;
    color: white;
  }

  &:focus {
    transition: none;
    background: black;
    color: white;
  }

  @media screen and (max-width: ${(p) => `${p.theme.bp.desktops}px`}){
       min-width: 100%;
       margin-left: 0px;
    }
`

export {
    ContactContainer,
    ContactHeading,
    ContactContents,
    ContactImageContainer,
    FormContainer,
    Button
}