import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import {
    Box,
    Button,
    Chip,
    FormControl,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";

interface DashboardHeaderProps {
    generatedAt?: string;
    onRefresh: () => void;
}

export default function DashboardHeader({
    generatedAt,
    onRefresh,
}: DashboardHeaderProps) {

    return (
        <Box
            sx={{
                p: 4,
                mb: 4,
                borderRadius: 4,
                background:
                    "linear-gradient(135deg,#4A0E17 0%,#6A1520 100%)",
                color: "#fff",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 15px 40px rgba(74,14,23,.25)",
            }}
        >

            <Stack
                direction={{
                    xs: "column",
                    md: "row",
                }}
                justifyContent="space-between"
                spacing={3}
            >

                <Box>

                    <Chip
                        icon={<SmartToyRoundedIcon />}
                        label="AI Powered Analytics"
                        sx={{
                            mb: 2,
                            bgcolor: "rgba(255,255,255,.12)",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,.15)",
                        }}
                    />

                    <Typography
                        variant="h3"
                        fontWeight={700}
                    >
                        AI Business Dashboard
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            color: "#E5D5BC",
                            maxWidth: 600,
                        }}
                    >
                        Real-time AI insights for revenue,
                        inventory,
                        customer growth,
                        sales performance
                        and business health.
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={2}
                        mt={3}
                        flexWrap="wrap"
                    >

                        <Chip
                            icon={<TrendingUpRoundedIcon />}
                            label="Live Analytics"
                            sx={{
                                bgcolor: "#B89B73",
                                color: "#fff",
                            }}
                        />

                        <Chip
                            label={
                                generatedAt
                                    ? `Updated ${new Date(generatedAt).toLocaleString()}`
                                    : "Loading..."
                            }
                            sx={{
                                bgcolor: "rgba(255,255,255,.12)",
                                color: "#fff",
                            }}
                        />

                    </Stack>

                </Box>

                <Stack
                    spacing={2}
                    alignItems={{
                        xs: "stretch",
                        md: "flex-end",
                    }}
                >

                    <FormControl
                        size="small"
                        sx={{
                            minWidth: 170,
                            bgcolor: "#fff",
                            borderRadius: 2,
                        }}
                    >

                        <Select
                            defaultValue="30"
                        >

                            <MenuItem value="7">
                                Last 7 Days
                            </MenuItem>

                            <MenuItem value="30">
                                Last 30 Days
                            </MenuItem>

                            <MenuItem value="90">
                                Last 90 Days
                            </MenuItem>

                            <MenuItem value="365">
                                Last Year
                            </MenuItem>

                        </Select>

                    </FormControl>

                    <Button
                        variant="contained"
                        startIcon={<RefreshRoundedIcon />}
                        onClick={onRefresh}
                        sx={{
                            bgcolor: "#B89B73",
                            color: "#fff",
                            fontWeight: 700,
                            px: 4,
                            py: 1.3,
                            borderRadius: 2,
                            "&:hover": {
                                bgcolor: "#A88657",
                            },
                        }}
                    >
                        Refresh Dashboard
                    </Button>

                </Stack>

            </Stack>

        </Box>



    );

}