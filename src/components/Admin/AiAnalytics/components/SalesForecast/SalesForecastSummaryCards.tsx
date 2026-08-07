import { Grid } from "@mui/material";

import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

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

export default function SalesForecastSummaryCards({

    forecast,

    history,

    summary

}: Props) {

    const latestPrediction =

        forecast.forecast.length

            ? forecast.forecast[
                forecast.forecast.length - 1
              ].predictedRevenue

            : 0;

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

                    lg:4,

                    xl:2

                }}

            >

                <MetricCard

                    title="Forecast Revenue"

                    value={`₹${summary.predictedTotalRevenue.toLocaleString()}`}

                    subtitle="Total Prediction"

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

                    lg:4,

                    xl:2

                }}

            >

                <MetricCard

                    title="Daily Average"

                    value={`₹${summary.predictedAverageDailyRevenue.toLocaleString()}`}

                    subtitle="Per Day"

                    icon={

                        <TrendingUpRoundedIcon />

                    }

                    color="#2563EB"

                />

            </Grid>

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    lg:4,

                    xl:2

                }}

            >

                <MetricCard

                    title="Forecast Model"

                    value={summary.forecastModel}

                    subtitle="AI Model"

                    icon={

                        <MemoryRoundedIcon />

                    }

                    color="#9333EA"

                />

            </Grid>

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    lg:4,

                    xl:2

                }}

            >

                <MetricCard

                    title="Latest Forecast"

                    value={`₹${latestPrediction.toLocaleString()}`}

                    subtitle="Last Predicted Day"

                    icon={

                        <TimelineRoundedIcon />

                    }

                    color="#F59E0B"

                />

            </Grid>

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    lg:4,

                    xl:2

                }}

            >

                <MetricCard

                    title="History Days"

                    value={history.historyLength}

                    subtitle="Training Data"

                    icon={

                        <HistoryRoundedIcon />

                    }

                    color="#4A0E17"

                />

            </Grid>

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    lg:4,

                    xl:2

                }}

            >

                <MetricCard

                    title="Forecast Days"

                    value={forecast.days}

                    subtitle="Prediction Period"

                    icon={

                        <EventRoundedIcon />

                    }

                    color="#DC2626"

                />

            </Grid>

        </Grid>

    );

}