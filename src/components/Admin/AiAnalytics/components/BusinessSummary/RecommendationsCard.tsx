import {
    Card,
    CardContent,
    Chip,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import { Recommendation } from "../../../../../types/ai/businessSummary";

interface Props {
    recommendations: Recommendation[];
}

const getPriorityColor = (
    priority: string
): "error" | "warning" | "info" => {

    switch (priority) {

        case "HIGH":
            return "error";

        case "MEDIUM":
            return "warning";

        default:
            return "info";

    }

};

const getImpactColor = (
    impact: string
): "success" | "warning" | "error" | "info" => {

    switch (impact.toLowerCase()) {

        case "high":
            return "error";

        case "medium":
            return "warning";

        case "low":
            return "success";

        default:
            return "info";

    }

};

const RecommendationsCard = ({ recommendations }: Props) => {

    return (

        <Card
            elevation={3}
            sx={{
                borderRadius: 3,
            }}
        >

            <CardContent>

                <Stack spacing={3}>

                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >

                        <AutoAwesomeRoundedIcon color="primary" />

                        <Typography
                            variant="h6"
                            fontWeight={700}
                        >
                            AI Recommendations
                        </Typography>

                    </Stack>

                    {

                        recommendations.length === 0 ? (

                            <Typography
                                color="text.secondary"
                            >
                                No recommendations available.
                            </Typography>

                        ) : (

                            recommendations.map((item, index) => (

                                <Stack
                                    key={index}
                                    spacing={2}
                                >

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        flexWrap="wrap"
                                    >

                                        <Chip
                                            label={item.priority}
                                            color={getPriorityColor(item.priority)}
                                            size="small"
                                        />

                                        <Chip
                                            label={item.category}
                                            color="primary"
                                            variant="outlined"
                                            size="small"
                                        />

                                        <Chip
                                            label={`${item.impact} Impact`}
                                            color={getImpactColor(item.impact)}
                                            variant="outlined"
                                            size="small"
                                        />

                                    </Stack>

                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.description}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        Recommended Action:
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                    >
                                        {item.action}
                                    </Typography>

                                    {

                                        index !== recommendations.length - 1 && (

                                            <Divider />

                                        )

                                    }

                                </Stack>

                            ))

                        )

                    }

                </Stack>

            </CardContent>

        </Card>

    );

};

export default RecommendationsCard;