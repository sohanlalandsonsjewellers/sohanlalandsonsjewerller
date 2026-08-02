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
    Tooltip,
    Legend
} from "recharts";

import {
    InventoryProduct
} from "../../../../../types/ai/inventory";

interface Props {

    products: InventoryProduct[];

}

const COLORS = [

    "#16A34A", // Healthy

    "#F59E0B", // Low

    "#DC2626", // Critical

    "#7F1D1D" // Out Of Stock

];

export default function InventoryHealthChart({

    products

}: Props) {

    const healthy = products.filter(

        product =>

            product.inventoryHealth === "Healthy"

    ).length;

    const low = products.filter(

        product =>

            product.inventoryHealth === "Low Stock"

    ).length;

    const critical = products.filter(

        product =>

            product.inventoryHealth === "Critical"

    ).length;

    const outOfStock = products.filter(

        product =>

            product.inventoryHealth === "Out Of Stock"

    ).length;

    const chartData = [

        {

            name: "Healthy",

            value: healthy

        },

        {

            name: "Low Stock",

            value: low

        },

        {

            name: "Critical",

            value: critical

        },

        {

            name: "Out Of Stock",

            value: outOfStock

        }

    ];

    return (

        <Card

            elevation={0}

            sx={{

                height: "100%",

                borderRadius: "22px",

                border:

                    "1px solid rgba(184,155,115,.18)",

                boxShadow:

                    "0 15px 35px rgba(0,0,0,.05)"

            }}

        >

            <CardContent>

                <Typography

                    variant="h6"

                    fontWeight={700}

                    color="#4A0E17"

                    mb={1}

                >

                    Inventory Health

                </Typography>

                <Typography

                    variant="body2"

                    color="text.secondary"

                    mb={3}

                >

                    Overall inventory health distribution.

                </Typography>

                <ResponsiveContainer

                    width="100%"

                    height={350}

                >

                    <PieChart>

                        <Pie

                            data={chartData}

                            dataKey="value"

                            nameKey="name"

                            innerRadius={70}

                            outerRadius={110}

                            paddingAngle={4}

                        >

                            {

                                chartData.map(

                                    (

                                        _,

                                        index

                                    ) => (

                                        <Cell

                                            key={index}

                                            fill={

                                                COLORS[index]

                                            }

                                        />

                                    )

                                )

                            }

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>

    );

}