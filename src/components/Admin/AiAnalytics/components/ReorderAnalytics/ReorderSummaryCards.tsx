import { Grid } from "@mui/material";

import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";

import MetricCard from "../common/MetricCard";

import {

    ReorderSummary

} from "../../../../../types/ai/reorder";

interface Props {

    summary: ReorderSummary;

}

export default function ReorderSummaryCards({

    summary

}: Props) {

    const total =

        summary.critical +

        summary.high +

        summary.medium +

        summary.low +

        summary.none;

    const actionRequired =

        summary.critical +

        summary.high +

        summary.medium;

    const coverage =

        total === 0

            ? 0

            : (

                (summary.none + summary.low)

                / total

            ) * 100;

    const actionPercent =

        total === 0

            ? 0

            : (

                actionRequired

                / total

            ) * 100;

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

                    title="Medium"

                    value={summary.medium}

                    subtitle="Monitor"

                    icon={

                        <PriorityHighRoundedIcon />

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

                    title="No Reorder"

                    value={summary.none}

                    subtitle="Inventory Healthy"

                    icon={

                        <CheckCircleRoundedIcon />

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

                    title="Recommended Qty"

                    value={summary.totalRecommendedQty}

                    subtitle="Purchase Quantity"

                    icon={

                        <ShoppingCartRoundedIcon />

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

                    title="Urgent Orders"

                    value={

                        summary.critical +

                        summary.high

                    }

                    subtitle="Critical + High"

                    icon={

                        <LocalShippingRoundedIcon />

                    }

                    color="#DC2626"

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

                    title="Coverage"

                    value={`${coverage.toFixed(1)}%`}

                    subtitle="Stock Coverage"

                    icon={

                        <InventoryRoundedIcon />

                    }

                    color="#7C3AED"

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

                    title="Action Required"

                    value={`${actionPercent.toFixed(1)}%`}

                    subtitle="Needs Review"

                    icon={

                        <AnalyticsRoundedIcon />

                    }

                    color="#F59E0B"

                />

            </Grid>

        </Grid>

    );

}