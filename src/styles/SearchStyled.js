import styled from "styled-components"

export const SearchContainer = styled.div`
display:flex;
align-items:center;
padding-left: 11px;
&>div{
display: flex;
align-items: center;

`
export const SearchInput = styled.input`
outline: none;
border-bottom: 2px solid  #808080;
border: none;
height: 35px;
padding: 5px 0;
width: 240px;
font-size: 18px;
background-color: ${props=>props.color.rightSide};
color:${props=>props.color.text};

@media only screen and (max-width:786px){
  width: 120px!important;
   }
@media only screen and (max-width:570px){
  width: 100%!important;
   }
`;

export const IconSearchContainer = styled.div`
height: 45px;
border: 2px solid  #808080;
border-right: none;
display: flex;
align-items: center;
padding:11px;
border-bottom-left-radius: 12px;
border-top-left-radius: 12px;
`;

export const InputContainer = styled.div`
height: 45px;
border: 2px solid  #808080;
border-right: none;
border-left: none;
`;

export const IconDelContainer = styled.div`
height: 45px;
border: 2px solid  #808080;
border-left: none;
padding: 0 11px;
border-bottom-right-radius: 12px;
border-top-right-radius: 12px;

&>svg{
font-size: 20px;
}
;
`;