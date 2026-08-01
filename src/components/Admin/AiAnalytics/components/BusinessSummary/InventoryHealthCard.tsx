import {
    Card,
    CardContent,
    Chip,
    Grid,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";

import { InventoryHealth } from "../../../../../types/ai/businessSummary";

interface Props {
    data: InventoryHealth;
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

        case "warning":
            return "warning";

        default:
            return "error";
    }

};

const InventoryHealthCard = ({ data }: Props) => {

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
                            Inventory Health
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

                        <Inventory2RoundedIcon
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
                                Healthy
                            </Typography>

                            <Typography variant="h6">

                                {data.healthyProducts}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Low Stock
                            </Typography>

                            <Typography variant="h6">

                                {data.lowStock}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Out Of Stock
                            </Typography>

                            <Typography variant="h6">

                                {data.outOfStock}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Dead Stock
                            </Typography>

                            <Typography variant="h6">

                                {data.deadStock}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Total Stock
                            </Typography>

                            <Typography variant="h6">

                                {data.totalStock}

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6 }}>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Inventory Value
                            </Typography>

                            <Typography variant="h6">

                                ₹{data.inventoryValue.toLocaleString()}

                            </Typography>

                        </Grid>

                    </Grid>

                </Stack>

            </CardContent>

        </Card>

    );

};

export default InventoryHealthCard;