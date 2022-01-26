import styled from "styled-components"

export const BooksContainer = styled.div`
padding: 20px 0;
margin-left: 2px;
`;

export const ViewGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const Item = styled.div`
width: 250px;
text-align: center;
@media only screen and (max-width:996px){
  width: 220px!important;
   }
`;

export const Image = styled.img`
width: 250px;
@media only screen and (max-width:996px){
  width: 220px!important;
   }
`;

export const Title = styled.h3.attrs(props => ({
    fontSize: props.fontSize
}))`

padding: 5px 10px;
margin: auto;
color: ${props => props.color.text};
font-size: ${props => props.fontSize};
`;

export const Code = styled.span`
color:#808080
`;

export const ViewList = styled.div``;

export const ViewListItem = styled.div`
display: flex;
justify-content: space-between;
color: #808080;
`;

export const Litem = styled.div`
display: flex;
align-items: center;
width: 25%;
justify-content: center;
`
export const VLImage = styled.img`
width: 100px;
`;