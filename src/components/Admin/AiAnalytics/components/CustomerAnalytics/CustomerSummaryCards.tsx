import Grid from "@mui/material/Grid";

import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";

import MetricCard from "../../../../../components/Admin/AiAnalytics/components/common/MetricCard";

interface Props {

    vipCustomers: number;

    premiumCustomers: number;

    regularCustomers: number;

    newCustomers: number;

    repeatCustomers: number;

    activeCustomers: number;

    inactiveCustomers: number;

    averageLifetimeValue: number;

}

export default function CustomerSummaryCards({

    vipCustomers,

    premiumCustomers,

    regularCustomers,

    newCustomers,

    repeatCustomers,

    activeCustomers,

    inactiveCustomers,

    averageLifetimeValue

}: Props) {

    return (

        <Grid

            container

            spacing={3}

            sx={{

                mb: 4

            }}

        >

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="VIP Customers"

                    value={vipCustomers}

                    subtitle="Highest Value"

                    icon={<WorkspacePremiumRoundedIcon />}

                    color="#B45309"

                />

            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="Premium"

                    value={premiumCustomers}

                    subtitle="Premium Buyers"

                    icon={<DiamondRoundedIcon />}

                    color="#7C3AED"

                />

            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="Regular"

                    value={regularCustomers}

                    subtitle="Regular Customers"

                    icon={<PersonRoundedIcon />}

                    color="#2563EB"

                />

            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="New Customers"

                    value={newCustomers}

                    subtitle="Recently Joined"

                    icon={<PersonAddRoundedIcon />}

                    color="#0F766E"

                />

            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="Repeat Customers"

                    value={repeatCustomers}

                    subtitle="Returning Buyers"

                    icon={<RepeatRoundedIcon />}

                    color="#D97706"

                />

            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="Active"

                    value={activeCustomers}

                    subtitle="Active Buyers"

                    icon={<CheckCircleRoundedIcon />}

                    color="#16A34A"

                />

            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="Inactive"

                    value={inactiveCustomers}

                    subtitle="Needs Attention"

                    icon={<CancelRoundedIcon />}

                    color="#DC2626"

                />

            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>

                <MetricCard

                    title="Average LTV"

                    value={`₹${averageLifetimeValue.toLocaleString()}`}

                    subtitle="Lifetime Value"

                    icon={<CurrencyRupeeRoundedIcon />}

                    color="#0F766E"

                />

            </Grid>

        </Grid>

    );

}
