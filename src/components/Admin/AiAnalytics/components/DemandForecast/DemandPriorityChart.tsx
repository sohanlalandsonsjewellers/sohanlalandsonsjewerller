import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip
} from "recharts";

import {

    DemandInsightItem

} from "../../../../../types/ai/demandForecast";

interface Props{

    insights:DemandInsightItem[];

}

const COLORS=[

    "#DC2626",

    "#F59E0B",

    "#2563EB",

    "#16A34A",

    "#94A3B8"

];

export default function DemandPriorityChart({

    insights

}:Props){

    const priorities=[

        "Critical",

        "High",

        "Medium",

        "Low",

        "Normal"

    ];

    const data=

        priorities.map(priority=>({

            name:priority,

            value:

                insights.filter(

                    item=>

                        item.priority===priority

                ).length

        }));

    return(

        <Card elevation={0}

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

                    Demand Priority

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={350}

                >

                    <PieChart>

                        <Pie

                            data={data}

                            dataKey="value"

                            outerRadius={110}

                        >

                            {

                                data.map((_,i)=>(

                                    <Cell

                                        key={i}

                                        fill={COLORS[i]}

                                    />

                                ))

                            }

                        </Pie>

                        <Tooltip/>

                    </PieChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}