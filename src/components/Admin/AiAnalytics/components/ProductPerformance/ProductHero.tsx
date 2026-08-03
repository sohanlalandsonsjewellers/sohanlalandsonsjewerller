import {
    Grid
} from "@mui/material";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";

import MetricCard from "../common/MetricCard";

import {
    ProductPerformanceSummary
} from "../../../../../types/ai/product";

interface Props {

    totalProducts: number;

    summary: ProductPerformanceSummary;

}

export default function ProductHero({

    totalProducts,

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

                    title="Products"

                    value={totalProducts}

                    subtitle="Tracked Products"

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

                    title="Excellent"

                    value={summary.excellent}

                    subtitle="Grade A"

                    icon={<EmojiEventsRoundedIcon />}

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

                    title="Good"

                    value={summary.good}

                    subtitle="Grade B"

                    icon={<ThumbUpRoundedIcon />}

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

                    title="Average"

                    value={summary.average}

                    subtitle="Grade C"

                    icon={<AnalyticsRoundedIcon />}

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

                    title="Poor"

                    value={summary.poor}

                    subtitle="Grade D"

                    icon={<TrendingDownRoundedIcon />}

                    color="#DC2626"

                />

            </Grid>

        </Grid>

    );

}