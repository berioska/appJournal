import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";




const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {

    const dispatch = useDispatch();


   // console.log(title)

    const onClickNote = () => {

        dispatch(setActiveNote({ id, body, date, imageUrls, title }));
    };

    return (
        <>
            <ListItem key={id} disablePadding>

                <ListItemButton
                    onClick={onClickNote}
                >
                    <ListItemIcon>
                        <TurnedInNot />
                    </ListItemIcon>

                    <Grid container>
                        <ListItemText primary={title ? title.length > 17
                            ? title.substring(0, 17) + '...'
                            : title : ""} />
                        <ListItemText secondary={body} />
                    </Grid>
                </ListItemButton>
            </ListItem>
        </>
    );
};

export default SideBarItem;