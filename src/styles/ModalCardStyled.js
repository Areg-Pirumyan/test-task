import styled from "styled-components"

export const Modal = styled.div`
 position: fixed;
    left:0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
   width: 500px;
   background-color: white;
   height: 610px;
   border-radius: 50px;
   text-align: center;
   position: relative;
   @media only screen and (max-width:768px){
    width: 340px!important;
    height: 500px!important;
   }
    @media only screen and (max-width:375px){
      width: 240px!important;
   }
`;

export const ModalImage = styled.img`
width: 260px;
 @media only screen and (max-width:375px){
   width: 220px;
   }
`;

export const ModalSpan = styled.span`
display: block;
padding: 5px 0;
`;

export const Link = styled.a``;

export const Exit = styled.span`
position: absolute;
top: 26px;
right: 26px;
cursor: pointer;
`;

export const ModalButtonContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 130px;
 @media only screen and (max-width:768px){
   padding-top: 35px!important;
   }
    @media only screen and (max-width:375px){
    display: flex;
    flex-direction: column;
   width: 200px!important;
   margin: auto;
   }
`;

export const ButtonClose = styled.button`
padding: 15px 20px;
background-color: #8080802b;
outline: none;
border-radius: 10px;
border: none;
margin-right: 10px;
 @media only screen and (max-width:375px){
   margin-right: 0!important;
   }

`;

export const ButtonContinue = styled.button`
   padding: 15px 65px;
   background-color: #135ac5;
   outline: none;
   border: none;
   border-radius: 10px;
   cursor: pointer;
   color: white;
    @media only screen and (max-width:375px){
      padding: 15px 40px;
   }
`;