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
import { getBusinessDashboard, getTopCustomers  } from "../../../api/analytics";


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

    if (loading) {

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

            <Box p={1}>

                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        color: "#4A0E17",
                        fontWeight: 700,
                        fontFamily: '"Playfair Display", serif'
                    }}
                >

                    Business Dashboard

                </Typography>

                <Grid container spacing={3}>

                    {cards.map((card) => (

                        <Grid
                            key={card.title}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 3
                            }}
                        >

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: "100%",
                                    bgcolor: "#FFFDF9",
                                    border: "1px solid rgba(229,213,188,.35)"
                                }}
                            >

                                <Typography
                                    sx={{
                                        color: "#777",
                                        fontSize: ".9rem"
                                    }}
                                >

                                    {card.title}

                                </Typography>

                                <Typography
                                    variant="h4"
                                    sx={{
                                        mt: 2,
                                        color: "#4A0E17",
                                        fontWeight: 700
                                    }}
                                >

                                    {card.value}

                                </Typography>

                            </Paper>

                        </Grid>

                    ))}

                </Grid>

                <RevenueTrendChart />
                <TopCustomers customers={customers}/>
                <CustomerInsights />
                <RecentOrders />

            </Box>

        </AdminLayout>

    );

}