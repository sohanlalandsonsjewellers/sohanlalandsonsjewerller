import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Grid
} from "@mui/material";

import AdminLayout from "../../AdminLayout";

import useProductPerformance from "../../../../hooks/useProductPerformance";

import DashboardHeader from "../components/common/DashboardHeader";
import DashboardFilters from "../components/common/DashboardFilters";

import ProductHero from "../components/ProductPerformance/ProductHero";
import ProductSummaryCards from "../components/ProductPerformance/ProductSummaryCards";
import PerformanceScoreChart from "../components/ProductPerformance/PerformanceScoreChart";
import GradeDistributionChart from "../components/ProductPerformance/GradeDistributionChart";
import TrendDistributionChart from "../components/ProductPerformance/TrendDistributionChart";
import MovingProductsChart from "../components/ProductPerformance/MovingProductsChart";
import TopProductsTable from "../components/ProductPerformance/TopProductsTable";
import ProductRecommendations from "../components/ProductPerformance/ProductRecommendations";
import ProductPerformanceTable from "../components/ProductPerformance/ProductPerformanceTable";

export default function ProductPerformancePage() {

    const {

        data,

        loading,

        error,

        params,

        refresh,

        setCategory,

        setGrade,

        setMoving,

        setTrend

    } = useProductPerformance();

    if (loading && !data) {

        return (

            <AdminLayout title="Product Performance">

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

            <AdminLayout title="Product Performance">

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

        <AdminLayout title="Product Performance">

            <Container
                maxWidth="xl"
                sx={{
                    py: 4
                }}
            >
                

                <DashboardHeader

                    title="Product Performance"

                    subtitle="AI powered product intelligence"

                    badgeLabel="Products"

                    badgeValue={String(data.count)}

                    generatedAt={new Date().toISOString()}

                    loading={loading}

                    onRefresh={() => refresh(params)}

                />

                <DashboardFilters

                    loading={loading}

                    onRefresh={() => refresh(params)}

                    category={params?.category}

                    grade={params?.grade}

                    moving={params?.moving}

                    trend={params?.trend}

                    onCategoryChange={setCategory}

                    onGradeChange={setGrade}

                    onMovingChange={setMoving}

                    onTrendChange={setTrend}

                />

                <ProductHero

                    totalProducts={data.count}

                    summary={data.summary}

                />

                <ProductSummaryCards

                    summary={data.summary} products={[]}
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

                        <PerformanceScoreChart

                            products={data.data}

                        />

                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            lg: 6
                        }}
                    >

                        <GradeDistributionChart

                            products={data.data}

                        />

                    </Grid>

                </Grid>

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

                        <TrendDistributionChart

                            products={data.data}

                        />

                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            lg: 6
                        }}
                    >

                        <MovingProductsChart

                            products={data.data}

                        />

                    </Grid>

                </Grid>

                <TopProductsTable

                    products={data.data}

                />

                <ProductRecommendations

                    products={data.data}

                />

                <ProductPerformanceTable

                    products={data.data}

                    loading={loading}

                />

            </Container>

        </AdminLayout>

    );

}
