import {
    Alert,
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";

import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

import useBusinessSummary from "../../../../hooks/useBusinessSummary";

import {
    AlertsCard,
    BusinessScoreCard,
    CustomerHealthCard,
    DashboardSkeleton,
    EmptyState,
    InventoryHealthCard,
    KPICards,
    RecommendationsCard,
    SalesHealthCard,
    TopSellingProductsTable,
} from "../components/BusinessSummary";
import AdminLayout from "../../AdminLayout";
import { useState } from "react";

const BusinessSummaryPage = () => {

    const {
        data,
        loading,
        error,
        refresh,
    } = useBusinessSummary();
    const [range, setRange] = useState("30");

    if (loading) {

        return (

            <Container
                maxWidth="xl"
                sx={{
                    py: 4,
                }}
            >

                <DashboardSkeleton />

            </Container>

        );

    }

    if (error) {

        return (

            <Container
                maxWidth="xl"
                sx={{
                    py: 4,
                }}
            >

                <Alert
                    severity="error"
                    sx={{
                        mb: 2,
                    }}
                >

                    {error}

                </Alert>

                <Button
                    onClick={() => refresh(Number(range))}
                >

                    Retry

                </Button>

            </Container>

        );

    }

    if (!data) {

        return (

            <Container
                maxWidth="xl"
                sx={{
                    py: 4,
                }}
            >

                <EmptyState
                    onRetry={refresh}
                />

            </Container>

        );

    }

    return (

        <AdminLayout title="AI Business Dashboard">

            <Container
                maxWidth="xl"
                sx={{
                    py: 4,
                }}
            >

                {/* ================= HEADER ================= */}

                <Stack

                    direction={{
                        xs: "column",
                        md: "row",
                    }}

                    justifyContent="space-between"

                    alignItems={{
                        xs: "flex-start",
                        md: "center",
                    }}

                    spacing={2}

                    mb={4}

                >

                    <Box>

                        <Typography

                            variant="h4"

                            fontWeight={700}

                        >

                            AI Business Dashboard

                        </Typography>

                        <Typography

                            color="text.secondary"

                        >

                            Smart insights powered by AI Analytics

                        </Typography>

                    </Box>

                    <Stack

                        direction="row"

                        spacing={2}

                    >

                        <FormControl
                            size="small"
                            sx={{
                                minWidth: 170,
                            }}
                        >

                            <InputLabel>

                                Date Range

                            </InputLabel>

                            <Select
                                value={range}
                                label="Date Range"
                                onChange={(e) => {

                                    const value = e.target.value;

                                    setRange(value);

                                    refresh(Number(value));

                                }}
                            >

                                <MenuItem value="7">

                                    Last 7 Days

                                </MenuItem>

                                <MenuItem value="30">

                                    Last 30 Days

                                </MenuItem>

                                <MenuItem value="90">

                                    Last 90 Days

                                </MenuItem>

                                <MenuItem value="365">

                                    Last Year

                                </MenuItem>

                            </Select>

                        </FormControl>

                        <Button

                            variant="contained"

                            startIcon={<RefreshRoundedIcon />}

                            onClick={() => refresh(Number(range))}

                        >

                            Refresh

                        </Button>

                    </Stack>

                </Stack>

                {/* ================= BUSINESS SCORE + KPI ================= */}

                <Grid
                    container
                    spacing={3}
                >

                    <Grid
                        size={{
                            xs: 12,
                        }}
                    >

                        <BusinessScoreCard
                            data={data.businessScore}
                        />

                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                        }}
                    >

                        <KPICards
                            summary={data.summary}
                        />

                    </Grid>

                </Grid>

                {/* ================= HEALTH SECTION ================= */}

                <Grid

                    container

                    spacing={3}

                    sx={{

                        mt: 1,

                    }}

                >

                    <Grid
                        size={{
                            xs: 12,
                            md: 4,
                        }}
                    >

                        <SalesHealthCard
                            data={data.salesHealth}
                        />

                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            md: 4,
                        }}
                    >

                        <InventoryHealthCard
                            data={data.inventoryHealth}
                        />

                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            md: 4,
                        }}
                    >

                        <CustomerHealthCard
                            data={data.customerHealth}
                        />

                    </Grid>

                </Grid>

                {/* ================= TOP SELLING PRODUCTS ================= */}

                <Grid
                    container
                    spacing={3}
                    sx={{
                        mt: 1,
                    }}
                >

                    <Grid
                        size={{
                            xs: 12,
                        }}
                    >

                        <TopSellingProductsTable
                            products={data.dashboard.topSellingProducts}
                        />

                    </Grid>

                </Grid>

                {/* ================= ALERTS & RECOMMENDATIONS ================= */}

                <Grid
                    container
                    spacing={3}
                    sx={{
                        mt: 1,
                    }}
                >

                    <Grid
                        size={{
                            xs: 12,
                            lg: 5,
                        }}
                    >

                        <AlertsCard
                            alerts={data.alerts}
                        />

                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            lg: 7,
                        }}
                    >

                        <RecommendationsCard
                            recommendations={data.recommendations}
                        />

                    </Grid>

                </Grid>

                {/* ================= FOOTER ================= */}

                <Box
                    sx={{
                        mt: 5,
                        py: 2,
                        borderTop: "1px solid",
                        borderColor: "divider",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: {
                            xs: "flex-start",
                            md: "center",
                        },
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        gap: 1,
                    }}
                >

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Last Updated :
                        {" "}
                        {new Date(data.generatedAt).toLocaleString()}
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