import {
    Paper,
    Grid,
    Typography
} from "@mui/material";

interface Props {

    product:any;

}

export default function ProductOverview({

    product

}:Props){

    if(!product){

        return null;

    }

    const summary = product.summary ?? {};

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
                Product Performance
            </Typography>

            <Grid container spacing={2}>

                <Grid size={{xs:6}}>

                    <Typography>Total Products</Typography>

                    <Typography variant="h5">

                        {summary.totalProducts ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Excellent</Typography>

                    <Typography variant="h5">

                        {summary.excellent ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Good</Typography>

                    <Typography variant="h5">

                        {summary.good ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Poor</Typography>

                    <Typography variant="h5">

                        {summary.poor ?? 0}

                    </Typography>

                </Grid>

            </Grid>

        </Paper>

    );

}