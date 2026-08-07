import {

    Paper,
    Typography

} from "@mui/material";

import {

    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis

} from "recharts";

interface Props{

    modules:any;

}

export default function RevenueTrendChart({

    modules

}:Props){

    const data =

        modules?.sales?.forecast?.forecast ||

        [];

    return(

        <Paper sx={{p:3,borderRadius:4,height:420}}>

            <Typography

                variant="h6"

                mb={2}

            >

                Revenue Forecast

            </Typography>

            <ResponsiveContainer

                width="100%"

                height={320}

            >

                <AreaChart

                    data={data}

                >

                    <CartesianGrid

                        strokeDasharray="3 3"

                    />

                    <XAxis

                        dataKey="day"

                    />

                    <YAxis/>

                    <Tooltip/>

                    <Area

                        dataKey="predictedRevenue"

                        type="monotone"

                    />

                </AreaChart>

            </ResponsiveContainer>

        </Paper>

    );

}