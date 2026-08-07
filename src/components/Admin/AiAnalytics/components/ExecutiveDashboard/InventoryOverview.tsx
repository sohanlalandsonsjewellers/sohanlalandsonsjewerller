import {
    Paper,
    Grid,
    Typography
} from "@mui/material";

interface Props {

    inventory:any;

}

export default function InventoryOverview({

    inventory

}:Props){

    if(!inventory){

        return null;

    }

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

                Inventory Overview

            </Typography>

            <Grid container spacing={2}>

                <Grid size={{xs:6}}>

                    <Typography variant="body2">

                        Healthy

                    </Typography>

                    <Typography variant="h5">

                        {

                            inventory.summary?.healthy ??

                            0

                        }

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography variant="body2">

                        Low Stock

                    </Typography>

                    <Typography variant="h5">

                        {

                            inventory.summary?.low ??

                            0

                        }

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography variant="body2">

                        Critical

                    </Typography>

                    <Typography variant="h5">

                        {

                            inventory.summary?.critical ??

                            0

                        }

                    </Typography>

                </Grid>

                <Grid size={{xs:6}}>

                    <Typography variant="body2">

                        Out Of Stock

                    </Typography>

                    <Typography variant="h5">

                        {

                            inventory.summary?.outOfStock ??

                            0

                        }

                    </Typography>

                </Grid>

            </Grid>

        </Paper>

    );

}