import {

    Paper,
    Typography,
    Stack,
    Card,
    CardContent

} from "@mui/material";

export default function RecommendationPanel({

    recommendations

}:any){

    return(

        <Paper sx={{p:3,borderRadius:4}}>

            <Typography

                variant="h6"

                mb={2}

            >

                AI Recommendations

            </Typography>

            <Stack spacing={2}>

                {

                    recommendations.map(

                        (

                            item:any,

                            index:number

                        )=>(

                            <Card

                                key={index}

                            >

                                <CardContent>

                                    <Typography

                                        fontWeight={700}

                                    >

                                        {

                                            item.title

                                        }

                                    </Typography>

                                    <Typography>

                                        {

                                            item.description

                                        }

                                    </Typography>

                                    <Typography

                                        color="primary"

                                    >

                                        Priority :

                                        {

                                            item.priority

                                        }

                                    </Typography>

                                </CardContent>

                            </Card>

                        )

                    )

                }

            </Stack>

        </Paper>

    );

}