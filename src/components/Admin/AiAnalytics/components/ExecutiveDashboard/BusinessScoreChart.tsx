import {
    Paper,
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
    BusinessHealth
} from "../../../../../types/ai/executiveDashboard";

interface Props {

    health: BusinessHealth;

}

export default function BusinessScoreChart({

    health

}: Props) {

    const chartData = [

        {

            name: "Score",

            value: health.score

        },

        {

            name: "Remaining",

            value: Math.max(

                0,

                100 - health.score

            )

        }

    ];

    return (

        <Paper

            elevation={3}

            sx={{

                p: 3,

                borderRadius: 4,

                height: "100%"

            }}

        >

            <Typography

                variant="h6"

                fontWeight={700}

                mb={3}

            >

                Business Health Score

            </Typography>

            <Box

                sx={{

                    width: "100%",

                    height: 260

                }}

            >

                <ResponsiveContainer>

                    <PieChart>

                        <Pie

                            data={chartData}

                            dataKey="value"

                            innerRadius={65}

                            outerRadius={95}

                            paddingAngle={4}

                        >

                            <Cell />

                            <Cell />

                        </Pie>

                        <Tooltip />

                    </PieChart>

                </ResponsiveContainer>

            </Box>

            <Stack

                spacing={1}

                mt={2}

                alignItems="center"

            >

                <Typography

                    variant="h3"

                    fontWeight={700}

                >

                    {health.score.toFixed(1)}%

                </Typography>

                <Typography

                    color="text.secondary"

                >

                    {health.status}

                </Typography>

            </Stack>

        </Paper>

    );

}