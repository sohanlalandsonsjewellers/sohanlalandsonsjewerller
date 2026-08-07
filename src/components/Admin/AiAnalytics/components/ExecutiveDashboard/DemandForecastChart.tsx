import {
    Paper,
    Typography
} from "@mui/material";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

interface Props{

    demand:any;

}

export default function DemandForecastChart({

    demand

}:Props){

    const products =

        demand?.data ??

        [];

    const chartData =

        products.map(

            (

                product:any

            )=>({

                name:product.name,

                demand:

                    product.predictedDemand

            })

        );

    return(

        <Paper

            sx={{

                p:3,

                borderRadius:4,

                height:420

            }}

        >

            <Typography

                variant="h6"

                mb={2}

            >

                Demand Forecast

            </Typography>

            <ResponsiveContainer

                width="100%"

                height={320}

            >

                <LineChart

                    data={chartData}

                >

                    <CartesianGrid

                        strokeDasharray="3 3"

                    />

                    <XAxis

                        dataKey="name"

                    />

                    <YAxis/>

                    <Tooltip/>

                    <Line

                        dataKey="demand"

                        type="monotone"

                    />

                </LineChart>

            </ResponsiveContainer>

        </Paper>

    );

}