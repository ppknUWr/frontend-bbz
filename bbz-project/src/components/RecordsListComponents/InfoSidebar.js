import React, { useContext } from 'react'
import "../../styles/infosidebar-styles.css"
import { Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { DataContext } from '../ContextController';
const InfoSidebar = ({ open, onClose }) => {
    const { currentDbDetails, recordsList } = useContext(DataContext);

    return (
        <div>
            <Drawer anchor={"right"} open={open} onClose={() => onClose(false)}>
                <div className={"infosidebar-container"} >
                    <List>
                        <ListItem >
                            <ListItemText>
                                {`Twórca: ${currentDbDetails.author}`}
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <ListItemText>
                                {`Temat: ${currentDbDetails.db_name}`}
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={"Opis:"} />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText>
                                {"test"}
                            </ListItemText>
                        </ListItem>
                    </List>
                    <div style={{ marginTop: "auto"}}>
                    <Divider />
                        <ListItem >
                            <ListItemText>
                                {`Liczba rekordów: ${recordsList.length}`}
                            </ListItemText>
                        </ListItem>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default InfoSidebar;
