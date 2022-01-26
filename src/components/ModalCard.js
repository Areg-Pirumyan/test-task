import React from "react"
import * as Style from "../styles/ModalCardStyled"
import {TiDeleteOutline} from "react-icons/ti"

function ModalCard({showModal, toShowModalCard}) {
    return (
        <Style.Modal>
            <Style.ModalContent>
                <Style.Exit>
                    <TiDeleteOutline onClick={toShowModalCard} style={{fontSize:"25px",color:"black"}}/>
                </Style.Exit>
                <Style.ModalImage src={showModal.data.image}/>
                <Style.ModalSpan fontSize={"17px"}>
                    {showModal.data.title}
                </Style.ModalSpan>
                <Style.ModalSpan>
                    <Style.Link href={showModal.data.url}>For more info Click</Style.Link>
                </Style.ModalSpan>
                <Style.ModalSpan>
                    {showModal.data.price}
                </Style.ModalSpan>
                <Style.ModalButtonContainer>
                    <Style.ButtonClose>Close</Style.ButtonClose>
                    <Style.ButtonContinue>Continue Reading</Style.ButtonContinue>
                </Style.ModalButtonContainer>
            </Style.ModalContent>
        </Style.Modal>
    )
}

export default ModalCard