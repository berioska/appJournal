import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton } from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";




const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {

    const dispatch = useDispatch();


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

                        <Grid item>

                            <ListItemText primary={title ? title.length > 17
                                ? title.substring(0, 17) + '...'
                                : title : ""} />
                            <ListItemText secondary={body ? body.length > 20
                                ? body.substring(0, 20) + '...'
                                : body : ""} />

                        </Grid>


                    </Grid>
                </ListItemButton>
            </ListItem>
        </>
    );
};

export default SideBarItem;