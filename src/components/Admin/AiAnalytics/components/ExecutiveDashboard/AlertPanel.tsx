import {

    Paper,
    Typography,
    Stack,
    Alert

} from "@mui/material";

export default function AlertPanel({

    alerts

}:any){

    return(

        <Paper sx={{p:3,borderRadius:4}}>

            <Typography

                variant="h6"

                mb={2}

            >

                Executive Alerts

            </Typography>

            <Stack spacing={2}>

                {

                    alerts.map(

                        (

                            item:any,

                            index:number

                        )=>(

                            <Alert

                                key={index}

                                severity={

                                    item.priority==="HIGH"

                                    ?

                                    "error"

                                    :

                                    item.priority==="MEDIUM"

                                    ?

                                    "warning"

                                    :

                                    "info"

                                }

                            >

                                <strong>

                                    {item.title}

                                </strong>

                                <br/>

                                {

                                    item.message

                                }

                            </Alert>

                        )

                    )

                }

            </Stack>

        </Paper>

    );

}