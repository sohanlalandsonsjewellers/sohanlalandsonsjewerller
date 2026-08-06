import {
    Paper,
    Stack,
    Typography,
    Chip,
    Button,
    Divider
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsightsIcon from "@mui/icons-material/Insights";

import {
    ExecutiveDashboardResponse
} from "../../../.../../../../types/ai/executiveDashboard";

interface ExecutiveHeroProps {

    dashboard: ExecutiveDashboardResponse;

    onRefresh: () => void;

}

export default function ExecutiveHero({

    dashboard,

    onRefresh

}: ExecutiveHeroProps) {

    return (

        <Paper

            elevation={4}

            sx={{

                p: 4,

                borderRadius: 4

            }}

        >

            <Stack

                direction={{

                    xs: "column",

                    md: "row"

                }}

                justifyContent="space-between"

                spacing={4}

            >

                <Stack spacing={2}>

                    <Chip

                        color="primary"

                        icon={<InsightsIcon />}

                        label="AI BUSINESS INTELLIGENCE"

                        sx={{

                            width: "fit-content"

                        }}

                    />

                    <Typography

                        variant="h3"

                        fontWeight={700}

                    >

                        Executive Dashboard

                    </Typography>

                    <Typography

                        color="text.secondary"

                    >

                        Unified AI powered business overview including
                        revenue, customers, inventory, forecasting,
                        product performance and executive insights.

                    </Typography>

                </Stack>

                <Stack

                    spacing={2}

                    alignItems={{

                        xs: "flex-start",

                        md: "flex-end"

                    }}

                >

                    <Chip

                        color="success"

                        label={`Business Score : ${dashboard.businessHealth.score}%`}

                    />

                    <Chip

                        color="info"

                        label={dashboard.businessHealth.status}

                    />

                    <Stack

                        direction="row"

                        spacing={1}

                        alignItems="center"

                    >

                        <AccessTimeIcon

                            fontSize="small"

                        />

                        <Typography

                            variant="body2"

                            color="text.secondary"

                        >

                            Last Updated

                        </Typography>

                    </Stack>

                    <Typography

                        variant="body2"

                    >

                        {

                            new Date(

                                dashboard.generatedAt

                            ).toLocaleString()

                        }

                    </Typography>

                    <Button

                        variant="contained"

                        startIcon={<RefreshIcon />}

                        onClick={onRefresh}

                    >

                        Refresh Dashboard

                    </Button>

                </Stack>

            </Stack>

            <Divider

                sx={{

                    my: 4

                }}

            />

            <Stack

                direction={{

                    xs: "column",

                    sm: "row"

                }}

                spacing={5}

                justifyContent="space-between"

            >

                <Stack>

                    <Typography

                        variant="caption"

                        color="text.secondary"

                    >

                        Revenue

                    </Typography>

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        ₹

                        {

                            dashboard.summary.revenue.toLocaleString()

                        }

                    </Typography>

                </Stack>

                <Stack>

                    <Typography

                        variant="caption"

                        color="text.secondary"

                    >

                        Orders

                    </Typography>

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        {

                            dashboard.summary.orders

                        }

                    </Typography>

                </Stack>

                <Stack>

                    <Typography

                        variant="caption"

                        color="text.secondary"

                    >

                        Customers

                    </Typography>

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        {

                            dashboard.summary.users

                        }

                    </Typography>

                </Stack>

                <Stack>

                    <Typography

                        variant="caption"

                        color="text.secondary"

                    >

                        Products

                    </Typography>

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        {

                            dashboard.summary.products

                        }

                    </Typography>

                </Stack>

                <Stack>

                    <Typography

                        variant="caption"

                        color="text.secondary"

                    >

                        Inventory Value

                    </Typography>

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        ₹

                        {

                            dashboard.summary.inventoryValue.toLocaleString()

                        }

                    </Typography>

                </Stack>

            </Stack>

        </Paper>

    );

}