import {
    Card,
    CardContent,
    Divider,
    Stack,
    Typography
} from "@mui/material";

import {
    SalesForecastResponse,
    SalesSummaryResponse
} from "../../../../../types/ai/salesForecast";

interface Props{

    summary:SalesSummaryResponse;

    forecast:SalesForecastResponse;

}

export default function ModelInfoCard({

    summary,

    forecast

}:Props){

    return(

        <Card

            elevation={0}

            sx={{

                height:"100%",

                borderRadius:"22px",

                border:"1px solid rgba(184,155,115,.18)",

                boxShadow:"0 15px 35px rgba(0,0,0,.05)"

            }}

        >

            <CardContent>

                <Typography

                    variant="h6"

                    fontWeight={700}

                    color="#4A0E17"

                    mb={3}

                >

                    Forecast Model

                </Typography>

                <Stack spacing={2}>

                    <Stack>

                        <Typography variant="caption">

                            Model

                        </Typography>

                        <Typography fontWeight={700}>

                            {summary.forecastModel}

                        </Typography>

                    </Stack>

                    <Divider/>

                    <Stack>

                        <Typography variant="caption">

                            Forecast Days

                        </Typography>

                        <Typography fontWeight={700}>

                            {forecast.days}

                        </Typography>

                    </Stack>

                    <Divider/>

                    <Stack>

                        <Typography variant="caption">

                            History Length

                        </Typography>

                        <Typography fontWeight={700}>

                            {forecast.historyLength}

                        </Typography>

                    </Stack>

                    <Divider/>

                    <Stack>

                        <Typography variant="caption">

                            Predicted Revenue

                        </Typography>

                        <Typography fontWeight={700}>

                            ₹{summary.predictedTotalRevenue.toLocaleString()}

                        </Typography>

                    </Stack>

                </Stack>

            </CardContent>

        </Card>

    );

}