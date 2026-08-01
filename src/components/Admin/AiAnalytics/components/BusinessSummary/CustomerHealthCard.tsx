import {
    Card,
    CardContent,
    Chip,
    Grid,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

import { CustomerHealth } from "../../../../../types/ai/businessSummary";

interface Props {
    data: CustomerHealth;
}

const getStatusColor = (
    status: string
): "success" | "warning" | "error" | "info" => {

    switch (status.toLowerCase()) {

        case "excellent":
        case "healthy":
            return "success";

        case "good":
            return "info";

        case "stable":
            return "primary" as any;

        case "warning":
            return "warning";

        default:
            return "error";
    }

};

const CustomerHealthCard = ({ data }: Props) => {

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
                            Customer Health
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

                        <PeopleAltRoundedIcon
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

                    <Grid
                        container
                        spacing={2}
                    >

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Total VIP
                            </Typography>

                            <Typography variant="h6">

                                {data.vip}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Premium
                            </Typography>

                            <Typography variant="h6">

                                {data.premium}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Regular
                            </Typography>

                            <Typography variant="h6">

                                {data.regular}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                New
                            </Typography>

                            <Typography variant="h6">

                                {data.new}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Returning
                            </Typography>

                            <Typography variant="h6">

                                {data.returning}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Active
                            </Typography>

                            <Typography variant="h6">

                                {data.active}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Repeat Rate
                            </Typography>

                            <Typography variant="h6">

                                {data.repeatRate}%

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Average CLV
                            </Typography>

                            <Typography variant="h6">

                                ₹{data.averageCLV.toLocaleString()}

                            </Typography>

                        </Grid>

                    </Grid>

                </Stack>

            </CardContent>

        </Card>

    );

};

export default CustomerHealthCard;