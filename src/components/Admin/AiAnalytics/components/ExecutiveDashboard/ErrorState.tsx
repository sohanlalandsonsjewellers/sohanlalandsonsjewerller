import {

    Alert,

    Button,

    Stack,

    Typography

} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";

interface Props{

    message:string;

    onRetry:()=>void;

}

export default function ErrorState({

    message,

    onRetry

}:Props){

    return(

        <Stack

            spacing={3}

            alignItems="center"

            py={8}

        >

            <Alert

                severity="error"

                sx={{

                    width:"100%"

                }}

            >

                {message}

            </Alert>

            <Typography>

                Failed to load Executive Dashboard.

            </Typography>

            <Button

                variant="contained"

                startIcon={

                    <RefreshIcon/>

                }

                onClick={onRetry}

            >

                Retry

            </Button>

        </Stack>

    );

}