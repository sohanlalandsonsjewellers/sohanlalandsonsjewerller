import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

import {

    ReorderProduct

} from "../../../../../types/ai/reorder";

interface Props {

    products: ReorderProduct[];

}

export default function ReorderScoreChart({

    products

}: Props) {

    const chartData =

        [...products]

            .sort(

                (

                    a,

                    b

                ) =>

                    b.reorderScore -

                    a.reorderScore

            )

            .slice(0, 10)

            .map(

                product => ({

                    name:

                        product.name.length > 12

                            ? `${product.name.substring(0,12)}...`

                            : product.name,

                    reorderScore:

                        product.reorderScore

                })

            );

    return (

        <Card

            elevation={0}

            sx={{

                height:"100%",

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

                    Top Reorder Scores

                </Typography>

                <Typography

                    color="text.secondary"

                    mb={3}

                >

                    Products with the highest AI reorder priority.

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={340}

                >

                    <BarChart

                        data={chartData}

                        layout="vertical"

                        margin={{

                            top:10,

                            right:20,

                            left:20,

                            bottom:10

                        }}

                    >

                        <CartesianGrid

                            strokeDasharray="3 3"

                        />

                        <XAxis

                            type="number"

                            domain={[0,100]}

                        />

                        <YAxis

                            type="category"

                            dataKey="name"

                            width={120}

                        />

                        <Tooltip

                            contentStyle={{

                                borderRadius:12,

                                border:

                                    "1px solid rgba(184,155,115,.25)"

                            }}

                        />

                        <Bar

                            dataKey="reorderScore"

                            radius={[0,8,8,0]}

                            fill="#4A0E17"

                        />

                    </BarChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}