import { AddOutlined } from '@mui/icons-material';
import JournalLayout from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import {IconButton} from '@mui/material'

export const JournalPage = () => {

    return (
        <JournalLayout>

            {/* <Typography >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum, fuga unde sed saepe expedita blanditiis tempora voluptate. Natus, quae. Odit exercitationem at consequatur voluptatum dolores nam sunt fugiat nesciunt.
                Nobis harum non saepe similique in explicabo corrupti quaerat architecto distinctio quia, sed commodi consequuntur iusto, dolores delectus repellat vitae? Repellat ratione, incidunt maiores a molestias laborum totam sapiente. Impedit?
               
            </Typography> */}
           <NothingSelectedView/> 
        {/*  <NoteView/> */}

        <IconButton
            size='large'
            sx={{
                color:'white',
                backgroundColor: 'error.main',
                ':hover':{backgroundColor: 'error.main', opacity:0.9},
                position:'fixed',
                right:50,
                bottom:50
            }}
        >
            <AddOutlined sx={{fontSize:30}}/>

        </IconButton>

        </JournalLayout>


    );
};

