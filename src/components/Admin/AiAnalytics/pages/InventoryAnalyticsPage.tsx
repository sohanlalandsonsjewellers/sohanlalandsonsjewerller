import {
    Alert,
    Box,
    CircularProgress,
    Container
} from "@mui/material";

import AdminLayout from "../../AdminLayout";

import DashboardHeader from "../components/common/DashboardHeader";
import DashboardFilters from "../components/common/DashboardFilters";

import useInventoryAnalytics from "../../../../hooks/useInventoryAnalytics";

import InventoryHero from "../components/InventoryAnalytics/InventoryHero";
import InventorySummaryCards from "../components/InventoryAnalytics/InventorySummaryCards";
import InventoryHealthChart from "../components/InventoryAnalytics/InventoryHealthChart";
import CategoryDistribution from "../components/InventoryAnalytics/CategoryDistribution";
import LowStockTable from "../components/InventoryAnalytics/LowStockTable";
import OverstockTable from "../components/InventoryAnalytics/OverstockTable";
import DeadStockTable from "../components/InventoryAnalytics/DeadStockTable";
import ReorderSuggestions from "../components/InventoryAnalytics/ReorderSuggestions";
import InventoryRecommendations from "../components/InventoryAnalytics/InventoryRecommendations";
import InventoryTable from "../components/InventoryAnalytics/InventoryTable";

export default function InventoryAnalyticsPage() {

    const {

        data,

        loading,

        error,

        refresh

    } = useInventoryAnalytics();

    if (loading && !data) {

        return (

            <AdminLayout title="Inventory Analytics">

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

            <AdminLayout title="Inventory Analytics">

                <Container
                    maxWidth="xl"
                    sx={{
                        py: 4
                    }}
                >

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

        <AdminLayout title="Inventory Analytics">

            <Container
                maxWidth="xl"
                sx={{
                    py: 4
                }}
            >

                <DashboardHeader

                    title="Inventory Analytics"

                    subtitle="Real-time inventory intelligence powered by AI"

                    badgeLabel="Products"

                    badgeValue={String(data.summary.totalProducts)}

                    loading={loading}

                    generatedAt={new Date().toISOString()}

                    onRefresh={refresh}

                />

                <DashboardFilters

                    loading={loading}

                    onRefresh={refresh}

                />

                <InventoryHero

                    totalProducts={
                        data.summary.totalProducts
                    }

                    totalStock={
                        data.summary.totalStock
                    }

                    inventoryValue={
                        data.summary.inventoryValue
                    }

                    averageInventoryTurnover={
                        data.summary.averageInventoryTurnover
                    }

                />

                <InventorySummaryCards

                    healthyStock={
                        data.summary.healthyStock
                    }

                    lowStock={
                        data.summary.lowStock
                    }

                    criticalStock={
                        data.summary.criticalStock
                    }

                    outOfStock={
                        data.summary.outOfStock
                    }

                    overStock={
                        data.summary.overStock
                    }

                    averageStockoutDays={
                        data.summary.averageStockoutDays
                    }

                />

                <Box

                    sx={{

                        mt: 4,

                        display: "grid",

                        gridTemplateColumns: {

                            xs: "1fr",

                            lg: "2fr 1fr"

                        },

                        gap: 3

                    }}

                >

                    <InventoryHealthChart

                        products={

                            data.data

                        }

                    />

                    <CategoryDistribution

                        products={

                            data.data

                        }

                    />

                </Box>

                <Box

                    sx={{

                        mt: 4,

                        display: "grid",

                        gridTemplateColumns: {

                            xs: "1fr",

                            xl: "1fr 1fr"

                        },

                        gap: 3

                    }}

                >

                    <LowStockTable

                        products={

                            data.data

                        }

                    />

                    <OverstockTable

                        products={

                            data.data

                        }

                    />

                </Box>

                <Box

                    sx={{

                        mt: 4,

                        display: "grid",

                        gridTemplateColumns: {

                            xs: "1fr",

                            xl: "1fr 1fr"

                        },

                        gap: 3

                    }}

                >

                    <DeadStockTable

                        products={

                            data.data

                        }

                    />

                    <ReorderSuggestions

                        products={

                            data.data

                        }

                    />

                </Box>

                <Box

                    sx={{

                        mt: 4

                    }}

                >

                    <InventoryRecommendations

                        products={

                            data.data

                        }

                    />

                </Box>

                <Box

                    sx={{

                        mt: 4

                    }}

                >

                    <InventoryTable

                        products={

                            data.data

                        }

                        loading={

                            loading

                        }

                    />

                </Box>

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

                            md: "center"

                        },

                        flexDirection: {

                            xs: "column",

                            md: "row"

                        },

                        gap: 1

                    }}

                >

                    <Alert

                        severity="info"

                        sx={{

                            width: {

                                xs: "100%",

                                md: "auto"

                            }

                        }}

                    >

                        Inventory analytics is generated using stock,

                        turnover, stock aging and AI recommendation models.

                    </Alert>

                </Box>

            </Container>

        </AdminLayout>

    );

}