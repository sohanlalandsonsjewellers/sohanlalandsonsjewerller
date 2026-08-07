import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Grid
} from "@mui/material";

import AdminLayout from "../../AdminLayout";

import useDemandForecast from "../../../../hooks/useDemandForecast";

import DashboardHeader from "../components/common/DashboardHeader";
import DashboardFilters from "../components/common/DashboardFilters";

import DemandForecastHero from "../components/DemandForecast/DemandForecastHero";
import DemandStatistics from "../components/DemandForecast/DemandStatistics";
import DemandForecastChart from "../components/DemandForecast/DemandForecastChart";
import DemandHistoryChart from "../components/DemandForecast/DemandHistoryChart";
import DemandPriorityChart from "../components/DemandForecast/DemandPriorityChart";
import StockCoverageChart from "../components/DemandForecast/StockCoverageChart";
import DemandRecommendationCards from "../components/DemandForecast/DemandRecommendationCards";
import DemandForecastTable from "../components/DemandForecast/DemandForecastTable";

export default function DemandForecastPage() {

    const {

        forecast,

        insights,

        loading,

        error,

        refresh

    } = useDemandForecast(30);

    if (loading && !forecast) {

        return (

            <AdminLayout title="Demand Forecast">

                <Box

                    sx={{

                        height:"70vh",

                        display:"flex",

                        justifyContent:"center",

                        alignItems:"center"

                    }}

                >

                    <CircularProgress />

                </Box>

            </AdminLayout>

        );

    }

    if (error) {

        return (

            <AdminLayout title="Demand Forecast">

                <Container maxWidth="xl">

                    <Alert severity="error">

                        {error}

                    </Alert>

                </Container>

            </AdminLayout>

        );

    }

    if (

        !forecast ||

        !insights

    ) {

        return null;

    }

    return (

        <AdminLayout title="Demand Forecast">

            <Container

                maxWidth="xl"

                sx={{

                    py:4

                }}

            >

                <DashboardHeader

                    title="Demand Forecast Analytics"

                    subtitle="AI powered product demand prediction"

                    badgeLabel="Products"

                    badgeValue={String(forecast.count)}

                    generatedAt={new Date().toISOString()}

                    loading={loading}

                    onRefresh={refresh}

                />

                <DashboardFilters

                    loading={loading}

                    onRefresh={refresh}

                />

                <DemandForecastHero

                    forecast={forecast}

                    insights={insights}

                />

                <DemandStatistics

                    forecast={forecast}

                    insights={insights}

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

                            lg:8

                        }}

                    >

                        <DemandForecastChart

                            products={forecast.data}

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs:12,

                            lg:4

                        }}

                    >

                        <DemandPriorityChart

                            insights={insights.data}

                        />

                    </Grid>

                </Grid>

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

                        <DemandHistoryChart

                            products={forecast.data}

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs:12,

                            lg:6

                        }}

                    >

                        <StockCoverageChart

                            insights={insights.data}

                        />

                    </Grid>

                </Grid>

                <DemandRecommendationCards

                    insights={insights.data}

                />

                <DemandForecastTable

                    insights={insights.data}

                    loading={loading}

                />

            </Container>

        </AdminLayout>

    );

}