import {
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import {
    Inventory2Rounded,
    MonetizationOnRounded,
    PeopleRounded,
    ShoppingBagRounded,
    ShoppingCartRounded,
    TrendingUpRounded,
} from "@mui/icons-material";

import { Summary } from "../../../../../types/ai/businessSummary";

interface Props {
    summary: Summary;
}

interface KPIItem {
    title: string;
    value: string | number;
    icon: React.ReactNode;
}

const KPICards = ({ summary }: Props) => {

    const cards: KPIItem[] = [

        {
            title: "Total Revenue",
            value: `₹${summary.totalRevenue.toLocaleString()}`,
            icon: <MonetizationOnRounded fontSize="large" />,
        },

        {
            title: "Total Orders",
            value: summary.totalOrders,
            icon: <ShoppingCartRounded fontSize="large" />,
        },

        {
            title: "Customers",
            value: summary.totalCustomers,
            icon: <PeopleRounded fontSize="large" />,
        },

        {
            title: "Products",
            value: summary.totalProducts,
            icon: <ShoppingBagRounded fontSize="large" />,
        },

        {
            title: "Average Order Value",
            value: `₹${summary.averageOrderValue.toLocaleString()}`,
            icon: <TrendingUpRounded fontSize="large" />,
        },

        {
            title: "Inventory Value",
            value: `₹${summary.inventoryValue.toLocaleString()}`,
            icon: <Inventory2Rounded fontSize="large" />,
        },

    ];

    return (

        <Grid
            container
            spacing={3}
        >

            {cards.map((card) => (

                <Grid
                    key={card.title}
                    size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
                >

                    <Card
                        elevation={3}
                        sx={{
                            borderRadius: 3,
                            height: "100%",
                        }}
                    >

                        <CardContent>

                            <Stack spacing={2}>

                                {card.icon}

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    variant="h5"
                                    fontWeight={700}
                                >
                                    {card.value}
                                </Typography>

                            </Stack>

                        </CardContent>

                    </Card>

                </Grid>

            ))}

        </Grid>

    );

};

export default KPICards;