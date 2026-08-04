import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Grid
} from "@mui/material";

import AdminLayout from "../../AdminLayout";

import useReorder from "../../../../hooks/useReorder";

import DashboardHeader from "../components/common/DashboardHeader";
import DashboardFilters from "../components/common/DashboardFilters";

import ReorderHero from "../components/ReorderAnalytics/ReorderHero";
import ReorderSummaryCards from "../components/ReorderAnalytics/ReorderSummaryCards";
import PriorityDistributionChart from "../components/ReorderAnalytics/PriorityDistributionChart";
import ReorderScoreChart from "../components/ReorderAnalytics/ReorderScoreChart";
import StockDemandChart from "../components/ReorderAnalytics/StockDemandChart";
import ReorderRecommendations from "../components/ReorderAnalytics/ReorderRecommendations";
import ReorderTable from "../components/ReorderAnalytics/ReorderTable";

export default function ReorderAnalyticsPage() {

    const {

        data,

        loading,

        error,

        refresh

    } = useReorder(30);

    if (loading && !data) {

        return (

            <AdminLayout title="Smart Reorder">

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

            </AdminLayout>

        );

    }

    if (error) {

        return (

            <AdminLayout title="Smart Reorder">

                <Container maxWidth="xl">

                    <Alert severity="error">

                        {error}

                    </Alert>

                </Container>

            </AdminLayout>

        );

    }

    if (!data) {

        return null;

    }

    return (

        <AdminLayout title="Smart Reorder">

            <Container

                maxWidth="xl"

                sx={{

                    py: 4

                }}

            >

                <DashboardHeader

                    title="Smart Reorder Analytics"

                    subtitle="AI powered reorder planning"

                    badgeLabel="Products"

                    badgeValue={String(data.count)}

                    generatedAt={data.generatedAt}

                    loading={loading}

                    onRefresh={refresh}

                />

                <DashboardFilters

                    loading={loading}

                    onRefresh={refresh}

                />

                <ReorderHero

                    summary={data.summary}

                />

                <ReorderSummaryCards

                    summary={data.summary}

                />

                <Grid

                    container

                    spacing={3}

                    sx={{

                        mb: 4

                    }}

                >

                    <Grid

                        size={{

                            xs: 12,

                            lg: 6

                        }}

                    >

                        <PriorityDistributionChart

                            summary={data.summary}

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs: 12,

                            lg: 6

                        }}

                    >

                        <ReorderScoreChart

                            products={data.data}

                        />

                    </Grid>

                </Grid>

                <StockDemandChart

                    products={data.data}

                />

                <ReorderRecommendations

                    products={data.data}

                />

                <ReorderTable

                    products={data.data}

                    loading={loading}

                />

            </Container>

        </AdminLayout>

    );

}