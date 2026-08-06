import {
    Grid,
    Paper,
    Typography
} from "@mui/material";

interface KPIItem {
    title?: string;
    value?: string | number;
    change?: number;
}

interface Props {
    kpis: KPIItem[] | undefined | null;
}

export default function KPIGrid({ kpis }: Props) {
    // Safe fallback: prevents "Cannot read properties of undefined (reading 'map')"
    const safeKpis = Array.isArray(kpis) ? kpis : [];

    if (safeKpis.length === 0) {
        return null;
    }

    return (
        <Grid
            container
            spacing={3}
        >
            {
                safeKpis.map(
                    (item, index) => {
                        const change = typeof item?.change === "number" ? item.change : 0;

                        return (
                            <Grid
                                key={index}
                                size={{ xs: 12, sm: 6, md: 3 }}
                            >
                                <Paper
                                    sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        height: "100%"
                                    }}
                                >
                                    <Typography variant="body2">
                                        {item?.title ?? "N/A"}
                                    </Typography>

                                    <Typography variant="h4" mt={1}>
                                        {item?.value ?? 0}
                                    </Typography>

                                    <Typography
                                        color={change >= 0 ? "success.main" : "error.main"}
                                    >
                                        {change}%
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    }
                )
            }
        </Grid>
    );
}
