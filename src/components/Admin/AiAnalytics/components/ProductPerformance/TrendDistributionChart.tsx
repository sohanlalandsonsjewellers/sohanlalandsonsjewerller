import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography
} from "@mui/material";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import {
    ProductPerformance
} from "../../../../../types/ai/product";

interface Props {

    products: ProductPerformance[];

}

const COLORS = [

    "#16A34A",

    "#2563EB",

    "#F59E0B",

    "#DC2626"

];

export default function TrendDistributionChart({

    products

}: Props) {

    const trendMap = new Map<string, number>();

    products.forEach(product => {

        const trend = product.trend.trend;

        trendMap.set(

            trend,

            (trendMap.get(trend) ?? 0) + 1

        );

    });

    const chartData =

        Array.from(

            trendMap.entries()

        ).map(

            ([name, value]) => ({

                name,

                value

            })

        );

    return (

        <Card

            elevation={0}

            sx={{

                height: "100%",

                borderRadius: "22px",

                bgcolor: "#FFF",

                border: "1px solid rgba(184,155,115,.18)",

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

                    Product Trend

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                    mb={3}

                >

                    AI detected product growth trends.

                </Typography>

                <Box

                    sx={{

                        width:"100%",

                        height:320

                    }}

                >

                    <ResponsiveContainer>

                        <PieChart>

                            <Pie

                                data={chartData}

                                dataKey="value"

                                nameKey="name"

                                innerRadius={65}

                                outerRadius={110}

                                paddingAngle={4}

                            >

                                {

                                    chartData.map(

                                        (

                                            _,

                                            index

                                        )=>(

                                            <Cell

                                                key={index}

                                                fill={

                                                    COLORS[

                                                        index %

                                                        COLORS.length

                                                    ]

                                                }

                                            />

                                        )

                                    )

                                }

                            </Pie>

                            <Tooltip/>

                        </PieChart>

                    </ResponsiveContainer>

                </Box>

                <Stack

                    spacing={1.2}

                    mt={2}

                >

                    {

                        chartData.map(

                            (

                                item,

                                index

                            )=>(

                                <Stack

                                    key={item.name}

                                    direction="row"

                                    justifyContent="space-between"

                                    alignItems="center"

                                >

                                    <Stack

                                        direction="row"

                                        spacing={1}

                                        alignItems="center"

                                    >

                                        <Box

                                            sx={{

                                                width:12,

                                                height:12,

                                                borderRadius:"50%",

                                                bgcolor:

                                                    COLORS[

                                                        index %

                                                        COLORS.length

                                                    ]

                                            }}

                                        />

                                        <Typography>

                                            {item.name}

                                        </Typography>

                                    </Stack>

                                    <Typography

                                        fontWeight={700}

                                        color="#4A0E17"

                                    >

                                        {item.value}

                                    </Typography>

                                </Stack>

                            )

                        )

                    }

                </Stack>

            </CardContent>

        </Card>

    );

}