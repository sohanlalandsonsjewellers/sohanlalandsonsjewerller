import {

    Alert,

    Chip,

    Grid,

    Stack,

    Typography

} from "@mui/material";

import SectionCard from "../common/SectionCard";

import {

    DemandInsightItem

} from "../../../../../types/ai/demandForecast";

interface Props{

    insights:DemandInsightItem[];

}

export default function DemandRecommendationCards({

    insights

}:Props){

    const recommendations=

        insights.filter(

            item=>

                item.priority!=="Normal"

        );

    return(

        <SectionCard

            title="AI Recommendations"

            subtitle="Demand optimization"

        >

            {

                recommendations.length===0

                ?

                <Alert severity="success">

                    No recommendations.

                </Alert>

                :

                <Grid container spacing={3}>

                    {

                        recommendations.map(item=>(

                            <Grid

                                key={item.productId}

                                size={{

                                    xs:12,

                                    md:6,

                                    xl:4

                                }}

                            >

                                <Stack

                                    spacing={2}

                                    sx={{

                                        p:3,

                                        border:"1px solid rgba(184,155,115,.2)",

                                        borderRadius:3

                                    }}

                                >

                                    <Typography

                                        fontWeight={700}

                                    >

                                        {item.name}

                                    </Typography>

                                    <Chip

                                        label={item.priority}

                                        color={

                                            item.priority==="Critical"

                                            ?"error"

                                            :item.priority==="High"

                                            ?"warning"

                                            :"primary"

                                        }

                                    />

                                    <Typography>

                                        {

                                            item.businessRecommendation

                                        }

                                    </Typography>

                                </Stack>

                            </Grid>

                        ))

                    }

                </Grid>

            }

        </SectionCard>

    );

}