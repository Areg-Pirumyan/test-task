import React, {useState, useEffect} from "react"
import * as Style from "../../styles/BooksPageStyled"
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import Books from "../Books";
import ModalCard from "../ModalCard";
import {BsLightbulb, BsLightbulbOff} from "react-icons/bs";
import {BooksWrapper} from "../../styles/BooksPageStyled";
import axios from "axios";

function BooksPage() {
    const [color, setColor] = useState({
        text: "black",
        leftSide: "white",
        rightSide: "white",
        active: true
    });
    const [newBooksData, setNewBooksData] = useState({});
    const [oldBooksData, setOldBooksData] = useState({});
    const [search, setSearch] = useState(false);
    const [showModal, setShowModal] = useState({show:false,data:""})
    const [view, setView] = useState(true);

    const iconStyle = {color: color.text, fontSize: "25px"};
    const searchStyle = {color: color.text, fontSize: "20px"};

    useEffect(() => {
        axios.get("https://api.itbook.store/1.0/new")
            .then(req => {
                setNewBooksData(req.data);
                setOldBooksData(req.data)
            })
    }, []);

    const themeChange = () => {
        const newColor = {...color};
        if (newColor.active) {
            setColor({...color, text: "white", leftSide: "#000000f0", rightSide: "black", active: false})
        } else {
            setColor({...color, text: "black", leftSide: "white", rightSide: "white", active: true})
        }
    };

    const changeView = (type) => {
        if (type.view === "grid") {
            setView(true)
        }
        if (type.view === "list") {
            setView(false)
        }
    };

    const searchHandler = (event) => {
        const searchValue = event.target.value;
        const oldBooksDataCopy={...oldBooksData};
        const newBooksDataCopy = {...newBooksData};
        newBooksDataCopy.books=oldBooksDataCopy.books.filter(book=>book.title.toLowerCase().includes(searchValue))
        setNewBooksData(newBooksDataCopy)
    };

    const toSearch = () => {
        const isSearch = !search;
        setSearch(isSearch);
        setNewBooksData(oldBooksData)
    };

    const toShowModalCard = (book) => {

        const isShow = !showModal.show;
        setShowModal({show:isShow,data:book})
    };


    return (
        <Style.LayOut color={color}>
            <SideBar
                color={color}
                themeChange={themeChange}
                booksTotal={newBooksData.total}
            />
            <BooksWrapper color={color}>
                <Style.ThemeButton onClick={themeChange}>
                    {
                        color.active ? <BsLightbulb size={"25px"} style={{color: "#808080"}}/>
                                     : <BsLightbulbOff size={"25px"} style={{color: "#808080"}}/>
                    }
                </Style.ThemeButton>
                <NavBar
                    color={color}
                    iconStyle={iconStyle}
                    searchStyle={searchStyle}
                    changeView={changeView}
                    searchHandler={searchHandler}
                    search={search}
                    toSearch={toSearch}
                />
                <Books
                    books={newBooksData.books}
                    view={view} color={color}
                    toShowModalCard={toShowModalCard}
                />
            </BooksWrapper>
            {
                showModal.show ?<ModalCard
                    showModal={showModal}
                    iconStyle={iconStyle}
                    toShowModalCard={toShowModalCard}/> : ""
            }
        </Style.LayOut>
    )
}

export default BooksPage