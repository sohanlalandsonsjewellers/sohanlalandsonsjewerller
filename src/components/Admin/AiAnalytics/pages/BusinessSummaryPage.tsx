import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import { useState } from "react";

import AdminLayout from "../../AdminLayout";

import useBusinessSummary from "../../../../hooks/useBusinessSummary";

import DashboardHeader from "../../../../components/Admin/AiAnalytics/components/common/DashboardHeader";
import DashboardFilters from "../../../../components/Admin/AiAnalytics/components/common/DashboardFilters";
import LoadingScreen from "../../../../components/Admin/AiAnalytics/components/common/LoadingScreen";
import ErrorState from "../../../../components/Admin/AiAnalytics/components/common/ErrorState";
import EmptyState from "../../../../components/Admin/AiAnalytics/components/common/EmptyState";

import {

    AlertsCard,

    BusinessScoreCard,

    CustomerHealthCard,

    InventoryHealthCard,

    KPICards,

    RecommendationsCard,

    SalesHealthCard,

    TopSellingProductsTable,

} from "../components/BusinessSummary";

const BusinessSummaryPage = () => {

    const {

        data,

        loading,

        error,

        refresh,

    } = useBusinessSummary();

    const [range, setRange] = useState("30");

    /* ===========================================================
       LOADING
    =========================================================== */

    if (loading) {

        return (

            <AdminLayout title="AI Business Dashboard">

                <LoadingScreen

                    title="Loading Business Summary"

                    subtitle="Preparing AI business insights..."

                />

            </AdminLayout>

        );

    }

    /* ===========================================================
       ERROR
    =========================================================== */

    if (error) {

        return (

            <AdminLayout title="AI Business Dashboard">

                <ErrorState

                    title="Business Summary Failed"

                    message={error}

                    onRetry={() =>

                        refresh(Number(range))

                    }

                />

            </AdminLayout>

        );

    }

    /* ===========================================================
       EMPTY
    =========================================================== */

    if (!data) {

        return (

            <AdminLayout title="AI Business Dashboard">

                <EmptyState

                    title="No Business Data"

                    message="No business analytics are available for the selected period."

                    onRefresh={() =>

                        refresh(Number(range))

                    }

                />

            </AdminLayout>

        );

    }

    /* ===========================================================
       PAGE
    =========================================================== */

    return (

        <AdminLayout title="AI Business Dashboard">

            <Container

                maxWidth="xl"

                sx={{

                    py: 4

                }}

            >

                {/* ===========================================================
                   HEADER
                =========================================================== */}

                <DashboardHeader

                    title="AI Business Dashboard"

                    subtitle="Complete AI-powered overview of revenue, inventory, customers, sales performance and business health."

                    badgeLabel="Business Score"

                    badgeValue={`${data.businessScore.score}/100`}

                    generatedAt={data.generatedAt}

                    loading={loading}

                    onRefresh={() =>

                        refresh(Number(range))

                    }

                />

                {/* ===========================================================
                   FILTERS
                =========================================================== */}

                <DashboardFilters

                    loading={loading}

                    showDays

                    days={Number(range)}

                    onDaysChange={(value) => {

                        setRange(

                            String(value)

                        );

                        refresh(value);

                    }}

                    onRefresh={() =>

                        refresh(Number(range))

                    }

                />

                {/* ===========================================================
                   BUSINESS SCORE + KPI
                =========================================================== */}

                <Grid

                    container

                    spacing={3}

                >

                    <Grid

                        size={{

                            xs: 12

                        }}

                    >

                        <BusinessScoreCard

                            data={

                                data.businessScore

                            }

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs: 12

                        }}

                    >

                        <KPICards

                            summary={

                                data.summary

                            }

                        />

                    </Grid>

                </Grid>

                {/* ===========================================================
                   HEALTH SECTION
                =========================================================== */}

                <Grid

                    container

                    spacing={3}

                    sx={{

                        mt: 1

                    }}

                >

                    <Grid

                        size={{

                            xs: 12,

                            md: 4

                        }}

                    >

                        <SalesHealthCard

                            data={

                                data.salesHealth

                            }

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs: 12,

                            md: 4

                        }}

                    >

                        <InventoryHealthCard

                            data={

                                data.inventoryHealth

                            }

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs: 12,

                            md: 4

                        }}

                    >

                        <CustomerHealthCard

                            data={

                                data.customerHealth

                            }

                        />

                    </Grid>

                </Grid>

                {/* ===========================================================
                   TOP SELLING PRODUCTS
                =========================================================== */}

                <Grid

                    container

                    spacing={3}

                    sx={{

                        mt: 1

                    }}

                >

                    <Grid

                        size={{

                            xs: 12

                        }}

                    >

                        <TopSellingProductsTable

                            products={

                                data.dashboard.topSellingProducts

                            }

                        />

                    </Grid>

                </Grid>

                {/* ===========================================================
                   ALERTS & RECOMMENDATIONS
                =========================================================== */}

                <Grid

                    container

                    spacing={3}

                    sx={{

                        mt: 1

                    }}

                >

                    <Grid

                        size={{

                            xs: 12,

                            lg: 5

                        }}

                    >

                        <AlertsCard

                            alerts={

                                data.alerts

                            }

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs: 12,

                            lg: 7

                        }}

                    >

                        <RecommendationsCard

                            recommendations={

                                data.recommendations

                            }

                        />

                    </Grid>

                </Grid>

                {/* ===========================================================
                   FOOTER
                =========================================================== */}

                <Box

                    sx={{

                        mt: 5,

                        py: 3,

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: {

                            xs: "flex-start",

                            md: "center"

                        },

                        flexDirection: {

                            xs: "column",

                            md: "row"

                        },

                        gap: 1,

                        borderTop:

                            "1px solid rgba(184,155,115,.18)"

                    }}

                >

                    <Typography

                        variant="body2"

                        color="text.secondary"

                    >

                        Last Updated :

                        {" "}

                        {

                            new Date(

                                data.generatedAt

                            ).toLocaleString()

                        }

                    </Typography>

                    <Typography

                        variant="body2"

                        color="text.secondary"

                    >

                        AI Powered Business Intelligence Dashboard

                    </Typography>

                </Box>

            </Container>

        </AdminLayout>

    );

};

export default BusinessSummaryPage;