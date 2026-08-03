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

    "#2563EB",

    "#16A34A",

    "#F59E0B",

    "#DC2626"

];

export default function PricingHealthChart({

    dashboard

}: Props) {

    const chartData = [

        {

            name: "Underpriced",

            value: dashboard.pricingHealth.underpriced

        },

        {

            name: "Fair Price",

            value: dashboard.pricingHealth.fairPrice

        },

        {

            name: "Overpriced",

            value: dashboard.pricingHealth.overpriced

        },

        {

            name: "Needs Review",

            value: dashboard.pricingHealth.needsReview

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

                    Pricing Health

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                    mb={3}

                >

                    AI evaluation of current product pricing.

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

                    spacing={1.4}

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