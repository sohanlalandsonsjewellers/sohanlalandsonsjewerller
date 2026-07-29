import { useEffect, useState } from "react";

import {
    Grid,
    Paper,
    Typography,
    CircularProgress,
    Box
} from "@mui/material";

import { getCustomerInsights } from "../../../api/analytics";

interface Insights {

    newCustomers: number;

    returningCustomers: number;

    repeatPurchaseRate: number;

}

export default function CustomerInsights() {

    const [loading, setLoading] =
        useState(true);

    const [insights, setInsights] =
        useState<Insights | null>(null);

    useEffect(() => {

        loadInsights();

    }, []);

    async function loadInsights() {

        try {

            setLoading(true);

            const res =
                await getCustomerInsights();

            setInsights(res.insights);

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
                    display: "flex",
                    justifyContent: "center",
                    py: 5
                }}
            >

                <CircularProgress />

            </Box>

        );

    }

    if (!insights) return null;

    const cards = [

        {

            title: "New Customers",

            value: insights.newCustomers

        },

        {

            title: "Returning Customers",

            value: insights.returningCustomers

        },

        {

            title: "Repeat Purchase Rate",

            value: `${insights.repeatPurchaseRate}%`

        }

    ];

    return (

        <>

            <Box
                sx={{
                    mt: 4,
                    mb: 3
                }}
            >

                <Typography
                    variant="h5"
                    sx={{
                        color: "#4A0E17",
                        fontWeight: 700,
                        fontFamily: '"Playfair Display", serif'
                    }}
                >

                    Customer Insights

                </Typography>

            </Box>

            <Grid
                container
                spacing={3}
            >

                {cards.map((card) => (

                    <Grid
                        key={card.title}
                        size={{
                            xs: 12,
                            md: 4
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

        </>

    );

}