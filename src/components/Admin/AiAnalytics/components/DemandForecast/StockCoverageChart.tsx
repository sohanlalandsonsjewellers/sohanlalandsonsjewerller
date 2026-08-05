import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {

    ResponsiveContainer,

    BarChart,

    Bar,

    CartesianGrid,

    XAxis,

    YAxis,

    Tooltip

} from "recharts";

import {

    DemandInsightItem

} from "../../../../../types/ai/demandForecast";

interface Props{

    insights:DemandInsightItem[];

}

export default function StockCoverageChart({

    insights

}:Props){

    const data=

        insights

            .slice(0,10)

            .map(item=>({

                name:item.name.length>10

                    ?`${item.name.slice(0,10)}...`

                    :item.name,

                coverage:

                    item.stockCoveragePercent

            }));

    return(

        <Card

            elevation={0}

            sx={{

                height:"100%",

                borderRadius:"22px"

            }}

        >

            <CardContent>

                <Typography

                    variant="h6"

                    fontWeight={700}

                    mb={2}

                >

                    Stock Coverage

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={350}

                >

                    <BarChart

                        data={data}

                    >

                        <CartesianGrid strokeDasharray="3 3"/>

                        <XAxis dataKey="name"/>

                        <YAxis/>

                        <Tooltip/>

                        <Bar

                            dataKey="coverage"

                            fill="#4A0E17"

                        />

                    </BarChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}