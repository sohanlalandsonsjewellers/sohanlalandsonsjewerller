import { Grid } from "@mui/material";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";

import MetricCard from "../common/MetricCard";

import {

    ReorderSummary

} from "../../../../../types/ai/reorder";

interface Props {

    summary: ReorderSummary;

}

export default function ReorderHero({

    summary

}: Props) {

    const totalProducts =

        summary.critical +

        summary.high +

        summary.medium +

        summary.low +

        summary.none;

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

                    subtitle="Analyzed"

                    icon={

                        <Inventory2RoundedIcon />

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

                    title="Critical"

                    value={summary.critical}

                    subtitle="Immediate reorder"

                    icon={

                        <ErrorRoundedIcon />

                    }

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

                    title="High Priority"

                    value={summary.high}

                    subtitle="Reorder soon"

                    icon={

                        <WarningAmberRoundedIcon />

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

                    title="Low Priority"

                    value={summary.low}

                    subtitle="Monitor"

                    icon={

                        <InventoryRoundedIcon />

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

                    title="Recommended Qty"

                    value={summary.totalRecommendedQty}

                    subtitle="Units to purchase"

                    icon={

                        <ShoppingCartRoundedIcon />

                    }

                    color="#2563EB"

                />

            </Grid>

        </Grid>

    );

}