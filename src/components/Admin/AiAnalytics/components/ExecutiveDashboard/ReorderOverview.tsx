import {
    Paper,
    Typography,
    Grid
} from "@mui/material";

interface Props{

    reorder:any;

}

export default function ReorderOverview({

    reorder

}:Props){

    if(!reorder){

        return null;

    }

    const summary = reorder.summary ?? {};

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
                Smart Reorder
            </Typography>

            <Grid container spacing={2}>

                <Grid size={{xs:6}}>

                    <Typography>Critical</Typography>

                    <Typography variant="h5">

                        {summary.critical ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>High</Typography>

                    <Typography variant="h5">

                        {summary.high ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Medium</Typography>

                    <Typography variant="h5">

                        {summary.medium ?? 0}

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography>Recommended Qty</Typography>

                    <Typography variant="h5">

                        {summary.totalRecommendedQty ?? 0}

                    </Typography>

                </Grid>

            </Grid>

        </Paper>

    );

}