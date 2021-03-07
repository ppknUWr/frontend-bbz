import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const AddRecordModal = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    //should be managed from parent component
    //but for now let's stick with a dummy object
    const [recordData, setRecordData] = useState({
        author: "",
        coauthor: "",
        title: "",
        subtitle: "",
        origin: "",
        edition: 0,
        place_of_issue: "",
        publisher: "",
        year_of_issue: 0,
        volume: 0,
        series: "",
        language: "",
        type: "",
        format: "",
        ide: "",
        source_link: "",
        tags: "",
        comment: "",
        added_by: "default",
        addition_date: ""
    });

    function handleOpenModal(){
        setOpen(true);
    }
    function handleCloseModal(){
        setOpen(false);
    }

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(recordData);
        setOpen(false);
    }

    function handleOnChange(e)
    {
        const {value, id} = e.target;
        //console.log(value, id);
        setRecordData({...recordData, [id]:value});
        //console.log(recordData);
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Dodawanie rekordu</h2>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="author">Twórca/Twórcy: </label>
                <input type="text" id="author" onChange={handleOnChange} placeholder="Twórca"/>
                <br/>
                <label htmlFor="coauthor">Współtwórca/Współtwórcy: </label>
                <input type="text" id="coauthor" onChange={handleOnChange} placeholder="Współtwórcy"/>
                <br/>
                <label htmlFor="title">Tytuł: </label>
                <input type="text" id="title" onChange={handleOnChange} placeholder="Tytuł"/>
                <br/>
                <label htmlFor="subtitle">Podtytuł: </label>
                <input type="text" id="subtitle" onChange={handleOnChange} placeholder="Podtytuł"/>
                <br/>
                <label htmlFor="origin">źródło: </label>
                <input type="text" id="origin" onChange={handleOnChange} placeholder="źródło"/>
                <br/>
                <label htmlFor="edition">Wydanie: </label>
                <input type="number" id="edition" onChange={handleOnChange} placeholder="Wydanie"/>
                <br/>
                <label htmlFor="place_of_issue">Miejsce wydania: </label>
                <input type="text" id="place_of_issue" onChange={handleOnChange} placeholder="Miejsce wydania"/>
                <br/>
                <label htmlFor="publisher">Wydawca: </label>
                <input type="text" id="publisher" onChange={handleOnChange} placeholder="Wydawca"/>
                <br/>
                <label htmlFor="year_of_issue">Rok wydania: </label>
                <input type="number" id="year_of_issue" onChange={handleOnChange} placeholder="Rok wydania"/>
                <br/>
                <label htmlFor="volume">Objętość: </label>
                <input type="number" id="volume" onChange={handleOnChange} placeholder="Objętość"/>
                <br/>
                <label htmlFor="series">Seria: </label>
                <input type="text" id="series" onChange={handleOnChange} placeholder="Seria"/>
                <br/>
                <label htmlFor="language">Język: </label>
                <input type="text" id="language" onChange={handleOnChange} placeholder="Język"/>
                <br/>
                <label htmlFor="type">Typ: </label>
                <input type="text" id="type" onChange={handleOnChange} placeholder="Typ"/>
                <br/>
                <label htmlFor="format">Format: </label>
                <input type="text" id="format" onChange={handleOnChange} placeholder="Format"/>
                <br/>
                <label htmlFor="ide">Identyfikator: </label>
                <input type="text" id="ide" onChange={handleOnChange} placeholder="Identyfikator"/>
                <br/>
                <label htmlFor="source_link">Link do zasobu: </label>
                <input type="text" id="source_link" onChange={handleOnChange} placeholder="Link do zasobu"/>
                <br/>
                <label htmlFor="tags">Treść zasobu: </label>
                <input type="text" id="tags" onChange={handleOnChange} placeholder="Tagi"/>
                <br/>
                <label htmlFor="comment">Uwagi: </label>
                <input type="text" id="comment" onChange={handleOnChange} placeholder="Komentarze"/>
                <br/>
                <input type="submit" value="Dodaj rekord"/>
            </form>
        </div>
    );

    return (
        <div>
            <button onClick={handleOpenModal}>Dodaj nowy rekord</button>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
};

export default AddRecordModal;