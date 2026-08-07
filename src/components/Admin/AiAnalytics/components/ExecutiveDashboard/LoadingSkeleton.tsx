import {
    Grid,
    Skeleton,
    Paper
} from "@mui/material";

export default function LoadingSkeleton() {

    return (

        <Grid container spacing={3}>

            {

                Array.from({

                    length: 8

                }).map((_, index) => (

                    <Grid

                        key={index}

                        size={{

                            xs:12,

                            md:3

                        }}

                    >

                        <Paper

                            sx={{

                                p:3,

                                borderRadius:4

                            }}

                        >

                            <Skeleton

                                variant="text"

                                width="60%"

                                height={35}

                            />

                            <Skeleton

                                variant="text"

                                width="40%"

                                height={55}

                            />

                            <Skeleton

                                variant="rounded"

                                height={120}

                            />

                        </Paper>

                    </Grid>

                ))

            }

        </Grid>

    );

}