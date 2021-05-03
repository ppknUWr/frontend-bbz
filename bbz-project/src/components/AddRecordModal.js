import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/NativeSelect";
import {makeStyles} from "@material-ui/core/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { DialogContent, DialogTitle, DialogActions, option } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    paperFullWidth:{
        overflowY: 'visible'
    },
    DialogContentRoot:{
        overflowY: 'visible'
    }
});


const AddRecordModal = () => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

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
        <>
        <DialogTitle id="addRecordModalTitle">{"Dodaj nowy rekord"}</DialogTitle>
        <DialogContent classes={{
            root: classes.paperFullWidth
        }}>
            <Grid container spacing={1}>
            <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>

                <Grid item xs={12}>
                <TextField required id="author" label="Twórca/Twórcy"  placeholder="Twórca" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                </Grid>

                <Grid item xs={12}>
                <TextField id="coauthor" label="Współtwórca/Współtwórcy"  placeholder="Współtwórca" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                </Grid>

                <Grid item xs={12}>
                <TextField required id="title" label="Tytuł"  placeholder="Tytuł" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                </Grid>

                <Grid item xs={12}>
                <TextField id="subtitle" label="Podtytuł"  placeholder="Podtytuł" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                </Grid>

                <Grid item xs={12}>
                <TextField id="origin" label="Źródło"  placeholder="Źródło" fullWidth
                           margin="normal" onChange={handleOnChange}/>
                </Grid>
                
                <Grid container spacing={2}>
                    <Grid item xs>
                    <TextField id="edition" label="Wydanie" type="number"  placeholder="Wydanie"
                            margin="normal" onChange={handleOnChange}/>
                    </Grid>
                    <Grid item xs>
                    <TextField id="place_of_issue" label="Miejsce wydania"  placeholder="Miejsce wydania"
                            margin="normal" onChange={handleOnChange}/>
                    </Grid>
                    <Grid item xs>
                    <TextField id="publisher" label="Wydawca"  placeholder="Wydawca"
                            margin="normal" onChange={handleOnChange}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                    <TextField id="year_of_issue" label="Rok wydania"  placeholder="Rok" type="number"
                            margin="normal" onChange={handleOnChange}/>
                    </Grid>
                    <Grid item xs>
                    <TextField id="volume" label="Objętość"  placeholder="Objętość"
                            margin="normal" onChange={handleOnChange}/>
                    </Grid>
                    <Grid item xs>
                    <TextField id="series" label="Seria"  placeholder="Seria"
                            margin="normal" onChange={handleOnChange}/>
                    </Grid>
                </Grid>
                   
                    <Grid container spacing={2}>
                        <Grid item xs>
                        <InputLabel htmlFor="language">Język</InputLabel> 
                         <Select
                            native
                            onChange={handleOnChange}
                            inputProps={{
                                id: 'language',
                            }}
                        >
                             {/* Muszą to być optiony, poniewaz MenuItem się buguje w Dialogu */}
                            <option aria-label="None" value={""}> </option>
                            <option value={"polski"}>Polski</option>
                            <option value={"angielski"}>Angielski</option>
                            <option value={"niemiecki"}>Niemiecki</option>
                        </Select>
                        </Grid>
                        <Grid item xs>
                        <InputLabel htmlFor="type">Typ</InputLabel>
                        <Select
                            native
                            onChange={handleOnChange}
                            inputProps={{
                                id: 'type',
                            }}
                        >
                            <option aria-label="None" value={""}> </option>
                            <option value={"type1"}>Type1</option>
                            <option value={"type2"}>Type2</option>
                            <option value={"type3"}>Type3</option>
                        </Select>
                        </Grid>
                        <Grid item xs>
                        <InputLabel htmlFor="format">Format</InputLabel>
                        <Select
                            native
                            onChange={handleOnChange}
                            inputProps={{
                                id: 'format',
                            }}
                        >
                            <option aria-label="None" value={""}> </option>
                            <option value={"format1"}>Format1</option>
                            <option value={"format2"}>Format2</option>
                            <option value={"format3"}>Format3</option>
                        </Select>
                        </Grid>
                    </Grid>
                            
                    <Grid item xs={12}>
                    <TextField id="source_link" label="Link do zasobu"  placeholder="Link do zasobu" fullWidth
                            margin="normal" onChange={handleOnChange}/>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs>
                        <TextField id="ide" label="Identyfikator" placeholder="Identyfikator"
                                margin="normal" onChange={handleOnChange}/>
                        </Grid>
                        <Grid item xs>
                        <TextField id="tags" label="Treść zasobu"  placeholder="Treść zasobu"
                                margin="normal" onChange={handleOnChange} />
                        </Grid>
                    </Grid>

                <Grid item xs={12}>
                <TextField id="comment" label="Komentarz" multiline rows={4} fullWidth
                           onChange={handleOnChange} />
                </Grid>

        <DialogActions>
            <Grid container style={{marginTop:1}} spacing={3}>
            <Grid item xs>
                <Button
                onClick={handleCloseModal} 
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<CancelIcon />}
                autoFocus 
                >
                    Anuluj
                </Button>
            </Grid>
            <Grid item xs>
                <Button 
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                startIcon={<CloudUploadIcon />}
                style={{float:"right"}}
                autoFocus>
                    Dodaj rekord
                </Button>
            </Grid>
        </Grid>
        </DialogActions>
            </form>
        </Grid>
        </DialogContent>
        </>
    );

    return (
        <div>
            <button onClick={handleOpenModal}>Dodaj nowy rekord</button>
            <Dialog
                open={open}
                onClose={handleCloseModal}
                scroll={scroll}
                fullScreen={fullScreen}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Dialog>
        </div>
    );
};

export default AddRecordModal;