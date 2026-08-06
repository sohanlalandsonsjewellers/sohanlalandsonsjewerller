import {

    Paper,

    Typography,

    Grid

} from "@mui/material";

interface Props {

    customer: any;

}

export default function CustomerOverview({

    customer

}: Props) {

    if (!customer) {

        return null;

    }

    return (

        <Paper

            sx={{

                p: 3,

                borderRadius: 4,

                height: "100%"

            }}

        >

            <Typography

                variant="h6"

                mb={3}

            >

                Customer Analytics

            </Typography>

            <Grid container spacing={2}>

                <Grid size={{ xs: 6 }}>

                    <Typography>

                        Total Customers

                    </Typography>

                    <Typography variant="h5">

                        {

                            customer.summary?.totalCustomers ??

                            0

                        }

                    </Typography>

                </Grid>

                <Grid size={{ xs: 6 }}>

                    <Typography>

                        Active

                    </Typography>

                    <Typography variant="h5">

                        {

                            customer.summary?.activeCustomers ??

                            0

                        }

                    </Typography>

                </Grid>

                <Grid size={{ xs: 6 }}>

                    <Typography>

                        VIP

                    </Typography>

                    <Typography variant="h5">

                        {

                            customer.summary?.vipCustomers ??

                            0

                        }

                    </Typography>

                </Grid>

                <Grid size={{ xs: 6 }}>

                    <Typography>

                        Repeat

                    </Typography>

                    <Typography variant="h5">

                        {

                            customer.summary?.repeatCustomers ??

                            0

                        }

                    </Typography>

                </Grid>

            </Grid>

        </Paper>

    );

}