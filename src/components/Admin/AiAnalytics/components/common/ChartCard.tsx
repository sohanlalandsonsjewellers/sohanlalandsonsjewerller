import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    Stack,
    Typography
} from "@mui/material";

import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";

import { ReactNode } from "react";

interface ChartCardProps {

    title: string;

    subtitle?: string;

    badge?: string;

    height?: number | string;

    action?: ReactNode;

    children: ReactNode;

}

export default function ChartCard({

    title,

    subtitle,

    badge,

    height = 380,

    action,

    children

}: ChartCardProps) {

    return (

        <Card

            elevation={0}

            sx={{

                height: "100%",

                borderRadius: "22px",

                border: "1px solid rgba(184,155,115,.18)",

                bgcolor: "#FFF",

                overflow: "hidden",

                boxShadow:
                    "0 16px 35px rgba(0,0,0,.05)",

                transition: ".30s",

                "&:hover": {

                    boxShadow:
                        "0 24px 60px rgba(74,14,23,.10)"

                }

            }}

        >

            <CardContent

                sx={{

                    p: 3

                }}

            >

                <Stack

                    direction="row"

                    justifyContent="space-between"

                    alignItems="center"

                >

                    <Stack

                        direction="row"

                        spacing={2}

                        alignItems="center"

                    >

                        <Box

                            sx={{

                                width: 48,

                                height: 48,

                                borderRadius: "14px",

                                bgcolor: "rgba(184,155,115,.12)",

                                color: "#4A0E17",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center"

                            }}

                        >

                            <ShowChartRoundedIcon />

                        </Box>

                        <Box>

                            <Typography

                                variant="h6"

                                sx={{

                                    fontWeight: 700,

                                    color: "#4A0E17",

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

                                            mt: .3,

                                            color: "#777",

                                            fontSize: ".88rem"

                                        }}

                                    >

                                        {subtitle}

                                    </Typography>

                                )

                            }

                        </Box>

                    </Stack>

                    <Stack

                        direction="row"

                        spacing={1}

                        alignItems="center"

                    >

                        {

                            badge && (

                                <Chip

                                    label={badge}

                                    sx={{

                                        bgcolor:
                                            "rgba(184,155,115,.12)",

                                        color: "#4A0E17",

                                        fontWeight: 700

                                    }}

                                />

                            )

                        }

                        {action}

                    </Stack>

                </Stack>

                <Divider

                    sx={{

                        my: 2.5

                    }}

                />

                <Box

                    sx={{

                        width: "100%",

                        height

                    }}

                >

                    {children}

                </Box>

            </CardContent>

        </Card>

    );

}