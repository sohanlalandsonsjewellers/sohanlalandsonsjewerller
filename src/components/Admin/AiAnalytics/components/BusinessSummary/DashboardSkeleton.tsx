import {
    Card,
    CardContent,
    Grid,
    Skeleton,
    Stack,
} from "@mui/material";

const SkeletonCard = ({ height = 180 }: { height?: number }) => (

    <Card
        elevation={3}
        sx={{
            borderRadius: 3,
            height: "100%",
        }}
    >

        <CardContent>

            <Skeleton
                variant="text"
                width={180}
                height={40}
            />

            <Skeleton
                variant="rectangular"
                height={height}
                sx={{
                    borderRadius: 2,
                }}
            />

        </CardContent>

    </Card>

);

const DashboardSkeleton = () => {

    return (

        <Stack spacing={3}>

            <SkeletonCard height={260} />

            <Grid
                container
                spacing={3}
            >

                {[...Array(6)].map((_, index) => (

                    <Grid
                        key={index}
                        size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
                    >

                        <SkeletonCard height={100} />

                    </Grid>

                ))}

            </Grid>

            <Grid
                container
                spacing={3}
            >

                <Grid size={{ xs: 12, md: 4 }}>

                    <SkeletonCard />

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <SkeletonCard />

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <SkeletonCard />

                </Grid>

            </Grid>

            <SkeletonCard height={420} />

            <Grid
                container
                spacing={3}
            >

                <Grid size={{ xs: 12, md: 6 }}>

                    <SkeletonCard height={300} />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <SkeletonCard height={300} />

                </Grid>

            </Grid>

        </Stack>

    );

};

export default DashboardSkeleton;