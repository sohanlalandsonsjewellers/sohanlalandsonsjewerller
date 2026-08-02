import {
    Card,
    CardContent,
    Typography,
    Stack,
    Box
} from "@mui/material";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

import {
    InventoryProduct
} from "../../../../../types/ai/inventory";

interface Props {

    products: InventoryProduct[];

}

const COLORS = [

    "#B89B73",

    "#4A0E17",

    "#2563EB",

    "#16A34A",

    "#9333EA",

    "#EA580C",

    "#0891B2",

    "#DC2626"

];

export default function CategoryDistribution({

    products

}: Props) {

    const categoryMap = new Map<string, number>();

    products.forEach(product => {

        const current =

            categoryMap.get(

                product.category

            ) ?? 0;

        categoryMap.set(

            product.category,

            current + product.stock

        );

    });

    const chartData =

        Array.from(

            categoryMap.entries()

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

                border:

                    "1px solid rgba(184,155,115,.18)",

                bgcolor: "#FFF",

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

                    Category Distribution

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                    mb={3}

                >

                    Available stock by product category.

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

                                paddingAngle={3}

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

                            ) => (

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

                                        <Typography

                                            variant="body2"

                                        >

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