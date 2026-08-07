import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import {

    DemandForecastItem

} from "../../../../../types/ai/demandForecast";

interface Props {

    products: DemandForecastItem[];

}

export default function DemandForecastChart({

    products

}: Props) {

    const chartData =

        products.length

            ? products[0].forecast

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

                    Demand Forecast

                </Typography>

                <Typography

                    color="text.secondary"

                    mb={3}

                >

                    AI predicted demand trend.

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={420}

                >

                    <LineChart

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

                        <Line

                            dataKey="predictedQty"

                            stroke="#4A0E17"

                            strokeWidth={3}

                            dot={false}

                            type="monotone"

                        />

                    </LineChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}