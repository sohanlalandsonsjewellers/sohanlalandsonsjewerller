import { Grid } from "@mui/material";

import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";

import MetricCard from "../common/MetricCard";

import {
    DemandForecastResponse,
    DemandInsightsResponse
} from "../../../../../types/ai/demandForecast";

interface Props {

    forecast: DemandForecastResponse;

    insights: DemandInsightsResponse;

}

export default function DemandStatistics({

    insights

}: Props) {

    const averageCoverage =

        insights.data.length === 0

            ? 0

            : insights.data.reduce(

                (sum, item) =>

                    sum + item.stockCoveragePercent,

                0

            ) / insights.data.length;

    const averageStockLeft =

        insights.data.length === 0

            ? 0

            : insights.data.reduce(

                (sum, item) =>

                    sum + (item.daysOfStockLeft ?? 0),

                0

            ) / insights.data.length;

    const highRisk = insights.data.filter(

        item =>

            item.stockRisk === "High"

    ).length;

    const critical = insights.data.filter(

        item =>

            item.priority === "Critical"

    ).length;

    return (

        <Grid container spacing={3} sx={{ mb:4 }}>

            <Grid size={{ xs:12, sm:6, xl:3 }}>

                <MetricCard

                    title="Stock Coverage"

                    value={`${averageCoverage.toFixed(1)}%`}

                    subtitle="Average"

                    icon={<InventoryRoundedIcon />}

                    color="#16A34A"

                />

            </Grid>

            <Grid size={{ xs:12, sm:6, xl:3 }}>

                <MetricCard

                    title="Days Of Stock"

                    value={averageStockLeft.toFixed(1)}

                    subtitle="Average Left"

                    icon={<AssessmentRoundedIcon />}

                    color="#2563EB"

                />

            </Grid>

            <Grid size={{ xs:12, sm:6, xl:3 }}>

                <MetricCard

                    title="High Risk"

                    value={highRisk}

                    subtitle="Inventory Risk"

                    icon={<TrendingDownRoundedIcon />}

                    color="#DC2626"

                />

            </Grid>

            <Grid size={{ xs:12, sm:6, xl:3 }}>

                <MetricCard

                    title="Critical Items"

                    value={critical}

                    subtitle="Immediate Action"

                    icon={<SpeedRoundedIcon />}

                    color="#F59E0B"

                />

            </Grid>

        </Grid>

    );

}