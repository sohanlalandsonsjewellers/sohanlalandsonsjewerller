import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Grid
} from "@mui/material";

import AdminLayout from "../../AdminLayout";

import usePriceOptimization from "../../../../hooks/usePriceOptimization";

import DashboardHeader from "../components/common/DashboardHeader";
import DashboardFilters from "../components/common/DashboardFilters";

import PriceHero from "../components/PriceOptimization/PriceHero";
import PriceSummaryCards from "../components/PriceOptimization/PriceSummaryCards";
import PricingHealthChart from "../components/PriceOptimization/PricingHealthChart";
import StrategyDistributionChart from "../components/PriceOptimization/StrategyDistributionChart";
import DemandStockChart from "../components/PriceOptimization/DemandStockChart";
import PriceRecommendations from "../components/PriceOptimization/PriceRecommendations";
import PriceOptimizationTable from "../components/PriceOptimization/PriceOptimizationTable";

export default function PriceOptimizationPage() {

    const {

        data,

        loading,

        error,

        refresh

    } = usePriceOptimization();

    if (loading && !data) {

        return (

            <AdminLayout title="Price Optimization">

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

            <AdminLayout title="Price Optimization">

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

        <AdminLayout title="Price Optimization">

            <Container

                maxWidth="xl"

                sx={{

                    py:4

                }}

            >

                <DashboardHeader

                    title="Price Optimization"

                    subtitle="AI Pricing Intelligence Dashboard"

                    badgeLabel="Products"

                    badgeValue={

                        String(

                            data.dashboard.totalProducts

                        )

                    }

                    generatedAt={

                        new Date().toISOString()

                    }

                    loading={loading}

                    onRefresh={refresh}

                />

                <DashboardFilters

                    loading={loading}

                    onRefresh={refresh}

                />

                <PriceHero

                    dashboard={

                        data.dashboard

                    }

                />

                <PriceSummaryCards

                    dashboard={

                        data.dashboard

                    }

                />

                <Grid

                    container

                    spacing={3}

                    sx={{

                        mb:4

                    }}

                >

                    <Grid

                        size={{

                            xs:12,

                            lg:6

                        }}

                    >

                        <PricingHealthChart

                            dashboard={

                                data.dashboard

                            }

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs:12,

                            lg:6

                        }}

                    >

                        <StrategyDistributionChart

                            dashboard={

                                data.dashboard

                            }

                        />

                    </Grid>

                </Grid>

                <DemandStockChart

                    dashboard={

                        data.dashboard

                    }

                />

                <PriceRecommendations

                    products={

                        data.products

                    }

                />

                <PriceOptimizationTable

                    products={

                        data.products

                    }

                    loading={

                        loading

                    }

                />

            </Container>

        </AdminLayout>

    );

}