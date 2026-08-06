import {

    Paper,

    Stack,

    Typography,

    Button

} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";

interface Props{

    onRefresh:()=>void;

}

export default function EmptyState({

    onRefresh

}:Props){

    return(

        <Paper

            sx={{

                p:8,

                borderRadius:4

            }}

        >

            <Stack

                spacing={3}

                alignItems="center"

            >

                <Typography

                    variant="h4"

                >

                    No Executive Data Available

                </Typography>

                <Typography>

                    AI engine has not generated executive insights yet.

                </Typography>

                <Button

                    variant="contained"

                    startIcon={

                        <RefreshIcon/>

                    }

                    onClick={onRefresh}

                >

                    Refresh

                </Button>

            </Stack>

        </Paper>

    );

}