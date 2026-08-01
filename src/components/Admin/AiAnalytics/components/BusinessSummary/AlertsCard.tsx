import {
    Alert,
    AlertTitle,
    Card,
    CardContent,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

import { BusinessAlert } from "../../../../../types/ai/businessSummary";

interface Props {
    alerts: BusinessAlert[];
}

const getSeverity = (
    priority: string
): "error" | "warning" | "info" | "success" => {

    switch (priority) {

        case "HIGH":
            return "error";

        case "MEDIUM":
            return "warning";

        case "LOW":
            return "info";

        default:
            return "success";

    }

};

const AlertsCard = ({ alerts }: Props) => {

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

                        <WarningAmberRoundedIcon color="warning" />

                        <Typography
                            variant="h6"
                            fontWeight={700}
                        >
                            Business Alerts
                        </Typography>

                    </Stack>

                    {

                        alerts.length === 0 ? (

                            <Alert severity="success">

                                No active alerts.

                            </Alert>

                        ) : (

                            alerts.map((alert, index) => (

                                <Alert
                                    key={index}
                                    severity={getSeverity(alert.priority)}
                                    variant="outlined"
                                >

                                    <AlertTitle>

                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >

                                            {alert.title}

                                            <Chip
                                                size="small"
                                                label={alert.priority}
                                                color={
                                                    alert.priority === "HIGH"
                                                        ? "error"
                                                        : alert.priority === "MEDIUM"
                                                        ? "warning"
                                                        : "info"
                                                }
                                            />

                                        </Stack>

                                    </AlertTitle>

                                    <Typography variant="body2">

                                        {alert.message}

                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        display="block"
                                        sx={{
                                            mt: 1,
                                            fontWeight: 600,
                                        }}
                                    >

                                        Action: {alert.action}

                                    </Typography>

                                </Alert>

                            ))

                        )

                    }

                </Stack>

            </CardContent>

        </Card>

    );

};

export default AlertsCard;