import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    Stack,
    Typography
} from "@mui/material";

import { ReactNode } from "react";

interface SectionCardProps {

    title: string;

    subtitle?: string;

    badge?: string;

    action?: ReactNode;

    children: ReactNode;

    noPadding?: boolean;

}

export default function SectionCard({

    title,

    subtitle,

    badge,

    action,

    children,

    noPadding = false

}: SectionCardProps) {

    return (

        <Card

            elevation={0}

            sx={{

                width: "100%",

                borderRadius: "22px",

                bgcolor: "#FFF",

                border: "1px solid rgba(184,155,115,.18)",

                overflow: "hidden",

                boxShadow:
                    "0 16px 35px rgba(0,0,0,.05)",

                transition: ".30s",

                "&:hover": {

                    boxShadow:
                        "0 25px 55px rgba(74,14,23,.10)"

                }

            }}

        >

            <CardContent

                sx={{

                    p: noPadding ? 0 : 3

                }}

            >

                <Stack

                    direction="row"

                    justifyContent="space-between"

                    alignItems="center"

                >

                    <Box>

                        <Typography

                            variant="h6"

                            sx={{

                                color: "#4A0E17",

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

                                        mt: .5,

                                        color: "#777",

                                        fontSize: ".9rem"

                                    }}

                                >

                                    {subtitle}

                                </Typography>

                            )

                        }

                    </Box>

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

                {

                    !noPadding && (

                        <Divider

                            sx={{

                                my: 2.5

                            }}

                        />

                    )

                }

                {

                    noPadding

                        ? children

                        : (

                            <Box>

                                {children}

                            </Box>

                        )

                }

            </CardContent>

        </Card>

    );

}