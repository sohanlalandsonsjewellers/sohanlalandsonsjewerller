import {
    Box,
    Button,
    Typography
} from "@mui/material";

import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

interface ErrorStateProps {

    title?: string;

    message?: string;

    onRetry?: () => void;

}

export default function ErrorState({

    title = "Unable to Load Dashboard",

    message = "Something went wrong while loading the requested analytics.",

    onRetry

}: ErrorStateProps) {

    return (

        <Box

            sx={{

                width: "100%",

                minHeight: "60vh",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                bgcolor: "#FDFBF7"

            }}

        >

            <Box

                sx={{

                    width: 520,

                    maxWidth: "95%",

                    p: 5,

                    textAlign: "center",

                    borderRadius: "24px",

                    bgcolor: "#FFF",

                    border: "1px solid rgba(184,155,115,.20)",

                    boxShadow:
                        "0 25px 60px rgba(74,14,23,.08)"

                }}

            >

                <ErrorOutlineRoundedIcon

                    sx={{

                        fontSize: 72,

                        color: "#C62828"

                    }}

                />

                <Typography

                    variant="h4"

                    sx={{

                        mt: 2,

                        fontWeight: 700,

                        color: "#4A0E17",

                        fontFamily:
                            '"Playfair Display", serif'

                    }}

                >

                    {title}

                </Typography>

                <Typography

                    sx={{

                        mt: 2,

                        color: "#777",

                        lineHeight: 1.8

                    }}

                >

                    {message}

                </Typography>

                {

                    onRetry && (

                        <Button

                            variant="contained"

                            startIcon={

                                <RefreshRoundedIcon />

                            }

                            onClick={onRetry}

                            sx={{

                                mt: 4,

                                px: 4,

                                py: 1.3,

                                bgcolor: "#4A0E17",

                                borderRadius: "999px",

                                fontWeight: 700,

                                "&:hover": {

                                    bgcolor: "#631521"

                                }

                            }}

                        >

                            Retry

                        </Button>

                    )

                }

            </Box>

        </Box>

    );

}