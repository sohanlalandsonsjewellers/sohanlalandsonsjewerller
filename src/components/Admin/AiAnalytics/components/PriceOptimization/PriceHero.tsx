import { Grid } from "@mui/material";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

import MetricCard from "../common/MetricCard";

import {

    PriceDashboard

} from "../../../../../types/ai/price";

interface Props {

    dashboard: PriceDashboard;

}

export default function PriceHero({

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

                    xl:2.4

                }}

            >

                <MetricCard

                    title="Products"

                    value={dashboard.totalProducts}

                    subtitle="Analyzed Products"

                    icon={<Inventory2RoundedIcon />}

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

                    title="Action Required"

                    value={dashboard.actionRequired}

                    subtitle="Needs Pricing Review"

                    icon={<AutoAwesomeRoundedIcon />}

                    color="#DC2626"

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

                    title="Current Price"

                    value={`₹${dashboard.averageCurrentPrice.toFixed(2)}`}

                    subtitle="Average Selling Price"

                    icon={<CurrencyRupeeRoundedIcon />}

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

                    title="Suggested Price"

                    value={`₹${dashboard.averageSuggestedPrice.toFixed(2)}`}

                    subtitle="AI Suggested Average"

                    icon={<TrendingUpRoundedIcon />}

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

                    title="Confidence"

                    value={`${dashboard.averageConfidence.toFixed(0)}%`}

                    subtitle="AI Confidence"

                    icon={<VerifiedRoundedIcon />}

                    color="#7C3AED"

                />

            </Grid>

        </Grid>

    );

}