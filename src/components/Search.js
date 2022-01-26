import React from "react"
import * as Style from "../styles/SearchStyled"
import {BsSearch} from "react-icons/bs"
import {TiDeleteOutline} from "react-icons/ti"


export const Search = ({searchStyle,color,fn,onChange}) => {
    return (
        <Style.SearchContainer>
            <Style.IconSearchContainer>
                <BsSearch style={searchStyle}/>
            </Style.IconSearchContainer>
            <Style.InputContainer>
                <Style.SearchInput color={color} onChange={(e)=>onChange(e)}></Style.SearchInput>
            </Style.InputContainer>
            <Style.IconDelContainer >
                <TiDeleteOutline onClick={fn} style={searchStyle}/>
            </Style.IconDelContainer>
        </Style.SearchContainer>
    )

};
