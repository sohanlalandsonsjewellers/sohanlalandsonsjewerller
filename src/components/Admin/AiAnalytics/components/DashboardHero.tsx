import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";

import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

interface DashboardHeroProps {
    businessScore: {
        score: number;
        grade: string;
    };

    summary: {
        totalRevenue: number;
        totalOrders: number;
        totalProducts: number;
        totalCustomers: number;
        inventoryValue: number;
    };
}

const StatCard = ({
    title,
    value,
    icon,
    color,
}: {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
}) => (
    <Card
        elevation={0}
        sx={{
            height: "100%",
            borderRadius: 4,
            border: "1px solid #EFE7DB",
            transition: ".25s",
            "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 18px 35px rgba(0,0,0,.08)",
            },
        }}
    >
        <CardContent>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >

                <Box>

                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        {title}
                    </Typography>

                    <Typography
                        mt={1}
                        fontWeight={700}
                        variant="h5"
                    >
                        {value}
                    </Typography>

                </Box>

                <Avatar
                    sx={{
                        bgcolor: color,
                        width: 56,
                        height: 56,
                    }}
                >
                    {icon}
                </Avatar>

            </Stack>

        </CardContent>

    </Card>
);

export default function DashboardHero({
    businessScore,
    summary,
}: DashboardHeroProps) {

    return (

        <Grid
            container
            spacing={3}
            mb={4}
        >

            {/* BUSINESS SCORE */}
            <Grid
                 size={{ xs: 12, md: 4 }}
            >

                <Card
                    elevation={0}
                    sx={{
                        height: "100%",
                        borderRadius: 5,
                        background:
                            "linear-gradient(135deg,#4A0E17,#732232)",
                        color: "#fff",
                        overflow: "hidden",
                    }}
                >

                    <CardContent
                        sx={{
                            p: 4,
                        }}
                    >

                        <Stack
                            alignItems="center"
                            spacing={2}
                        >

                            <Avatar
                                sx={{
                                    bgcolor: "#B89B73",
                                    width: 72,
                                    height: 72,
                                }}
                            >

                                <WorkspacePremiumRoundedIcon
                                    sx={{
                                        fontSize: 40,
                                    }}
                                />

                            </Avatar>

                            <Typography
                                variant="h6"
                            >
                                Business Score
                            </Typography>

                            <Typography
                                variant="h2"
                                fontWeight={700}
                            >
                                {businessScore.score}
                            </Typography>

                            <Typography
                                variant="h5"
                                color="#E5D5BC"
                            >
                                Grade {businessScore.grade}
                            </Typography>

                            <LinearProgress
                                variant="determinate"
                                value={businessScore.score}
                                sx={{
                                    width: "100%",
                                    height: 10,
                                    borderRadius: 10,
                                    bgcolor: "rgba(255,255,255,.2)",
                                    "& .MuiLinearProgress-bar": {
                                        bgcolor: "#B89B73",
                                    },
                                }}
                            />

                        </Stack>

                    </CardContent>

                </Card>

            </Grid>

            {/* KPI GRID */}

            <Grid
                 size={{ xs: 12, md: 8 }}
            >

                <Grid
                    container
                    spacing={3}
                >

                    <Grid  size={{ xs: 12, md: 6 }}>

                        <StatCard
                            title="Revenue"
                            value={`₹${summary.totalRevenue.toLocaleString()}`}
                            icon={<CurrencyRupeeRoundedIcon />}
                            color="#0F9D58"
                        />

                    </Grid>

                    <Grid  size={{ xs: 12, md: 6 }}></Grid>

                        <StatCard
                            title="Orders"
                            value={summary.totalOrders}
                            icon={<ShoppingBagRoundedIcon />}
                            color="#1976D2"
                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <StatCard
                            title="Inventory"
                            value={`₹${summary.inventoryValue.toLocaleString()}`}
                            icon={<Inventory2RoundedIcon />}
                            color="#EF6C00"
                        />

                    </Grid>

                    <Grid  size={{ xs: 12, md: 6 }}>

                        <StatCard
                            title="Customers"
                            value={summary.totalCustomers}
                            icon={<PeopleAltRoundedIcon />}
                            color="#8E24AA"
                        />

                    </Grid>

                </Grid>

            </Grid>


    );

}