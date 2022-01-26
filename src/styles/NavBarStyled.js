import styled from "styled-components"

export const NavBarContainer = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 10px;

@media only screen and (max-width:996px){
  padding-top:30px
   }  
`;

export const NavItem = styled.div`
display: flex;
align-items: center;

`;

export const Title = styled.h2`
color: ${props => props.color.text};
 @media only screen and (max-width:570px){
  font-size: 15px!important;
   }
`;

export const More = styled.div.attrs((props => ({
    backgroundColor: props.backColor || "#90ee9045"
})))`
  height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    background-color: ${props => props.backgroundColor};
   margin-left: 10px;
   cursor: pointer;
   &:hover{
   background-color: ${props => props.hoverColor};
   }
`;

export const Tool = styled.div`
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    cursor: pointer;
    &:hover{
    background-color: ${props => props.hoverColor};
    }
`;

export const DivSearch = styled.div`
@media only screen and (max-width:570px){
  display: none;
   }
`;

export const NavSection = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid  #80808080;
padding-bottom: 15px;
`;

export const SearchContainer = styled.div`
display: none;
padding: 15px 0;
margin: auto;
@media only screen and (max-width:570px){
  display: block;
   }
`;


