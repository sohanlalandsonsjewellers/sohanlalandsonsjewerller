import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
    Legend
} from "recharts";

import {

    PriceDashboard

} from "../../../../../types/ai/price";

interface Props {

    dashboard: PriceDashboard;

}

export default function DemandStockChart({

    dashboard

}: Props) {

    const chartData = [

        {

            level: "High",

            demand: dashboard.demandSummary.high,

            stock: dashboard.stockSummary.high

        },

        {

            level: "Medium",

            demand: dashboard.demandSummary.medium,

            stock: dashboard.stockSummary.normal

        },

        {

            level: "Low",

            demand: dashboard.demandSummary.low,

            stock: dashboard.stockSummary.low

        }

    ];

    return (

        <Card

            elevation={0}

            sx={{

                mb:4,

                borderRadius:"22px",

                bgcolor:"#FFF",

                border:

                    "1px solid rgba(184,155,115,.18)",

                boxShadow:

                    "0 15px 35px rgba(0,0,0,.05)"

            }}

        >

            <CardContent>

                <Typography

                    variant="h6"

                    fontWeight={700}

                    color="#4A0E17"

                    mb={1}

                >

                    Demand vs Stock

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                    mb={3}

                >

                    Compare product demand with current inventory levels.

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={380}

                >

                    <BarChart

                        data={chartData}

                        margin={{

                            top:20,

                            right:20,

                            left:0,

                            bottom:10

                        }}

                    >

                        <CartesianGrid

                            strokeDasharray="3 3"

                            stroke="#ECECEC"

                        />

                        <XAxis

                            dataKey="level"

                        />

                        <YAxis

                            allowDecimals={false}

                        />

                        <Tooltip

                            contentStyle={{

                                borderRadius:12,

                                border:

                                    "1px solid rgba(184,155,115,.25)",

                                boxShadow:

                                    "0 10px 25px rgba(0,0,0,.10)"

                            }}

                        />

                        <Legend />

                        <Bar

                            dataKey="demand"

                            name="Demand"

                            fill="#4A0E17"

                            radius={[8,8,0,0]}

                        />

                        <Bar

                            dataKey="stock"

                            name="Stock"

                            fill="#B89B73"

                            radius={[8,8,0,0]}

                        />

                    </BarChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}