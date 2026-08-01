import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";

import { BusinessScore } from "../../../../../types/ai/businessSummary";

interface Props {
    data: BusinessScore;
}

const getGradeColor = (
    grade: string
):
    | "success"
    | "warning"
    | "error"
    | "info"
    | "primary" => {

    switch (grade) {

        case "A":
            return "success";

        case "B":
            return "primary";

        case "C":
            return "info";

        case "D":
            return "warning";

        default:
            return "error";
    }

};

const BreakdownItem = ({
    label,
    value,
}: {
    label: string;
    value: number;
}) => (

    <Box>

        <Stack
            direction="row"
            justifyContent="space-between"
            mb={0.5}
        >

            <Typography variant="body2">

                {label}

            </Typography>

            <Typography
                variant="body2"
                fontWeight={600}
            >

                {value}%

            </Typography>

        </Stack>

        <LinearProgress
            variant="determinate"
            value={value}
            sx={{
                height: 8,
                borderRadius: 10,
            }}
        />

    </Box>

);

const BusinessScoreCard = ({ data }: Props) => {

    return (

        <Card
            elevation={4}
            sx={{
                borderRadius: 3,
            }}
        >

            <CardContent>

                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                >

                    {/* LEFT */}

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Stack
                            spacing={2}
                            alignItems="center"
                        >

                            <Typography
                                variant="h6"
                            >

                                Business Score

                            </Typography>

                            <Typography
                                variant="h2"
                                fontWeight={700}
                            >

                                {data.score}

                            </Typography>

                            <Chip
                                color={getGradeColor(data.grade)}
                                label={`Grade ${data.grade}`}
                                size="medium"
                            />

                        </Stack>

                    </Grid>

                    {/* RIGHT */}

                    <Grid size={{ xs: 12, md: 8 }}>

                        <Stack spacing={2}>

                            <BreakdownItem
                                label="Revenue"
                                value={data.breakdown.revenue}
                            />

                            <BreakdownItem
                                label="Orders"
                                value={data.breakdown.orders}
                            />

                            <BreakdownItem
                                label="Inventory"
                                value={data.breakdown.inventory}
                            />

                            <BreakdownItem
                                label="Sales"
                                value={data.breakdown.sales}
                            />

                            <BreakdownItem
                                label="Customer"
                                value={data.breakdown.customer}
                            />

                            <BreakdownItem
                                label="Operations"
                                value={data.breakdown.operations}
                            />

                        </Stack>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );

};

export default BusinessScoreCard;