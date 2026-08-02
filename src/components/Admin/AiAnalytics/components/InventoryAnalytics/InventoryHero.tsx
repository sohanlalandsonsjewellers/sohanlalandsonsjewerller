import {
    Card,
    CardContent,
    Grid,
    Stack,
    Typography
} from "@mui/material";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

interface Props {

    totalProducts: number;

    totalStock: number;

    inventoryValue: number;

    averageInventoryTurnover: number;

}

interface HeroCardProps {

    title: string;

    value: string | number;

    subtitle: string;

    icon: React.ReactNode;

}

function HeroCard({

    title,

    value,

    subtitle,

    icon

}: HeroCardProps) {

    return (

        <Card

            elevation={0}

            sx={{

                height: "100%",

                borderRadius: "22px",

                border: "1px solid rgba(184,155,115,.18)",

                background:

                    "linear-gradient(180deg,#FFF 0%,#FCFAF8 100%)",

                boxShadow:

                    "0 15px 35px rgba(0,0,0,.05)"

            }}

        >

            <CardContent>

                <Stack

                    direction="row"

                    justifyContent="space-between"

                    alignItems="center"

                >

                    <Stack spacing={1}>

                        <Typography

                            variant="body2"

                            color="text.secondary"

                        >

                            {title}

                        </Typography>

                        <Typography

                            variant="h4"

                            fontWeight={700}

                            color="#4A0E17"

                        >

                            {value}

                        </Typography>

                        <Typography

                            variant="body2"

                            color="text.secondary"

                        >

                            {subtitle}

                        </Typography>

                    </Stack>

                    {icon}

                </Stack>

            </CardContent>

        </Card>

    );

}

export default function InventoryHero({

    totalProducts,

    totalStock,

    inventoryValue,

    averageInventoryTurnover

}: Props) {

    return (

        <Grid

            container

            spacing={3}

            sx={{

                mb:4

            }}

        >

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    xl:3

                }}

            >

                <HeroCard

                    title="Products"

                    value={totalProducts}

                    subtitle="Tracked Products"

                    icon={

                        <Inventory2RoundedIcon

                            sx={{

                                fontSize:42,

                                color:"#B89B73"

                            }}

                        />

                    }

                />

            </Grid>

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    xl:3

                }}

            >

                <HeroCard

                    title="Stock"

                    value={totalStock}

                    subtitle="Available Units"

                    icon={

                        <WarehouseRoundedIcon

                            sx={{

                                fontSize:42,

                                color:"#4A0E17"

                            }}

                        />

                    }

                />

            </Grid>

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    xl:3

                }}

            >

                <HeroCard

                    title="Inventory Value"

                    value={`₹${inventoryValue.toLocaleString()}`}

                    subtitle="Current Inventory"

                    icon={

                        <CurrencyRupeeRoundedIcon

                            sx={{

                                fontSize:42,

                                color:"#15803D"

                            }}

                        />

                    }

                />

            </Grid>

            <Grid

                size={{

                    xs:12,

                    sm:6,

                    xl:3

                }}

            >

                <HeroCard

                    title="Turnover"

                    value={averageInventoryTurnover.toFixed(2)}

                    subtitle="Average Turnover"

                    icon={

                        <AutorenewRoundedIcon

                            sx={{

                                fontSize:42,

                                color:"#2563EB"

                            }}

                        />

                    }

                />

            </Grid>

        </Grid>

    );

}