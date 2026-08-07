import {
    Grid
} from "@mui/material";

import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";

import MetricCard from "../common/MetricCard";

import {
    SalesForecastResponse,
    SalesHistoryResponse,
    SalesSummaryResponse
} from "../../../../../types/ai/salesForecast";

interface Props {

    forecast: SalesForecastResponse;

    history: SalesHistoryResponse;

    summary: SalesSummaryResponse;

}

export default function ForecastStatistics({

    forecast,

    history,

    summary

}: Props) {

    const values = forecast.forecast.map(
        item => item.predictedRevenue
    );

    const max = values.length ? Math.max(...values) : 0;

    const min = values.length ? Math.min(...values) : 0;

    const average =
        values.length
            ? values.reduce(
                (a,b)=>a+b,
                0
            ) / values.length
            : 0;

    return (

        <Grid

            container

            spacing={3}

            sx={{

                mb:4

            }}

        >

            <Grid size={{xs:12,sm:6,xl:3}}>

                <MetricCard

                    title="Highest Forecast"

                    value={`₹${max.toLocaleString()}`}

                    subtitle="Maximum"

                    icon={<TrendingUpRoundedIcon />}

                    color="#16A34A"

                />

            </Grid>

            <Grid size={{xs:12,sm:6,xl:3}}>

                <MetricCard

                    title="Lowest Forecast"

                    value={`₹${min.toLocaleString()}`}

                    subtitle="Minimum"

                    icon={<TimelineRoundedIcon />}

                    color="#DC2626"

                />

            </Grid>

            <Grid size={{xs:12,sm:6,xl:3}}>

                <MetricCard

                    title="Average"

                    value={`₹${average.toFixed(2)}`}

                    subtitle="Forecast Average"

                    icon={<ShowChartRoundedIcon />}

                    color="#2563EB"

                />

            </Grid>

            <Grid size={{xs:12,sm:6,xl:3}}>

                <MetricCard

                    title="History Points"

                    value={history.historyLength}

                    subtitle="Training Samples"

                    icon={<QueryStatsRoundedIcon />}

                    color="#7C3AED"

                />

            </Grid>

        </Grid>

    );

}