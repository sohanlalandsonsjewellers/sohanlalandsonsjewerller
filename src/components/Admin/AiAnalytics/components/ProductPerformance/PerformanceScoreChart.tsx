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
    Cell
} from "recharts";

import {

    ProductPerformance

} from "../../../../../types/ai/product";

interface Props {

    products: ProductPerformance[];

}

export default function PerformanceScoreChart({

    products

}: Props) {

    const average = (

        selector: (product: ProductPerformance) => number

    ) =>

        products.length === 0

            ? 0

            :

            Number(

                (

                    products.reduce(

                        (sum, product) =>

                            sum + selector(product),

                        0

                    ) / products.length

                ).toFixed(1)

            );

    const chartData = [

        {

            metric: "Sales",

            value: average(

                product => product.salesScore

            )

        },

        {

            metric: "Revenue",

            value: average(

                product => product.revenueScore

            )

        },

        {

            metric: "Profit",

            value: average(

                product => product.profitScore

            )

        },

        {

            metric: "Popularity",

            value: average(

                product => product.popularityScore

            )

        }

    ];

    const COLORS = [

        "#4A0E17",

        "#B89B73",

        "#2563EB",

        "#16A34A"

    ];

    return (

        <Card

            elevation={0}

            sx={{

                height: "100%",

                borderRadius: "22px",

                border:

                    "1px solid rgba(184,155,115,.18)",

                bgcolor:"#FFF",

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

                    Performance Scores

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                    mb={3}

                >

                    Average AI scores across all products.

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={340}

                >

                    <BarChart

                        data={chartData}

                    >

                        <CartesianGrid

                            strokeDasharray="3 3"

                        />

                        <XAxis

                            dataKey="metric"

                        />

                        <YAxis

                            domain={[0,100]}

                        />

                        <Tooltip />

                        <Bar

                            dataKey="value"

                            radius={[8,8,0,0]}

                        >

                            {

                                chartData.map(

                                    (

                                        _,

                                        index

                                    ) => (

                                        <Cell

                                            key={index}

                                            fill={

                                                COLORS[index]

                                            }

                                        />

                                    )

                                )

                            }

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}