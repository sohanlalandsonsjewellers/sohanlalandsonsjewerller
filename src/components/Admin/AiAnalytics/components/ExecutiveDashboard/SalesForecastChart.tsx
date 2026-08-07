import {
    Paper,
    Typography
} from "@mui/material";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

interface Props {
    sales: any;
}

export default function SalesForecastChart({

    sales

}: Props) {

    const chartData =
        sales?.forecast?.forecast ??
        [];

    return (

        <Paper
            sx={{
                p:3,
                borderRadius:4,
                height:420
            }}
        >

            <Typography
                variant="h6"
                mb={2}
            >
                Sales Forecast
            </Typography>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <AreaChart
                    data={chartData}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="day"
                    />

                    <YAxis/>

                    <Tooltip/>

                    <Area
                        type="monotone"
                        dataKey="predictedRevenue"
                    />

                </AreaChart>

            </ResponsiveContainer>

        </Paper>

    );

}