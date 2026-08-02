import {
    Box,
    Button,
    Chip,
    Stack,
    Typography
} from "@mui/material";

import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

interface DashboardHeaderProps {

    title: string;

    subtitle?: string;

    badgeLabel?: string;

    badgeValue?: string | number;

    generatedAt?: string;

    loading?: boolean;

    onRefresh?: () => void;

}

export default function DashboardHeader({

    title,

    subtitle,

    badgeLabel,

    badgeValue,

    generatedAt,

    loading = false,

    onRefresh

}: DashboardHeaderProps) {

    const updated = generatedAt

        ? new Date(generatedAt).toLocaleString()

        : "--";

    return (

        <Box

            sx={{

                mb: 4,

                p: 4,

                borderRadius: "24px",

                background:
                    "linear-gradient(135deg,#4A0E17 0%,#6A1827 100%)",

                color: "#FFF",

                position: "relative",

                overflow: "hidden",

                border:
                    "1px solid rgba(184,155,115,.20)",

                boxShadow:
                    "0 25px 60px rgba(74,14,23,.18)"

            }}

        >

            <Box

                sx={{

                    position: "absolute",

                    width: 240,

                    height: 240,

                    borderRadius: "50%",

                    bgcolor: "rgba(255,255,255,.05)",

                    right: -80,

                    top: -80

                }}

            />

            <Stack

                direction={{

                    xs: "column",

                    md: "row"

                }}

                justifyContent="space-between"

                spacing={3}

            >

                <Box>

                    <Typography

                        variant="overline"

                        sx={{

                            color: "#E5D5BC",

                            letterSpacing: 3,

                            fontWeight: 700

                        }}

                    >

                        AI BUSINESS ANALYTICS

                    </Typography>

                    <Typography

                        variant="h3"

                        sx={{

                            mt: 1,

                            fontWeight: 700,

                            fontFamily:
                                '"Playfair Display", serif'

                        }}

                    >

                        {title}

                    </Typography>

                    {

                        subtitle && (

                            <Typography

                                sx={{

                                    mt: 1,

                                    color:
                                        "rgba(255,255,255,.75)",

                                    maxWidth: 700,

                                    lineHeight: 1.8

                                }}

                            >

                                {subtitle}

                            </Typography>

                        )

                    }

                </Box>

                <Stack

                    spacing={2}

                    alignItems={{

                        xs: "flex-start",

                        md: "flex-end"

                    }}

                >

                    {

                        badgeLabel && (

                            <Chip

                                label={`${badgeLabel}: ${badgeValue}`}

                                sx={{

                                    bgcolor: "#B89B73",

                                    color: "#FFF",

                                    fontWeight: 700,

                                    fontSize: ".9rem",

                                    px: 1

                                }}

                            />

                        )

                    }

                    <Chip

                        icon={<CalendarMonthRoundedIcon />}

                        label={`Updated : ${updated}`}

                        sx={{

                            bgcolor:
                                "rgba(255,255,255,.08)",

                            color: "#FFF"

                        }}

                    />

                    {

                        onRefresh && (

                            <Button

                                variant="contained"

                                disabled={loading}

                                onClick={onRefresh}

                                startIcon={
                                    <RefreshRoundedIcon />
                                }

                                sx={{

                                    bgcolor: "#B89B73",

                                    color: "#FFF",

                                    px: 3,

                                    py: 1.1,

                                    borderRadius: 999,

                                    fontWeight: 700,

                                    "&:hover": {

                                        bgcolor: "#A98A60"

                                    }

                                }}

                            >

                                Refresh

                            </Button>

                        )

                    }

                </Stack>

            </Stack>

        </Box>

    );

}