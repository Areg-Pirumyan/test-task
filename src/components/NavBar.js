import React, {useState} from "react"
import * as Style from "../styles/NavBarStyled"
import {FiMoreHorizontal} from "react-icons/fi"
import {HiOutlineViewGrid} from "react-icons/hi"
import {MdOutlineFormatListBulleted} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {Search} from "./Search";

function NavBar({color, iconStyle, searchStyle, changeView, searchHandler, search, toSearch}) {

    return (
        <Style.NavBarContainer>
            <Style.NavSection>
                <Style.NavItem>
                    <Style.Title color={color}>
                        Book Library
                    </Style.Title>
                    <Style.More color={color} backColor={!color.active ? "black" : ""}
                                hoverColor={!color.active ? "#8080808a" : "#8080801f"}>
                        <FiMoreHorizontal size="18px" style={{color: "aqua"}}/>
                    </Style.More>
                </Style.NavItem>
                <Style.NavItem>
                    <Style.Tool hoverColor={!color.active ? "#8080808a" : "#8080801f"}><HiOutlineViewGrid
                        onClick={() => changeView({view: "grid"})}
                        style={iconStyle}/></Style.Tool>
                    <Style.Tool hoverColor={!color.active ? "#8080808a" : "#8080801f"}>
                        <MdOutlineFormatListBulleted
                        onClick={() => changeView({view: "list"})}
                        style={iconStyle}
                        />
                    </Style.Tool>
                    <Style.DivSearch>
                        {

                            !search ? <Style.Tool onClick={toSearch}
                                                  hoverColor={!color.active ? "#8080808a" : "#8080801f"}
                                                  style={searchStyle}><BsSearch/>
                                      </Style.Tool> :
                                      <Search
                                        searchStyle={searchStyle}
                                        color={color} fn={toSearch}
                                        onChange={searchHandler}
                                       />

                        }
                    </Style.DivSearch>
                </Style.NavItem>
            </Style.NavSection>
            <Style.SearchContainer>
                <Search
                    searchStyle={searchStyle}
                    color={color} fn={toSearch}
                    onChange={searchHandler}
                />
            </Style.SearchContainer>
        </Style.NavBarContainer>
    )
}

export default NavBar
