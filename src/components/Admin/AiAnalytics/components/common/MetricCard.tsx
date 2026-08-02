import {
    Avatar,
    Box,
    Card,
    Chip,
    Stack,
    Typography
} from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import { ReactNode } from "react";

interface MetricCardProps {

    title: string;

    value: string | number;

    subtitle?: string;

    icon: ReactNode;

    color?: string;

    trend?: number;

    trendLabel?: string;

    loading?: boolean;

}

export default function MetricCard({

    title,

    value,

    subtitle,

    icon,

    color = "#4A0E17",

    trend,

    trendLabel,

    loading = false

}: MetricCardProps) {

    const positive = (trend ?? 0) > 0;

    const negative = (trend ?? 0) < 0;

    return (

        <Card

            elevation={0}

            sx={{

                height: "100%",

                borderRadius: "22px",

                p: 3,

                bgcolor: "#FFF",

                border: "1px solid rgba(184,155,115,.18)",

                boxShadow:
                    "0 14px 35px rgba(0,0,0,.05)",

                transition: ".30s",

                "&:hover": {

                    transform: "translateY(-6px)",

                    boxShadow:
                        "0 25px 60px rgba(74,14,23,.12)",

                    borderColor: "#B89B73"

                }

            }}

        >

            <Stack

                direction="row"

                justifyContent="space-between"

                alignItems="center"

            >

                <Box flex={1}>

                    <Typography

                        sx={{

                            color: "#777",

                            fontSize: ".9rem",

                            fontWeight: 500

                        }}

                    >

                        {title}

                    </Typography>

                    <Typography

                        variant="h4"

                        sx={{

                            mt: 1.2,

                            color: "#4A0E17",

                            fontWeight: 700

                        }}

                    >

                        {

                            loading

                                ? "--"

                                : value

                        }

                    </Typography>

                    {

                        subtitle && (

                            <Typography

                                sx={{

                                    mt: 1,

                                    color: "#999",

                                    fontSize: ".82rem"

                                }}

                            >

                                {subtitle}

                            </Typography>

                        )

                    }

                </Box>

                <Avatar

                    sx={{

                        width: 60,

                        height: 60,

                        bgcolor: `${color}15`,

                        color

                    }}

                >

                    {icon}

                </Avatar>

            </Stack>

            {

                trend !== undefined && (

                    <Stack

                        direction="row"

                        alignItems="center"

                        spacing={1}

                        mt={3}

                    >

                        {

                            positive ? (

                                <TrendingUpRoundedIcon

                                    sx={{

                                        color: "#16A34A"

                                    }}

                                />

                            ) : negative ? (

                                <TrendingDownRoundedIcon

                                    sx={{

                                        color: "#DC2626"

                                    }}

                                />

                            ) : (

                                <RemoveRoundedIcon

                                    sx={{

                                        color: "#999"

                                    }}

                                />

                            )

                        }

                        <Chip

                            size="small"

                            label={`${trend}%`}

                            sx={{

                                bgcolor:

                                    positive

                                        ? "rgba(22,163,74,.12)"

                                        : negative

                                        ? "rgba(220,38,38,.12)"

                                        : "rgba(153,153,153,.12)",

                                color:

                                    positive

                                        ? "#16A34A"

                                        : negative

                                        ? "#DC2626"

                                        : "#666",

                                fontWeight: 700

                            }}

                        />

                        {

                            trendLabel && (

                                <Typography

                                    variant="body2"

                                    color="text.secondary"

                                >

                                    {trendLabel}

                                </Typography>

                            )

                        }

                    </Stack>

                )

            }

        </Card>

    );

}