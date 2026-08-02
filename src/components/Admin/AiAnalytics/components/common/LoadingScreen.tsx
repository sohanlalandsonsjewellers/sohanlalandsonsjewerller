import {
    Box,
    CircularProgress,
    Typography
} from "@mui/material";

interface LoadingScreenProps {

    title?: string;

    subtitle?: string;

    height?: string | number;

}

export default function LoadingScreen({

    title = "Loading Dashboard",

    subtitle = "AI is analysing your business data...",

    height = "70vh"

}: LoadingScreenProps) {

    return (

        <Box

            sx={{

                width: "100%",

                height,

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                bgcolor: "#FDFBF7"

            }}

        >

            <Box

                sx={{

                    width: 420,

                    maxWidth: "95%",

                    p: 5,

                    borderRadius: "24px",

                    bgcolor: "#FFF",

                    border: "1px solid rgba(184,155,115,.18)",

                    boxShadow:
                        "0 25px 60px rgba(74,14,23,.08)",

                    textAlign: "center"

                }}

            >

                <CircularProgress

                    size={60}

                    thickness={4}

                    sx={{

                        color: "#4A0E17"

                    }}

                />

                <Typography

                    variant="h5"

                    sx={{

                        mt: 3,

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

                        mt: 1.5,

                        color: "#777",

                        lineHeight: 1.8

                    }}

                >

                    {subtitle}

                </Typography>

            </Box>

        </Box>

    );

}