import {

    Alert,

    Box,

    Chip,

    Grid,

    List,

    ListItem,

    ListItemText,

    Paper,

    Typography

} from "@mui/material";

import { BusinessSummaryResponse } from "../../../api/ai";

interface Props {

    data: BusinessSummaryResponse;

}

export default function AiBusinessSummary({

    data

}: Props) {

    return (

        <Box mt={4}>

            <Typography

                variant="h5"

                sx={{

                    mb: 3,

                    fontWeight: 700,

                    color: "#4A0E17"

                }}

            >

                AI Business Summary

            </Typography>

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 4 }}>

                    <Paper sx={{ p: 3 }}>

                        <Typography variant="h6">

                            Business Score

                        </Typography>

                        <Typography

                            variant="h2"

                            sx={{ mt: 2 }}

                        >

                            {data.businessScore.score}

                        </Typography>

                        <Chip

                            label={`Grade ${data.businessScore.grade}`}

                            color="primary"

                            sx={{ mt: 2 }}

                        />

                    </Paper>

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <Paper sx={{ p: 3 }}>

                        <Typography variant="h6">

                            Inventory Health

                        </Typography>

                        <Typography

                            variant="h4"

                            sx={{ mt: 2 }}

                        >

                            {data.inventoryHealth.status}

                        </Typography>

                        <Typography>

                            Score :

                            {" "}

                            {data.inventoryHealth.score}

                        </Typography>

                    </Paper>

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <Paper sx={{ p: 3 }}>

                        <Typography variant="h6">

                            Customer Health

                        </Typography>

                        <Typography

                            variant="h4"

                            sx={{ mt: 2 }}

                        >

                            {data.customers.health.status}

                        </Typography>

                        <Typography>

                            Total Customers :

                            {" "}

                            {data.customers.total}

                        </Typography>

                    </Paper>

                </Grid>

            </Grid>

            <Grid

                container

                spacing={3}

                sx={{ mt: 1 }}

            >

                <Grid size={{ xs: 12, md: 6 }}>

                    <Paper sx={{ p: 3 }}>

                        <Typography

                            variant="h6"

                            gutterBottom

                        >

                            Alerts

                        </Typography>

                        <List>

                            {data.alerts.map((item, index) => (

                                <ListItem key={index}>

                                    <ListItemText

                                        primary={item}

                                    />

                                </ListItem>

                            ))}

                        </List>

                    </Paper>

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Paper sx={{ p: 3 }}>

                        <Typography

                            variant="h6"

                            gutterBottom

                        >

                            Recommendations

                        </Typography>

                        <List>

                            {data.recommendations.map((item, index) => (

                                <ListItem key={index}>

                                    <ListItemText

                                        primary={item}

                                    />

                                </ListItem>

                            ))}

                        </List>

                    </Paper>

                </Grid>

            </Grid>

            <Alert

                severity="info"

                sx={{ mt: 3 }}

            >

                Generated :

                {" "}

                {new Date(data.generatedAt).toLocaleString()}

            </Alert>

        </Box>

    );

}