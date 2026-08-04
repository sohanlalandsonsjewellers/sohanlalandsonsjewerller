import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {
    LineChart,
    Line,
    ResponsiveContainer,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import {

    ForecastItem

} from "../../../../../types/ai/salesForecast";

interface Props {

    forecast: ForecastItem[];

}

export default function RevenueForecastChart({

    forecast

}: Props) {

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

                    Revenue Forecast

                </Typography>

                <Typography

                    color="text.secondary"

                    mb={3}

                >

                    AI predicted revenue trend.

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={420}

                >

                    <LineChart

                        data={forecast}

                        margin={{

                            top:20,

                            right:20,

                            left:10,

                            bottom:10

                        }}

                    >

                        <CartesianGrid

                            strokeDasharray="3 3"

                        />

                        <XAxis

                            dataKey="day"

                            tick={{

                                fontSize:11

                            }}

                        />

                        <YAxis

                            tickFormatter={(v)=>

                                `₹${Number(v).toLocaleString()}`

                            }

                        />

                        <Tooltip

                            formatter={(value:any)=>

                                [

                                    `₹${Number(value).toLocaleString()}`,

                                    "Revenue"

                                ]

                            }

                            labelFormatter={(label)=>

                                `Day ${label}`

                            }

                        />

                        <Line

                            type="monotone"

                            dataKey="predictedRevenue"

                            stroke="#4A0E17"

                            strokeWidth={3}

                            dot={false}

                            activeDot={{

                                r:6

                            }}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}