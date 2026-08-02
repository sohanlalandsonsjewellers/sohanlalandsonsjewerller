import { Box, Typography } from "@mui/material";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import ChartCard from "../../../../../components/Admin/AiAnalytics/components/common/ChartCard";

import { CustomerTrend } from "../../../../../types/ai/customer";

interface Props {

    data: CustomerTrend[];

}

export default function CustomerTrendChart({

    data

}: Props) {

    const hasData = Array.isArray(data) && data.length > 0;

    return (

        <ChartCard

            title="Customer Growth Trend"

            subtitle="Monthly customer acquisition based on successful first orders."

            badge="AI"

            height={380}

        >

            {

                !hasData ? (

                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >

                        <Typography color="text.secondary">

                            No trend data available for this period.

                        </Typography>

                    </Box>

                ) : (

            <ResponsiveContainer width="100%" height="100%">

                <AreaChart

                    data={data}

                    margin={{

                        top: 15,

                        right: 20,

                        left: 0,

                        bottom: 0

                    }}

                >

                    <defs>

                        <linearGradient

                            id="customerGradient"

                            x1="0"

                            y1="0"

                            x2="0"

                            y2="1"

                        >

                            <stop

                                offset="5%"

                                stopColor="#B89B73"

                                stopOpacity={0.85}

                            />

                            <stop

                                offset="95%"

                                stopColor="#B89B73"

                                stopOpacity={0.05}

                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid

                        stroke="#ECECEC"

                        strokeDasharray="3 3"

                        vertical={false}

                    />

                    <XAxis

                        dataKey="month"

                        tick={{

                            fill: "#666",

                            fontSize: 12

                        }}

                        axisLine={false}

                        tickLine={false}

                    />

                    <YAxis

                        allowDecimals={false}

                        axisLine={false}

                        tickLine={false}

                        tick={{

                            fill: "#666",

                            fontSize: 12

                        }}

                    />

                    <Tooltip

                        cursor={{

                            stroke: "#B89B73",

                            strokeDasharray: "4 4"

                        }}

                        contentStyle={{

                            borderRadius: 14,

                            border: "1px solid rgba(184,155,115,.25)",

                            boxShadow:

                                "0 12px 35px rgba(0,0,0,.08)"

                        }}

                    />

                    <Area

                        type="monotone"

                        dataKey="customers"

                        stroke="#4A0E17"

                        strokeWidth={3}

                        fill="url(#customerGradient)"

                        activeDot={{

                            r: 6

                        }}

                    />

                </AreaChart>

            </ResponsiveContainer>

                )

            }

        </ChartCard>

    );

}
