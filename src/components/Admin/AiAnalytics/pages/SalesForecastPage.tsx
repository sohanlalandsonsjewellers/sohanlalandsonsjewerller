import {
    Alert,
    Box,
    CircularProgress,
    Container,
    Grid
} from "@mui/material";

import AdminLayout from "../../AdminLayout";

import useSalesForecast from "../../../../hooks/useSalesForecast";

import DashboardHeader from "../components/common/DashboardHeader";
import DashboardFilters from "../components/common/DashboardFilters";

import SalesForecastHero from "../components/SalesForecast/SalesForecastHero";
import SalesForecastSummaryCards from "../components/SalesForecast/SalesForecastSummaryCards";
import RevenueForecastChart from "../components/SalesForecast/RevenueForecastChart";
import ForecastStatistics from "../components/SalesForecast/ForecastStatistics";
import ModelInfoCard from "../components/SalesForecast/ModelInfoCard";
import ForecastTable from "../components/SalesForecast/ForecastTable";

export default function SalesForecastPage() {

    const {

        forecast,

        history,

        summary,

        loading,

        error,

        refresh

    } = useSalesForecast(30);

    if (loading && !forecast) {

        return (

            <AdminLayout title="Sales Forecast">

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

            <AdminLayout title="Sales Forecast">

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

        !history ||

        !summary

    ) {

        return null;

    }

    return (

        <AdminLayout title="Sales Forecast">

            <Container

                maxWidth="xl"

                sx={{

                    py: 4

                }}

            >

                <DashboardHeader

                    title="Sales Forecast Analytics"

                    subtitle="AI powered revenue prediction"

                    badgeLabel="Forecast Days"

                    badgeValue={String(forecast.days)}

                    generatedAt={

                        new Date()

                            .toISOString()

                    }

                    loading={loading}

                    onRefresh={refresh}

                />

                <DashboardFilters

                    loading={loading}

                    onRefresh={refresh}

                />

                <SalesForecastHero

                    forecast={forecast}

                    summary={summary}

                />

                <SalesForecastSummaryCards

                    forecast={forecast}

                    summary={summary}

                    history={history}

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

                        <RevenueForecastChart

                            forecast={forecast.forecast}

                        />

                    </Grid>

                    <Grid

                        size={{

                            xs:12,

                            lg:4

                        }}

                    >

                        <ModelInfoCard

                            summary={summary}

                            forecast={forecast}

                        />

                    </Grid>

                </Grid>

                <ForecastStatistics

                    forecast={forecast}

                    history={history}

                    summary={summary}

                />

                <ForecastTable

                    forecast={forecast.forecast}

                    loading={loading}

                />

            </Container>

        </AdminLayout>

    );

}