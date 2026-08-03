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

    PriceProduct

} from "../../../../../types/ai/price";

interface Props {

    products: PriceProduct[];

}

export default function PriceRecommendations({

    products

}: Props) {

    const recommendations =

        products.filter(

            product =>

                product.action !== "Maintain"

        );

    return (

        <SectionCard

            title="AI Price Recommendations"

            subtitle="AI generated pricing actions for your products"

        >

            {

                recommendations.length === 0 ?

                (

                    <Alert severity="success">

                        No pricing recommendations available.

                    </Alert>

                )

                :

                (

                    <Grid

                        container

                        spacing={3}

                        sx={{

                            mb:4

                        }}

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

                                                "0 12px 28px rgba(0,0,0,.05)",

                                                transition:".3s",

                                                "&:hover":{

                                                    transform:

                                                        "translateY(-5px)",

                                                    boxShadow:

                                                    "0 18px 40px rgba(0,0,0,.10)"

                                                }

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

                                                    flexWrap="wrap"

                                                    mb={2}

                                                >

                                                    <Chip

                                                        size="small"

                                                        label={

                                                            product.priority

                                                        }

                                                        color={

                                                            product.priority==="Critical"

                                                            ?

                                                            "error"

                                                            :

                                                            product.priority==="High"

                                                            ?

                                                            "warning"

                                                            :

                                                            product.priority==="Medium"

                                                            ?

                                                            "primary"

                                                            :

                                                            "success"

                                                        }

                                                    />

                                                    <Chip

                                                        size="small"

                                                        label={`${product.confidence}% AI`}

                                                        color="secondary"

                                                    />

                                                </Stack>

                                                <Typography

                                                    fontWeight={700}

                                                    gutterBottom

                                                >

                                                    {

                                                        product.action

                                                    }

                                                </Typography>

                                                <Typography

                                                    variant="body2"

                                                    color="text.secondary"

                                                    mb={2}

                                                >

                                                    {

                                                        product.recommendation

                                                    }

                                                </Typography>

                                                <Typography

                                                    variant="body2"

                                                    sx={{

                                                        color:"#4A0E17",

                                                        fontWeight:600,

                                                        mb:1

                                                    }}

                                                >

                                                    Final Recommendation

                                                </Typography>

                                                <Typography

                                                    variant="body2"

                                                    color="text.secondary"

                                                    mb={2}

                                                >

                                                    {

                                                        product.finalRecommendation

                                                    }

                                                </Typography>

                                                <Stack

                                                    spacing={1}

                                                >

                                                    <Typography

                                                        variant="caption"

                                                        color="text.secondary"

                                                    >

                                                        Timeline

                                                    </Typography>

                                                    <Typography

                                                        fontWeight={600}

                                                    >

                                                        {

                                                            product.timeline

                                                        }

                                                    </Typography>

                                                    <Typography

                                                        variant="caption"

                                                        color="text.secondary"

                                                    >

                                                        Next Action

                                                    </Typography>

                                                    <Typography

                                                        fontWeight={600}

                                                    >

                                                        {

                                                            product.nextAction

                                                        }

                                                    </Typography>

                                                </Stack>

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