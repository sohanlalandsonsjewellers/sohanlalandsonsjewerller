import {
    Stack,
    Grid,
    Paper,
    Divider,
    Button,
    Typography,
    Container,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import AdminLayout from "../../AdminLayout";
import useExecutiveDashboard from "../../../../hooks/useExecutiveDashboard";

import LoadingSkeleton from "../components/ExecutiveDashboard/LoadingSkeleton";
import ErrorState from "../components/ExecutiveDashboard/ErrorState";
import EmptyState from "../components/ExecutiveDashboard/EmptyState";
import ExecutiveHero from "../components/ExecutiveDashboard/ExecutiveHero";
import BusinessHealthCard from "../components/ExecutiveDashboard/BusinessHealthCard";
import KPIGrid from "../components/ExecutiveDashboard/KPIGrid";
import BusinessScoreChart from "../components/ExecutiveDashboard/BusinessScoreChart";
import RevenueTrendChart from "../components/ExecutiveDashboard/RevenueTrendChart";
import InventoryOverview from "../components/ExecutiveDashboard/InventoryOverview";
import CustomerOverview from "../components/ExecutiveDashboard/CustomerOverview";
import ProductOverview from "../components/ExecutiveDashboard/ProductOverview";
import PriceOptimizationOverview from "../components/ExecutiveDashboard/PriceOptimizationOverview";
import ReorderOverview from "../components/ExecutiveDashboard/ReorderOverview";
import SalesForecastChart from "../components/ExecutiveDashboard/SalesForecastChart";
import DemandForecastChart from "../components/ExecutiveDashboard/DemandForecastChart";
import AlertPanel from "../components/ExecutiveDashboard/AlertPanel";
import RecommendationPanel from "../components/ExecutiveDashboard/RecommendationPanel";
import ExecutiveSection from "../components/ExecutiveDashboard/ExecutiveSection";

export default function ExecutiveDashboardPage() {
    const { dashboard, loading, error, refresh } = useExecutiveDashboard(30);

    /* ===========================================================
       LOADING
    =========================================================== */
    if (loading) {
        return (
            <AdminLayout title="AI Executive Dashboard">
                <LoadingSkeleton />
            </AdminLayout>
        );
    }

    /* ===========================================================
       ERROR
    =========================================================== */
    if (error) {
        return (
            <AdminLayout title="AI Executive Dashboard">
                <ErrorState message={error} onRetry={refresh} />
            </AdminLayout>
        );
    }

    /* ===========================================================
       EMPTY
    =========================================================== */
    if (!dashboard) {
        return (
            <AdminLayout title="AI Executive Dashboard">
                <EmptyState onRefresh={refresh} />
            </AdminLayout>
        );
    }

    /* ===========================================================
       SAFE FALLBACKS (fixes "Cannot read properties of undefined
       (reading 'toFixed')" type crashes if backend sends partial data)
    =========================================================== */
    const businessScore = dashboard.businessHealth?.score ?? 0;
    const businessStatus = dashboard.businessHealth?.status ?? "N/A";
    const totalRevenue = dashboard.summary?.revenue ?? 0;
    const totalOrders = dashboard.summary?.orders ?? 0;
    const totalCustomers = dashboard.summary?.users ?? 0;
    const totalProducts = dashboard.summary?.products ?? 0;

    /* ===========================================================
       PAGE
    =========================================================== */
    return (
        <AdminLayout title="AI Executive Dashboard">
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Stack spacing={3} pb={5}>
                    <ExecutiveHero dashboard={dashboard} onRefresh={refresh} />

                    {/* Page Header */}
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="h4" fontWeight={700}>
                            AI Executive Dashboard
                        </Typography>
                        <Typography color="text.secondary">
                            Complete business intelligence dashboard powered by AI
                        </Typography>
                    </Paper>

                    <BusinessHealthCard health={dashboard.businessHealth} />

                    <KPIGrid kpis={dashboard.kpis} />

                    <Divider />

                    {/* Business Intelligence Section */}
                    <Paper sx={{ p: 2, borderRadius: 3 }}>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            justifyContent="space-between"
                            alignItems={{ xs: "flex-start", sm: "center" }}
                            spacing={2}
                        >
                            <ExecutiveSection
                                title="Business Intelligence"
                                subtitle="AI generated executive insights"
                            >
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, lg: 8 }}>
                                        <RevenueTrendChart modules={dashboard.modules} />
                                    </Grid>
                                    <Grid size={{ xs: 12, lg: 4 }}>
                                        <BusinessScoreChart health={dashboard.businessHealth} />
                                    </Grid>
                                </Grid>
                            </ExecutiveSection>

                            <Button
                                variant="contained"
                                startIcon={<RefreshIcon />}
                                onClick={refresh}
                            >
                                Refresh Dashboard
                            </Button>
                        </Stack>
                    </Paper>

                    <Divider />

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <InventoryOverview inventory={dashboard.modules?.inventory} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <CustomerOverview customer={dashboard.modules?.customer} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <ProductOverview product={dashboard.modules?.product} />
                        </Grid>
                    </Grid>

                    <Divider />

                    {/* Optimization Section */}
                    <ExecutiveSection
                        title="Optimization"
                        subtitle="Pricing and Inventory Optimization"
                    >
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <PriceOptimizationOverview pricing={dashboard.modules?.price} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <ReorderOverview reorder={dashboard.modules?.reorder} />
                            </Grid>
                        </Grid>
                    </ExecutiveSection>

                    <Divider />

                    {/* Forecast Analytics Section */}
                    <ExecutiveSection
                        title="Forecast Analytics"
                        subtitle="AI Prediction Models"
                    >
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, lg: 6 }}>
                                <SalesForecastChart sales={dashboard.modules?.sales} />
                            </Grid>
                            <Grid size={{ xs: 12, lg: 6 }}>
                                <DemandForecastChart demand={dashboard.modules?.demand} />
                            </Grid>
                        </Grid>
                    </ExecutiveSection>

                    <Divider />

                    {/* Executive Insights Section */}
                    <ExecutiveSection
                        title="Executive Insights"
                        subtitle="Business Alerts & Recommendations"
                    >
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AlertPanel alerts={dashboard.alerts} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <RecommendationPanel recommendations={dashboard.recommendations} />
                            </Grid>
                        </Grid>
                    </ExecutiveSection>

                    {/* Executive Summary */}
                    <Paper sx={{ p: 3, borderRadius: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Executive Summary
                        </Typography>
                        <Typography color="text.secondary">
                            Last Updated : {new Date(dashboard.generatedAt).toLocaleString()}
                        </Typography>
                        <Typography mt={2}>
                            Business Score : {businessScore}
                        </Typography>
                        <Typography>
                            Status : {businessStatus}
                        </Typography>
                        <Typography>
                            Total Revenue : ₹{totalRevenue.toLocaleString()}
                        </Typography>
                        <Typography>
                            Total Orders : {totalOrders}
                        </Typography>
                        <Typography>
                            Total Customers : {totalCustomers}
                        </Typography>
                        <Typography>
                            Total Products : {totalProducts}
                        </Typography>
                    </Paper>
                </Stack>
            </Container>
        </AdminLayout>
    );
}
