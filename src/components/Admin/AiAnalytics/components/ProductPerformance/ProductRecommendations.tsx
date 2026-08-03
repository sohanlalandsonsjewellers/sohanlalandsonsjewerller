import {
    Alert,
    Card,
    CardContent,
    Chip,
    Grid,
    Stack,
    Typography
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import SectionCard from "../common/SectionCard";

import {

    ProductPerformance

} from "../../../../../types/ai/product";

interface Props {

    products: ProductPerformance[];

}

export default function ProductRecommendations({

    products

}: Props) {

    const recommendations =

        products.filter(

            product =>

                product.strategy.action !== "Maintain"

        );

    return (

        <SectionCard

            title="AI Product Recommendations"

            subtitle="AI generated product optimization strategies"

        >

            {

                recommendations.length === 0 ?

                (

                    <Alert severity="success">

                        No recommendations available.

                    </Alert>

                )

                :

                (

                    <Grid

                        container

                        spacing={3}

                    >

                        {

                            recommendations.map(

                                product => (

                                    <Grid

                                        key={

                                            product.productId

                                        }

                                        size={{

                                            xs:12,

                                            md:6,

                                            xl:4

                                        }}

                                    >

                                        <Card

                                            elevation={0}

                                            sx={{

                                                height:"100%",

                                                borderRadius:"20px",

                                                border:

                                                "1px solid rgba(184,155,115,.18)",

                                                boxShadow:

                                                "0 12px 28px rgba(0,0,0,.05)"

                                            }}

                                        >

                                            <CardContent>

                                                <Stack

                                                    direction="row"

                                                    justifyContent="space-between"

                                                    alignItems="center"

                                                    mb={2}

                                                >

                                                    <Typography

                                                        fontWeight={700}

                                                        color="#4A0E17"

                                                    >

                                                        {

                                                            product.name

                                                        }

                                                    </Typography>

                                                    <AutoAwesomeRoundedIcon

                                                        sx={{

                                                            color:"#B89B73"

                                                        }}

                                                    />

                                                </Stack>

                                                <Stack

                                                    direction="row"

                                                    spacing={1}

                                                    mb={2}

                                                >

                                                    <Chip

                                                        size="small"

                                                        label={

                                                            product.grade.grade

                                                        }

                                                        color="primary"

                                                    />

                                                    <Chip

                                                        size="small"

                                                        label={

                                                            product.strategy.priority

                                                        }

                                                        color={

                                                            product.strategy.priority ===

                                                            "Critical"

                                                            ?

                                                            "error"

                                                            :

                                                            product.strategy.priority ===

                                                            "High"

                                                            ?

                                                            "warning"

                                                            :

                                                            product.strategy.priority ===

                                                            "Medium"

                                                            ?

                                                            "primary"

                                                            :

                                                            "success"

                                                        }

                                                    />

                                                </Stack>

                                                <Typography

                                                    fontWeight={600}

                                                    gutterBottom

                                                >

                                                    {

                                                        product.strategy.action

                                                    }

                                                </Typography>

                                                <Typography

                                                    variant="body2"

                                                    color="text.secondary"

                                                >

                                                    {

                                                        product.explanation

                                                    }

                                                </Typography>

                                            </CardContent>

                                        </Card>

                                    </Grid>

                                )

                            )

                        }

                    </Grid>

                )

            }

        </SectionCard>

    );

}