import {
    Card,
    CardContent,
    Chip,
    Grid,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import { SalesHealth } from "../../../../../types/ai/businessSummary";

interface Props {
    data: SalesHealth;
}

const getStatusColor = (
    status: string
): "success" | "warning" | "error" | "info" | "primary" => {

    switch (status.toLowerCase()) {

        case "excellent":
        case "healthy":
            return "success";

        case "good":
            return "primary";

        case "stable":
            return "info";

        case "warning":
            return "warning";

        default:
            return "error";
    }

};

const SalesHealthCard = ({ data }: Props) => {

    return (

        <Card
            elevation={3}
            sx={{
                borderRadius: 3,
                height: "100%",
            }}
        >

            <CardContent>

                <Stack spacing={3}>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Typography
                            variant="h6"
                            fontWeight={700}
                        >
                            Sales Health
                        </Typography>

                        <Chip
                            label={data.status}
                            color={getStatusColor(data.status)}
                        />

                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >

                        <TrendingUpRoundedIcon
                            color="primary"
                            sx={{
                                fontSize: 42,
                            }}
                        />

                        <Typography
                            variant="h3"
                            fontWeight={700}
                        >
                            {data.score}
                        </Typography>

                    </Stack>

                    <LinearProgress
                        variant="determinate"
                        value={data.score}
                        sx={{
                            height: 10,
                            borderRadius: 10,
                        }}
                    />

                    <Grid container spacing={2}>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Revenue
                            </Typography>

                            <Typography variant="h6">
                                ₹{data.revenue.toLocaleString()}
                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Orders
                            </Typography>

                            <Typography variant="h6">
                                {data.orders}
                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Average Order Value
                            </Typography>

                            <Typography variant="h6">
                                ₹{data.averageOrderValue.toLocaleString()}
                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Revenue Growth
                            </Typography>

                            <Typography variant="h6">
                                {data.revenueGrowth}%
                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Order Growth
                            </Typography>

                            <Typography variant="h6">
                                {data.orderGrowth}%
                            </Typography>

                        </Grid>

                    </Grid>

                </Stack>

            </CardContent>

        </Card>

    );

};

export default SalesHealthCard;