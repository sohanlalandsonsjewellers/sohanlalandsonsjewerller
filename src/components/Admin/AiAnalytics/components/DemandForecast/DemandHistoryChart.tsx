import {
    Card,
    CardContent,
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

import {

    DemandForecastItem

} from "../../../../../types/ai/demandForecast";

interface Props {

    products: DemandForecastItem[];

}

export default function DemandHistoryChart({

    products

}: Props) {

    const chartData =

        products.length

            ? products[0].history.map(

                (

                    value,

                    index

                ) => ({

                    day:index+1,

                    sales:value

                })

            )

            : [];

    return (

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

                    mb={1}

                >

                    Sales History

                </Typography>

                <Typography

                    color="text.secondary"

                    mb={3}

                >

                    Historical sales trend.

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={350}

                >

                    <AreaChart

                        data={chartData}

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

                            type="monotone"

                            dataKey="sales"

                            stroke="#B89B73"

                            fill="#B89B73"

                            fillOpacity={0.25}

                        />

                    </AreaChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}