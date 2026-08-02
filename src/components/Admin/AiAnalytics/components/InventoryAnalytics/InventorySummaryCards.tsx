import { Grid } from "@mui/material";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";

import MetricCard from "../common/MetricCard";

interface Props {

    healthyStock: number;

    lowStock: number;

    criticalStock: number;

    outOfStock: number;

    overStock: number;

    averageStockoutDays: number;

}

export default function InventorySummaryCards({

    healthyStock,

    lowStock,

    criticalStock,

    outOfStock,

    overStock,

    averageStockoutDays

}: Props) {

    return (

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
                    sm: 6,
                    lg: 4,
                    xl: 2
                }}
            >

                <MetricCard

                    title="Healthy Stock"

                    value={healthyStock}

                    subtitle="Inventory in healthy range"

                    icon={<FavoriteRoundedIcon />}

                    color="#16A34A"

                />

            </Grid>

            <Grid
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    xl: 2
                }}
            >

                <MetricCard

                    title="Low Stock"

                    value={lowStock}

                    subtitle="Need replenishment"

                    icon={<WarningAmberRoundedIcon />}

                    color="#F59E0B"

                />

            </Grid>

            <Grid
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    xl: 2
                }}
            >

                <MetricCard

                    title="Critical Stock"

                    value={criticalStock}

                    subtitle="Immediate action required"

                    icon={<ErrorRoundedIcon />}

                    color="#DC2626"

                />

            </Grid>

            <Grid
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    xl: 2
                }}
            >

                <MetricCard

                    title="Out Of Stock"

                    value={outOfStock}

                    subtitle="Currently unavailable"

                    icon={<Inventory2RoundedIcon />}

                    color="#7F1D1D"

                />

            </Grid>

            <Grid
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    xl: 2
                }}
            >

                <MetricCard

                    title="Overstock"

                    value={overStock}

                    subtitle="Excess inventory"

                    icon={<TrendingUpRoundedIcon />}

                    color="#2563EB"

                />

            </Grid>

            <Grid
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    xl: 2
                }}
            >

                <MetricCard

                    title="Avg Stockout"

                    value={`${averageStockoutDays.toFixed(1)} Days`}

                    subtitle="Average stockout duration"

                    icon={<ScheduleRoundedIcon />}

                    color="#7C3AED"

                />

            </Grid>

        </Grid>

    );

}