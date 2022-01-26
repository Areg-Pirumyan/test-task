import styled from "styled-components"

export const SideBarContainer = styled.div`
padding: 15px ;
border-right: 2px solid #80808080;
width: 25%;
background-color:${props=>props.color.leftSide} ;

 @media only screen and (max-width:996px){
  display: none;
   }
`;

export const LibraryItem = styled.div`
padding-bottom: 40px;
`;

export const Title = styled.h3`
color: #808080;
font-family: sans-serif;
padding: 0 30px 10px 15px;
`;

export const Item = styled.div`
padding: 10px 15px;
border-radius: 15px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;
&:hover{
background-color: #ffffff14;
}
`;

export const Text = styled.span`
padding-left: 10px;
color: #808080;
`;

export const BookNumber = styled.span`
padding: 5px 10px;
border-radius: 10px;
font-size: 12px;
background-color: #80808014;
color:#808080 ;
`;

export const SettingsItem = styled.div`
padding-bottom: 40px;

`;

export const Div =styled.div`
display: flex;
`;


