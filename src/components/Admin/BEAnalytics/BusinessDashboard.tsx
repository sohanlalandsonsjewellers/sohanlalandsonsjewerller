import { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    CircularProgress
} from "@mui/material";

import AdminLayout from "../AdminLayout";
import RevenueTrendChart from "./RevenueTrendChart";
import TopCustomers from "./TopCustomers";
import CustomerInsights from "./CustomerInsights";
import RecentOrders from "./RecentOrders";
import { getBusinessDashboard, getTopCustomers } from "../../../api/analytics";


export default function BusinessDashboard() {

    const [loading, setLoading] = useState(true);

    const [dashboard, setDashboard] = useState<any>(null);
    const [customers, setCustomers] = useState<any[]>([]);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            setLoading(true);

            const [dashboardRes, customerRes] =
                await Promise.all([

                    getBusinessDashboard(),

                    getTopCustomers()

                ]);

            setDashboard(
                dashboardRes.dashboard
            );

            setCustomers(
                customerRes.customers
            );

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading || !dashboard) {

        return (

            <Box
                sx={{
                    height: "70vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

                <CircularProgress />

            </Box>

        );

    }

    const cards = [

        {
            title: "Today's Revenue",
            value: `₹${dashboard.todayRevenue.toLocaleString()}`
        },

        {
            title: "Month Revenue",
            value: `₹${dashboard.monthRevenue.toLocaleString()}`
        },

        {
            title: "Total Revenue",
            value: `₹${dashboard.totalRevenue.toLocaleString()}`
        },

        {
            title: "Today's Bills",
            value: dashboard.todayBills
        },

        {
            title: "Month Bills",
            value: dashboard.monthBills
        },

        {
            title: "Total Bills",
            value: dashboard.totalBills
        },

        {
            title: "Today's Orders",
            value: dashboard.todayOrders
        },

        {
            title: "Month Orders",
            value: dashboard.monthOrders
        },

        {
            title: "Total Orders",
            value: dashboard.totalOrders
        },

        {
            title: "Pending Orders",
            value: dashboard.pendingOrders
        },

        {
            title: "Accepted Orders",
            value: dashboard.acceptedOrders
        },

        {
            title: "Delivered Orders",
            value: dashboard.deliveredOrders
        },

        {
            title: "Cancelled Orders",
            value: dashboard.cancelledOrders
        },

        {
            title: "Average Order Value",
            value: `₹${dashboard.averageOrderValue.toLocaleString()}`
        }

    ];

    return (

        <AdminLayout title="Business Dashboard">

            <Box sx={{ p: { xs: 1, sm: 1.5, md: 2 } }}>

                <Typography
                    variant="h4"
                    sx={{
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        color: "#4A0E17",
                        fontWeight: 700,
                        fontFamily: '"Playfair Display", serif',
                        fontSize: {
                            xs: "1.5rem",
                            sm: "1.8rem",
                            md: "2.125rem"
                        }
                    }}
                >

                    Business Dashboard

                </Typography>

                <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>

                    {cards.map((card) => (

                        <Grid
                            key={card.title}
                            size={{
                                xs: 6,
                                sm: 4,
                                md: 3,
                                lg: 3
                            }}
                        >

                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 1.5, sm: 2, md: 3 },
                                    height: "100%",
                                    minHeight: { xs: 90, sm: 105, md: 120 },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    bgcolor: "#FFFDF9",
                                    border: "1px solid rgba(229,213,188,.35)",
                                    borderRadius: { xs: 2, md: 3 },
                                    overflow: "hidden"
                                }}
                            >

                                <Typography
                                    sx={{
                                        color: "#777",
                                        fontSize: {
                                            xs: ".72rem",
                                            sm: ".8rem",
                                            md: ".9rem"
                                        },
                                        lineHeight: 1.3,
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}
                                >

                                    {card.title}

                                </Typography>

                                <Typography
                                    sx={{
                                        mt: { xs: 1, md: 2 },
                                        color: "#4A0E17",
                                        fontWeight: 700,
                                        fontSize: {
                                            xs: "1.1rem",
                                            sm: "1.35rem",
                                            md: "1.7rem",
                                            lg: "2rem"
                                        },
                                        lineHeight: 1.2,
                                        wordBreak: "break-word"
                                    }}
                                >

                                    {card.value}

                                </Typography>

                            </Paper>

                        </Grid>

                    ))}

                </Grid>

                <Box sx={{ mt: { xs: 2, sm: 2.5, md: 3 } }}>
                    <RevenueTrendChart />
                </Box>

                <Box sx={{ mt: { xs: 2, sm: 2.5, md: 3 } }}>
                    <TopCustomers customers={customers} />
                </Box>

                <Box sx={{ mt: { xs: 2, sm: 2.5, md: 3 } }}>
                    <CustomerInsights />
                </Box>

                <Box sx={{ mt: { xs: 2, sm: 2.5, md: 3 } }}>
                    <RecentOrders />
                </Box>

            </Box>

        </AdminLayout>

    );

}
