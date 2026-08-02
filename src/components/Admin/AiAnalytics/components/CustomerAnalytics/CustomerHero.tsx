import Grid from "@mui/material/Grid";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import MetricCard from "../../../../../components/Admin/AiAnalytics/components/common/MetricCard";

interface Props {

    totalCustomers: number;

    totalRevenue: number;

    repeatRate: number;

    retentionRate: number;

}

export default function CustomerHero({

    totalCustomers,

    totalRevenue,

    repeatRate,

    retentionRate

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

                    md: 6,

                    lg: 3

                }}

            >

                <MetricCard

                    title="Total Customers"

                    value={

                        totalCustomers.toLocaleString()

                    }

                    subtitle="Registered Customers"

                    icon={

                        <PeopleAltRoundedIcon />

                    }

                    color="#4A0E17"

                />

            </Grid>

            <Grid

                size={{

                    xs: 12,

                    md: 6,

                    lg: 3

                }}

            >

                <MetricCard

                    title="Revenue"

                    value={`₹${

                        totalRevenue.toLocaleString()

                    }`}

                    subtitle="Customer Revenue"

                    icon={

                        <CurrencyRupeeRoundedIcon />

                    }

                    color="#0F766E"

                />

            </Grid>

            <Grid

                size={{

                    xs: 12,

                    md: 6,

                    lg: 3

                }}

            >

                <MetricCard

                    title="Repeat Rate"

                    value={`${

                        repeatRate

                    }%`}

                    subtitle="Repeat Purchases"

                    icon={

                        <AutorenewRoundedIcon />

                    }

                    color="#D97706"

                />

            </Grid>

            <Grid

                size={{

                    xs: 12,

                    md: 6,

                    lg: 3

                }}

            >

                <MetricCard

                    title="Retention"

                    value={`${

                        retentionRate

                    }%`}

                    subtitle="Customer Loyalty"

                    icon={

                        <FavoriteRoundedIcon />

                    }

                    color="#7C3AED"

                />

            </Grid>

        </Grid>

    );

}
