import {
    Box,
    Button,
    Typography
} from "@mui/material";

import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

interface EmptyStateProps {

    title?: string;

    message?: string;

    buttonText?: string;

    onRefresh?: () => void;

    height?: string | number;

}

export default function EmptyState({

    title = "No Data Available",

    message = "There is currently no analytics data available for the selected filters.",

    buttonText = "Refresh",

    onRefresh,

    height = "60vh"

}: EmptyStateProps) {

    return (

        <Box

            sx={{

                width: "100%",

                height,

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

                <InboxRoundedIcon

                    sx={{

                        fontSize: 74,

                        color: "#B89B73"

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

                        lineHeight: 1.8,

                        maxWidth: 420,

                        mx: "auto"

                    }}

                >

                    {message}

                </Typography>

                {

                    onRefresh && (

                        <Button

                            variant="contained"

                            startIcon={
                                <RefreshRoundedIcon />
                            }

                            onClick={onRefresh}

                            sx={{

                                mt: 4,

                                px: 4,

                                py: 1.3,

                                borderRadius: "999px",

                                bgcolor: "#4A0E17",

                                fontWeight: 700,

                                "&:hover": {

                                    bgcolor: "#631521"

                                }

                            }}

                        >

                            {buttonText}

                        </Button>

                    )

                }

            </Box>

        </Box>

    );

}