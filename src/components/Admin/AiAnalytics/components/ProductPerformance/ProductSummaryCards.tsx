import { Grid } from "@mui/material";

import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import HourglassBottomRoundedIcon from "@mui/icons-material/HourglassBottomRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

import MetricCard from "../common/MetricCard";

import {

    ProductPerformance,
    ProductPerformanceSummary

} from "../../../../../types/ai/product";

interface Props {

    summary: ProductPerformanceSummary;

    products: ProductPerformance[];

}

export default function ProductSummaryCards({

    summary,

    products

}: Props) {

    const fastMoving =

        products.filter(

            product => product.fastMoving.isFastMoving

        ).length;

    const slowMoving =

        products.filter(

            product => product.slowMoving.isSlowMoving

        ).length;

    const deadStock =

        products.filter(

            product => product.deadStock.isDeadStock

        ).length;

    const revenue =

        products.reduce(

            (sum, product) =>

                sum + product.revenue,

            0

        );

    const profit =

        products.reduce(

            (sum, product) =>

                sum + product.estimatedProfit,

            0

        );

    const averageSalesScore =

        products.length === 0

            ? 0

            :

            products.reduce(

                (sum, product) =>

                    sum + product.salesScore,

                0

            ) / products.length;

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

                    title="Fast Moving"

                    value={fastMoving}

                    subtitle="High demand"

                    icon={<LocalFireDepartmentRoundedIcon />}

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

                    title="Slow Moving"

                    value={slowMoving}

                    subtitle="Needs attention"

                    icon={<HourglassBottomRoundedIcon />}

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

                    title="Dead Stock"

                    value={deadStock}

                    subtitle="No recent movement"

                    icon={<InventoryRoundedIcon />}

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

                    title="Revenue"

                    value={`₹${revenue.toLocaleString()}`}

                    subtitle="Generated revenue"

                    icon={<CurrencyRupeeRoundedIcon />}

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

                    title="Profit"

                    value={`₹${profit.toLocaleString()}`}

                    subtitle="Estimated profit"

                    icon={<PaymentsRoundedIcon />}

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

                    title="Sales Score"

                    value={averageSalesScore.toFixed(1)}

                    subtitle="Average score"

                    icon={<InsightsRoundedIcon />}

                    color="#0F766E"

                />

            </Grid>

        </Grid>

    );

}