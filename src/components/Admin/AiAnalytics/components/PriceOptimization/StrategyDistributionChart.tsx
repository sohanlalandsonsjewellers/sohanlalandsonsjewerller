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
    ResponsiveContainer,
    Tooltip
} from "recharts";

import {

    PriceDashboard

} from "../../../../../types/ai/price";

interface Props {

    dashboard: PriceDashboard;

}

const COLORS = [

    "#16A34A",

    "#2563EB",

    "#F59E0B",

    "#9333EA",

    "#DC2626"

];

export default function StrategyDistributionChart({

    dashboard

}: Props) {

    const chartData = [

        {

            name: "Increase",

            value: dashboard.priceStrategy.increase

        },

        {

            name: "Maintain",

            value: dashboard.priceStrategy.maintain

        },

        {

            name: "Discount",

            value: dashboard.priceStrategy.discount

        },

        {

            name: "Bundle",

            value: dashboard.priceStrategy.bundle

        },

        {

            name: "Clearance",

            value: dashboard.priceStrategy.clearance

        }

    ];

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

                    Pricing Strategy

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                    mb={3}

                >

                    AI recommended pricing strategies for products.

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

                            </Pie>

                            <Tooltip

                                contentStyle={{

                                    borderRadius:12,

                                    border:

                                    "1px solid rgba(184,155,115,.25)"

                                }}

                            />

                        </PieChart>

                    </ResponsiveContainer>

                </Box>

                <Stack

                    spacing={1.3}

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

                                        spacing={1.2}

                                        alignItems="center"

                                    >

                                        <Box

                                            sx={{

                                                width:12,

                                                height:12,

                                                borderRadius:"50%",

                                                bgcolor:

                                                    COLORS[index]

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