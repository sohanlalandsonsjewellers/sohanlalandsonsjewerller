import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    Stack,
    Typography
} from "@mui/material";

import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import { CustomerRecommendation } from "../../../../../types/ai/customer";

interface Props {

    customers: {

        recommendations: CustomerRecommendation[];

    }[];

}

function priorityColor(priority: string) {

    switch (priority) {

        case "HIGH":

            return "#D32F2F";

        case "MEDIUM":

            return "#F57C00";

        default:

            return "#2E7D32";

    }

}

function priorityIcon(priority: string) {

    switch (priority) {

        case "HIGH":

            return <WarningAmberRoundedIcon />;

        case "MEDIUM":

            return <InfoRoundedIcon />;

        default:

            return <CheckCircleRoundedIcon />;

    }

}

export default function CustomerRecommendations({

    customers

}: Props) {

    const recommendations = customers
        .flatMap(customer => customer.recommendations)
        .slice(0, 12);

    return (

        <Card
            elevation={0}
            sx={{

                mt: 4,

                borderRadius: { xs: "16px", sm: "22px" },

                border: "1px solid rgba(184,155,115,.18)",

                boxShadow:
                    "0 15px 35px rgba(0,0,0,.05)"

            }}
        >

            <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>

                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    mb={3}
                >

                    <TipsAndUpdatesRoundedIcon
                        sx={{

                            color: "#B89B73",

                            fontSize: { xs: 26, sm: 32 }

                        }}
                    />

                    <Typography
                        variant="h5"
                        sx={{

                            color: "#4A0E17",

                            fontWeight: 700,

                            fontFamily:
                                '"Playfair Display", serif',

                            fontSize: { xs: "1.2rem", sm: "1.5rem" }

                        }}
                    >

                        AI Recommendations

                    </Typography>

                </Stack>

                {

                    recommendations.length === 0 && (

                        <Box
                            sx={{
                                py: 4,
                                textAlign: "center"
                            }}
                        >

                            <Typography
                                color="text.secondary"
                            >

                                No recommendations available for the
                                current filters.

                            </Typography>

                        </Box>

                    )

                }

                {

                    recommendations.map(

                        (

                            item,

                            index

                        ) => (

                            <Box
                                key={index}
                            >

                                <Stack

                                    direction="row"

                                    spacing={2}

                                    py={2}

                                >

                                    <Box
                                        sx={{

                                            color:
                                                priorityColor(

                                                    item.priority

                                                )

                                        }}
                                    >

                                        {

                                            priorityIcon(

                                                item.priority

                                            )

                                        }

                                    </Box>

                                    <Box
                                        flex={1}
                                        minWidth={0}
                                    >

                                        <Stack
                                            direction={{
                                                xs: "column",
                                                md: "row"
                                            }}
                                            justifyContent="space-between"
                                            spacing={1}
                                        >

                                            <Typography
                                                fontWeight={700}
                                                color="#4A0E17"
                                                sx={{ wordBreak: "break-word" }}
                                            >

                                                {

                                                    item.title

                                                }

                                            </Typography>

                                            <Chip

                                                size="small"

                                                label={

                                                    item.priority

                                                }

                                                sx={{

                                                    bgcolor:
                                                        `${priorityColor(item.priority)}15`,

                                                    color:
                                                        priorityColor(item.priority),

                                                    fontWeight: 700,

                                                    width: 90,

                                                    flexShrink: 0

                                                }}

                                            />

                                        </Stack>

                                        <Typography
                                            mt={1}
                                            color="text.secondary"
                                            lineHeight={1.8}
                                            sx={{ wordBreak: "break-word" }}
                                        >

                                            {

                                                item.message

                                            }

                                        </Typography>

                                    </Box>

                                </Stack>

                                {

                                    index !==

                                    recommendations.length - 1 && (

                                        <Divider />

                                    )

                                }

                            </Box>

                        )

                    )

                }

            </CardContent>

        </Card>

    );

}
