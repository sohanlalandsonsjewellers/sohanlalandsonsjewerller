import {
    Alert,
    Card,
    CardContent,
    Chip,
    Grid,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import SectionCard from "../common/SectionCard";

import {

    ReorderProduct

} from "../../../../../types/ai/reorder";

interface Props {

    products: ReorderProduct[];

}

export default function ReorderRecommendations({

    products

}: Props) {

    const recommendations =

        products.filter(

            product =>

                product.priority !== "None"

        );

    return (

        <SectionCard

            title="AI Reorder Recommendations"

            subtitle="AI generated reorder decisions"

        >

            {

                recommendations.length === 0 ?

                (

                    <Alert severity="success">

                        No reorder recommendations available.

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

                                                transition:".30s",

                                                "&:hover":{

                                                    transform:

                                                        "translateY(-5px)",

                                                    boxShadow:

                                                    "0 18px 45px rgba(0,0,0,.10)"

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

                                                            product.priority ===

                                                            "Critical"

                                                            ?

                                                            "error"

                                                            :

                                                            product.priority ===

                                                            "High"

                                                            ?

                                                            "warning"

                                                            :

                                                            product.priority ===

                                                            "Medium"

                                                            ?

                                                            "primary"

                                                            :

                                                            "success"

                                                        }

                                                    />

                                                    <Chip

                                                        size="small"

                                                        label={

                                                            product.confidence

                                                        }

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

                                                        product.reason

                                                    }

                                                </Typography>

                                                <Typography

                                                    variant="subtitle2"

                                                    fontWeight={700}

                                                    color="#4A0E17"

                                                    gutterBottom

                                                >

                                                    AI Explanation

                                                </Typography>

                                                <List

                                                    dense

                                                >

                                                    {

                                                        product.explanation.map(

                                                            (

                                                                item,

                                                                index

                                                            ) => (

                                                                <ListItem

                                                                    key={

                                                                        index

                                                                    }

                                                                    disablePadding

                                                                >

                                                                    <ListItemText

                                                                        primary={`• ${item}`}

                                                                    />

                                                                </ListItem>

                                                            )

                                                        )

                                                    }

                                                </List>

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