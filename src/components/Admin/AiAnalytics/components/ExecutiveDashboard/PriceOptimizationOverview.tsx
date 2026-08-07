import {
    Paper,
    Typography,
    Grid
} from "@mui/material";

interface Props{

    pricing:any;

}

export default function PriceOptimizationOverview({

    pricing

}:Props){

    if(!pricing){

        return null;

    }

    const summary = pricing.summary ?? {};

    return(

        <Paper
            sx={{
                p:3,
                borderRadius:4,
                height:"100%"
            }}
        >

            <Typography
                variant="h6"
                mb={3}
            >
                Price Optimization
            </Typography>

            <Grid container spacing={2}>

                <Grid size={{xs:6}}>

                    <Typography>Increase Price</Typography>

                    <Typography variant="h5">

                        {summary.increase ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Discount</Typography>

                    <Typography variant="h5">

                        {summary.discount ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Bundle</Typography>

                    <Typography variant="h5">

                        {summary.bundle ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Clearance</Typography>

                    <Typography variant="h5">

                        {summary.clearance ?? 0}

                    </Typography>

                </Grid>

            </Grid>

        </Paper>

    );

}