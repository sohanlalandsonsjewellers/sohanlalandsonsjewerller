import { Grid } from "@mui/material";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

import MetricCard from "../common/MetricCard";

import {
    DemandForecastResponse,
    DemandInsightsResponse
} from "../../../../../types/ai/demandForecast";

interface Props {

    forecast: DemandForecastResponse;

    insights: DemandInsightsResponse;

}

export default function DemandForecastHero({

    forecast,

    insights

}: Props) {

    const totalDemand = insights.data.reduce(

        (sum, item) => sum + item.predictedDemand,

        0

    );

    const averageDemandScore =

        insights.data.length === 0

            ? 0

            : insights.data.reduce(

                (sum, item) => sum + item.demandScore,

                0

            ) / insights.data.length;

    const highPriority = insights.data.filter(

        item =>

            item.priority === "Critical" ||

            item.priority === "High"

    ).length;

    return (

        <Grid container spacing={3} sx={{ mb: 4 }}>

            <Grid size={{ xs:12, sm:6, xl:2.4 }}>

                <MetricCard

                    title="Products"

                    value={forecast.count}

                    subtitle="Analyzed"

                    icon={<Inventory2RoundedIcon />}

                    color="#4A0E17"

                />

            </Grid>

            <Grid size={{ xs:12, sm:6, xl:2.4 }}>

                <MetricCard

                    title="Forecast Days"

                    value={forecast.days}

                    subtitle="Prediction Window"

                    icon={<CalendarMonthRoundedIcon />}

                    color="#2563EB"

                />

            </Grid>

            <Grid size={{ xs:12, sm:6, xl:2.4 }}>

                <MetricCard

                    title="Predicted Demand"

                    value={Math.round(totalDemand)}

                    subtitle="Units"

                    icon={<TrendingUpRoundedIcon />}

                    color="#16A34A"

                />

            </Grid>

            <Grid size={{ xs:12, sm:6, xl:2.4 }}>

                <MetricCard

                    title="Demand Score"

                    value={averageDemandScore.toFixed(1)}

                    subtitle="Average"

                    icon={<AutoGraphRoundedIcon />}

                    color="#7C3AED"

                />

            </Grid>

            <Grid size={{ xs:12, sm:6, xl:2.4 }}>

                <MetricCard

                    title="High Priority"

                    value={highPriority}

                    subtitle="Need Attention"

                    icon={<WarningAmberRoundedIcon />}

                    color="#DC2626"

                />

            </Grid>

        </Grid>

    );

}