import {
    Box,
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

import ChartCard from "../../../../../components/Admin/AiAnalytics/components/common/ChartCard";

import { CustomerSegments } from "../../../../../types/ai/customer";

interface Props {

    segments: CustomerSegments;

}

const COLORS = [

    "#B89B73",

    "#4A0E17",

    "#2563EB",

    "#16A34A"

];

export default function SegmentDistribution({

    segments

}: Props) {

    const chartData = [

        {

            name: "VIP",

            value: segments?.VIP ?? 0

        },

        {

            name: "Premium",

            value: segments?.Premium ?? 0

        },

        {

            name: "Regular",

            value: segments?.Regular ?? 0

        },

        {

            name: "New Customer",

            value: segments?.["New Customer"] ?? 0

        }

    ];

    const total = chartData.reduce((sum, item) => sum + item.value, 0);

    return (

        <ChartCard

            title="Customer Segments"

            subtitle="Distribution of customer categories"

            badge="AI"

            height={320}

        >

            {

                total === 0 ? (

                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >

                        <Typography color="text.secondary">

                            No segment data available for this period.

                        </Typography>

                    </Box>

                ) : (

                    <>

            <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                    <Pie

                        data={chartData}

                        dataKey="value"

                        nameKey="name"

                        innerRadius={65}

                        outerRadius={105}

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

                            borderRadius: 14,

                            border:

                                "1px solid rgba(184,155,115,.25)",

                            boxShadow:

                                "0 12px 35px rgba(0,0,0,.08)"

                        }}

                    />

                </PieChart>

            </ResponsiveContainer>

            <Stack

                spacing={1.5}

                mt={3}

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

                                            width: 14,

                                            height: 14,

                                            borderRadius: "50%",

                                            bgcolor:

                                                COLORS[index]

                                        }}

                                    />

                                    <Typography

                                        fontWeight={600}

                                    >

                                        {item.name}

                                    </Typography>

                                </Stack>

                                <Typography

                                    sx={{

                                        fontWeight: 700,

                                        color: "#4A0E17"

                                    }}

                                >

                                    {item.value}

                                </Typography>

                            </Stack>

                        )

                    )

                }

            </Stack>

                    </>

                )

            }

        </ChartCard>

    );

}
