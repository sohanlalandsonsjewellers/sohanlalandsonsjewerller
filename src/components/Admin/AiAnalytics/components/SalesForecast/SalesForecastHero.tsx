import { Grid } from "@mui/material";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";

import MetricCard from "../common/MetricCard";

import {
    SalesForecastResponse,
    SalesSummaryResponse
} from "../../../../../types/ai/salesForecast";

interface Props {

    forecast: SalesForecastResponse;

    summary: SalesSummaryResponse;

}

export default function SalesForecastHero({

    forecast,

    summary

}: Props) {

    return (

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
                    sm:6,
                    xl:2.4
                }}
            >

                <MetricCard

                    title="Forecast Days"

                    value={forecast.days}

                    subtitle="Prediction Window"

                    icon={
                        <CalendarMonthRoundedIcon />
                    }

                    color="#4A0E17"

                />

            </Grid>

            <Grid
                size={{
                    xs:12,
                    sm:6,
                    xl:2.4
                }}
            >

                <MetricCard

                    title="History"

                    value={forecast.historyLength}

                    subtitle="Training Days"

                    icon={
                        <HistoryRoundedIcon />
                    }

                    color="#2563EB"

                />

            </Grid>

            <Grid
                size={{
                    xs:12,
                    sm:6,
                    xl:2.4
                }}
            >

                <MetricCard

                    title="Forecast Revenue"

                    value={`₹${summary.predictedTotalRevenue.toLocaleString()}`}

                    subtitle="Predicted Total"

                    icon={
                        <CurrencyRupeeRoundedIcon />
                    }

                    color="#16A34A"

                />

            </Grid>

            <Grid
                size={{
                    xs:12,
                    sm:6,
                    xl:2.4
                }}
            >

                <MetricCard

                    title="Daily Revenue"

                    value={`₹${summary.predictedAverageDailyRevenue.toLocaleString()}`}

                    subtitle="Average / Day"

                    icon={
                        <AutoGraphRoundedIcon />
                    }

                    color="#F59E0B"

                />

            </Grid>

            <Grid
                size={{
                    xs:12,
                    sm:6,
                    xl:2.4
                }}
            >

                <MetricCard

                    title="Forecast Model"

                    value={summary.forecastModel}

                    subtitle="AI Prediction"

                    icon={
                        <MemoryRoundedIcon />
                    }

                    color="#7C3AED"

                />

            </Grid>

        </Grid>

    );

}