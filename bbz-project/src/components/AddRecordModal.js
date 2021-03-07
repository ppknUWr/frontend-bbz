import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/NativeSelect";
import {makeStyles} from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import Modal from "@material-ui/core/Modal";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
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
        console.log(value, id);
        setRecordData({...recordData, [id]:value});
        isEmpty(e);
        //console.log(recordData);
    }
    function isEmpty(e){
        const value = e.target.value;
        console.log(value);
        if(value) {
            console.log("True");
            return true;
        }
        console.log("False");
        return false;
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Dodawanie rekordu</h2>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
                <TextField required id="author" label="Twórca/Twórcy" style={{margin:8}} placeholder="Twórca" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="coauthor" label="Współtwórca/Współtwórcy" style={{margin:8}} placeholder="Współtwórca" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                <TextField required id="title" label="Tytuł" style={{margin:8}} placeholder="Tytuł" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="subtitle" label="Podtytuł" style={{margin:8}} placeholder="Podtytuł" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="origin" label="źródło" style={{margin:8}} placeholder="źródło" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="edition" label="Wydanie" type="number" style={{margin:8}} placeholder="Wydanie"
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="place_of_issue" label="Miejsce wydania" style={{margin:8}} placeholder="Miejsce wydania"
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="publisher" label="Wydawca" style={{margin:8}} placeholder="Wydawca"
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="year_of_issue" label="Rok wydania" style={{margin:8}} placeholder="Rok" type="number"
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="volume" label="Objętość" style={{margin:8}} placeholder="Objętość"
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="series" label="Seria" style={{margin:8}} placeholder="Seria"
                           margin="normal" onChange={handleOnChange}/>
                <InputLabel htmlFor="language">Język</InputLabel>
                <Select
                    native
                    onChange={handleOnChange}
                    inputProps={{
                        id: 'language',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={"polski"}>Polski</option>
                    <option value={"angielski"}>Angielski</option>
                    <option value={"niemiecki"}>Niemiecki</option>
                </Select>
                <InputLabel htmlFor="type">Typ</InputLabel>
                <Select
                    native
                    onChange={handleOnChange}
                    inputProps={{
                        id: 'type',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={"type1"}>Type1</option>
                    <option value={"type2"}>Type2</option>
                    <option value={"type3"}>Type3</option>
                </Select>
                <InputLabel htmlFor="format">Format</InputLabel>
                <Select
                    native
                    onChange={handleOnChange}
                    inputProps={{
                        id: 'format',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={"format1"}>Format1</option>
                    <option value={"format2"}>Format2</option>
                    <option value={"format3"}>Format3</option>
                </Select>
                <TextField id="source_link" label="Link do zasobu" style={{margin:8}} placeholder="Link do zasobu" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="ide" label="Identyfikator" style={{margin:8}} placeholder="Identyfikator"
                           margin="normal" onChange={handleOnChange}/>
                <TextField id="tags" label="Treść zasobu" style={{margin:8}} placeholder="Treść zasobu"
                           margin="normal" onChange={handleOnChange} />
                <TextField id="comment" label="Komentarz" multiline rowsMax={4} fullWidth
                           onChange={handleOnChange} />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Dodaj rekord
                </Button>
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