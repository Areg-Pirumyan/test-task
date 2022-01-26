import React from "react"
import * as Style from "../styles/SideBarStyled"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {BsToggle2Off} from "react-icons/bs"
import {BsToggle2On, BsLightbulb, BsLightbulbOff} from "react-icons/bs";
import {MdOutlineAddCircleOutline} from "react-icons/md"


function SideBar({color, themeChange, booksTotal}) {
    const SideBarI={color:"#808080",size:"19px"}
    return (
        <Style.SideBarContainer color={color}>
            <Style.LibraryItem>
                <Style.Title>Library</Style.Title>
                <Style.Item color={!color.active && "black"}>
                    <Style.Div>
                        <AiOutlinePlayCircle style={SideBarI}/>
                        <Style.Text color={color}>My Books</Style.Text>
                    </Style.Div>
                    <Style.Div>
                        <Style.BookNumber>{booksTotal}</Style.BookNumber>
                    </Style.Div>
                </Style.Item>
                <Style.Item>
                    <Style.Div>
                        <MdOutlineAddCircleOutline style={SideBarI}/>
                        <Style.Text color={color}>Add New Books</Style.Text>
                    </Style.Div>
                </Style.Item>
            </Style.LibraryItem>
            <Style.SettingsItem>
                <Style.Title>Settings</Style.Title>
                <Style.Item onClick={() => themeChange()}>
                    <Style.Div>
                        {
                            color.active ? <BsLightbulb style={{color: SideBarI.color}}/> :
                                <BsLightbulbOff style={{color: SideBarI.color}}/>
                        }
                        <Style.Text color={color}>Darke Mode</Style.Text>
                    </Style.Div>
                    {
                        color.active ? <BsToggle2On style={SideBarI} /> :
                            <BsToggle2Off style={SideBarI}/>
                    }
                </Style.Item>
            </Style.SettingsItem>
        </Style.SideBarContainer>
    )
}

export default SideBar
