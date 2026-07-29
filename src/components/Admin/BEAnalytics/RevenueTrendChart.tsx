import { useEffect, useState, useCallback } from "react";

import {
    Paper,
    Typography,
    CircularProgress,
    Box,
    FormControl,
    Select,
    MenuItem
} from "@mui/material";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import axiosInstance from "../../../api/axios";

interface Revenue {

    date: string;

    revenue: number;

    bills: number;

}

export default function RevenueTrendChart() {

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState<Revenue[]>([]);

    const [days, setDays] = useState(7);

    const loadChart = useCallback(async () => {

        try {

            setLoading(true);

            const res = await axiosInstance.get(
                `/analytics/business/revenue-chart?days=${days}`
            );

            setData(res.data.revenue);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }, [days]);

    useEffect(() => {

        loadChart();

    }, [loadChart]);



    return (

        <Paper
            elevation={0}
            sx={{
                mt: 4,
                p: 3,
                bgcolor: "#FFFDF9",
                border:
                    "1px solid rgba(229,213,188,.35)"
            }}
        >

            <Box
                sx={{
                    mb: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2
                }}
            >

                <Typography
                    variant="h6"
                    sx={{
                        color: "#4A0E17",
                        fontWeight: 700
                    }}
                >

                    Revenue Trend

                </Typography>

                <FormControl
                    size="small"
                    sx={{
                        minWidth: 170
                    }}
                >

                    <Select
                        value={days}
                        onChange={(e) =>
                            setDays(Number(e.target.value))
                        }
                    >

                        <MenuItem value={7}>
                            Last 7 Days
                        </MenuItem>

                        <MenuItem value={30}>
                            Last 30 Days
                        </MenuItem>

                        <MenuItem value={90}>
                            Last 3 Months
                        </MenuItem>

                        <MenuItem value={365}>
                            Last 1 Year
                        </MenuItem>

                    </Select>

                </FormControl>

            </Box>

            {loading ? (

                <Box
                    sx={{
                        height: 320,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >

                    <CircularProgress />

                </Box>

            ) : (

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <LineChart
                        data={data}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="date"
                            tickFormatter={(value) => {

                                const date =
                                    new Date(value);

                                return date.toLocaleDateString(

                                    "en-IN",

                                    {

                                        day: "2-digit",

                                        month: "short"

                                    }

                                );

                            }}
                        />

                        <YAxis />

                        <Tooltip

                            labelFormatter={(value) =>

                                new Date(value).toLocaleDateString(

                                    "en-IN",

                                    {

                                        day: "numeric",

                                        month: "short",

                                        year: "numeric"

                                    }

                                )

                            }

                            formatter={(value: any, _name: any, props: any) => [

                                `₹${Number(value).toLocaleString("en-IN")}`,

                                `Revenue (Bills : ${props.payload.bills})`

                            ]}

                        />

                        <Line

                            type="monotone"

                            dataKey="revenue"

                            stroke="#4A0E17"

                            strokeWidth={3}

                            dot={{ r: 4 }}

                            activeDot={{ r: 7 }}

                        />

                    </LineChart>

                </ResponsiveContainer>

            )}

        </Paper>

    );

}