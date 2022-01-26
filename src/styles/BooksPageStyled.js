import styled from "styled-components";

export const LayOut = styled.div`
max-width: 1440px;
width: 100%;
display: flex;
margin: auto;
 @media only screen and (max-width:996px){
  justify-content: center;
   }
`;

export const BooksWrapper = styled.div`
padding: 30px ;
width: 75%;
background-color: ${props => props.color.rightSide};
 @media only screen and (max-width:996px){
  width: 100%!important;
   }
`;

export const ThemeButton=styled.div`
position: fixed;
right: 25px;
top: 25px;
display: none;
cursor: pointer;
@media only screen and (max-width:996px){
  display: block;!important;
   }
`;

