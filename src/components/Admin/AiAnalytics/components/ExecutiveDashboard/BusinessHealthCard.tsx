import {
    Paper,
    Grid,
    Typography,
    LinearProgress,
    Stack
} from "@mui/material";

interface Props {
    health: any;
}

interface RowProps {
    title: string;
    value: number | undefined | null;
}

const Row = ({ title, value }: RowProps) => {
    // Safe fallback: prevents "Cannot read properties of undefined (reading 'toFixed')"
    const safeValue = typeof value === "number" && !isNaN(value) ? value : 0;

    return (
        <Stack spacing={1}>
            <Typography>
                {title}
            </Typography>
            <LinearProgress
                variant="determinate"
                value={Math.min(100, Math.max(0, safeValue))}
            />
            <Typography>
                {safeValue.toFixed(0)}%
            </Typography>
        </Stack>
    );
};

export default function BusinessHealthCard({ health }: Props) {
    // Safe fallback: prevents crash if `health` itself is undefined/null
    const safeHealth = health ?? {};

    return (
        <Paper
            sx={{
                p: 3,
                borderRadius: 5
            }}
        >
            <Typography
                variant="h5"
                mb={3}
            >
                Business Health
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Typography variant="h2">
                        {safeHealth.score ?? 0}
                    </Typography>
                    <Typography>
                        {safeHealth.status ?? "N/A"}
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 9 }}>
                    <Stack spacing={2}>
                        <Row title="Revenue" value={safeHealth.revenueScore} />
                        <Row title="Sales" value={safeHealth.salesScore} />
                        <Row title="Inventory" value={safeHealth.inventoryScore} />
                        <Row title="Customer" value={safeHealth.customerScore} />
                        <Row title="Forecast" value={safeHealth.forecastScore} />
                        <Row title="Demand" value={safeHealth.demandScore} />
                        <Row title="Reorder" value={safeHealth.reorderScore} />
                        <Row title="Pricing" value={safeHealth.priceScore} />
                        <Row title="Products" value={safeHealth.productScore} />
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}
