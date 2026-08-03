import { Grid } from "@mui/material";

import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";

import MetricCard from "../common/MetricCard";

import {

    PriceDashboard

} from "../../../../../types/ai/price";

interface Props {

    dashboard: PriceDashboard;

}

export default function PriceSummaryCards({

    dashboard

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

                    lg:4,

                    xl:2

                }}

            >

                <MetricCard

                    title="Inventory Risk"

                    value={dashboard.inventoryRiskProducts}

                    subtitle="Products at risk"

                    icon={<WarningAmberRoundedIcon />}

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

                    title="Underpriced"

                    value={

                        dashboard.pricingHealth.underpriced

                    }

                    subtitle="Increase opportunity"

                    icon={<TrendingDownRoundedIcon />}

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

                    title="Fair Price"

                    value={

                        dashboard.pricingHealth.fairPrice

                    }

                    subtitle="Healthy pricing"

                    icon={<CheckCircleRoundedIcon />}

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

                    title="Needs Review"

                    value={

                        dashboard.pricingHealth.needsReview

                    }

                    subtitle="AI review required"

                    icon={<RuleRoundedIcon />}

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

                    title="High Priority"

                    value={

                        dashboard.prioritySummary.high +

                        dashboard.prioritySummary.critical

                    }

                    subtitle="Immediate actions"

                    icon={<PriorityHighRoundedIcon />}

                    color="#7F1D1D"

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

                    title="Avg Discount"

                    value={`${dashboard.averageDiscountPercent.toFixed(1)}%`}

                    subtitle="Suggested discount"

                    icon={<PercentRoundedIcon />}

                    color="#9333EA"

                />

            </Grid>

        </Grid>

    );

}