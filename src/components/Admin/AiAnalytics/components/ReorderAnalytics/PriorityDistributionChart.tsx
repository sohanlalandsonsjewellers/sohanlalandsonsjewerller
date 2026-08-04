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

    ReorderSummary

} from "../../../../../types/ai/reorder";

interface Props {

    summary: ReorderSummary;

}

const COLORS = [

    "#DC2626",

    "#F59E0B",

    "#2563EB",

    "#16A34A",

    "#94A3B8"

];

export default function PriorityDistributionChart({

    summary

}: Props) {

    const chartData = [

        {

            name: "Critical",

            value: summary.critical

        },

        {

            name: "High",

            value: summary.high

        },

        {

            name: "Medium",

            value: summary.medium

        },

        {

            name: "Low",

            value: summary.low

        },

        {

            name: "None",

            value: summary.none

        }

    ];

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

                    Reorder Priority

                </Typography>

                <Typography

                    color="text.secondary"

                    mb={3}

                >

                    AI priority distribution across products.

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

                                    borderRadius:12

                                }}

                            />

                        </PieChart>

                    </ResponsiveContainer>

                </Box>

                <Stack

                    spacing={1.5}

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

                                        spacing={1.5}

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