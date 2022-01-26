import React from "react"
import * as Style from "../styles/BooksStyled"

function Books({books, view, color, toShowModalCard}) {
    return (
        <Style.BooksContainer>
            {
                view ? <Style.ViewGrid>
                        {
                            books ? books.map((book) =>
                                <Style.Item key={book.isbn13} onClick={() => toShowModalCard(book)}>
                                    <Style.Image img={book.image} src={book.image}/>
                                    <Style.Code color={color}>Code: {book.isbn13}</Style.Code>
                                    <Style.Title color={color}>Title:{book.title}</Style.Title>
                                </Style.Item>
                            ) : ""
                        }
                    </Style.ViewGrid> :
                    <Style.ViewList>
                        <Style.ViewListItem>
                            <Style.Litem>Book Title</Style.Litem>
                            <Style.Litem>Genre</Style.Litem>
                            <Style.Litem>Reading progress</Style.Litem>
                            <Style.Litem>Last Opened</Style.Litem>
                        </Style.ViewListItem>
                        {
                            books ? books.map((book) =>
                                <Style.ViewListItem key={book.isbn13} onClick={() => toShowModalCard(book)}>
                                    <Style.Litem>
                                        <Style.VLImage src={book.image}/>
                                        <Style.Title fontSize={"13.5px"} color={color}>{book.title}</Style.Title>
                                    </Style.Litem>
                                    <Style.Litem>Education</Style.Litem>
                                    <Style.Litem>100%</Style.Litem>
                                    <Style.Litem>3 Days Ago</Style.Litem>
                                </Style.ViewListItem>
                            ) : ""
                        }
                    </Style.ViewList>
            }
        </Style.BooksContainer>
    )
}

export default Books