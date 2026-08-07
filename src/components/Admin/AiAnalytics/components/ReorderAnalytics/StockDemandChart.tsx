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

    ReorderProduct

} from "../../../../../types/ai/reorder";

interface Props {

    products: ReorderProduct[];

}

export default function StockDemandChart({

    products

}: Props) {

    const chartData =

        [...products]

            .slice(0, 10)

            .map(

                product => ({

                    name:

                        product.name.length > 12

                            ? `${product.name.substring(0,12)}...`

                            : product.name,

                    stock:

                        product.currentStock,

                    demand:

                        product.predictedDemand

                })

            );

    return (

        <Card

            elevation={0}

            sx={{

                mb:4,

                borderRadius:"22px",

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

                    Current Stock vs Predicted Demand

                </Typography>

                <Typography

                    color="text.secondary"

                    mb={3}

                >

                    Compare available inventory with AI forecast demand.

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

                            dataKey="name"

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

                            dataKey="stock"

                            name="Current Stock"

                            fill="#4A0E17"

                            radius={[8,8,0,0]}

                        />

                        <Bar

                            dataKey="demand"

                            name="Predicted Demand"

                            fill="#B89B73"

                            radius={[8,8,0,0]}

                        />

                    </BarChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}