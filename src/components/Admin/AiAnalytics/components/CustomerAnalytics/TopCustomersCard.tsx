import {
    Avatar,
    Box,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";

import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

import SectionCard from "../../../../../components/Admin/AiAnalytics/components/common/SectionCard";

import { Customer } from "../../../../../types/ai/customer";

interface Props {
    customers: Customer[];
}

function segmentColor(segment: string) {

    switch (segment) {

        case "VIP":
            return "#B89B73";

        case "Premium":
            return "#7C3AED";

        case "Regular":
            return "#2563EB";

        default:
            return "#16A34A";
    }

}

function rankColor(rank: string) {

    switch (rank) {

        case "Gold":
            return "#D4AF37";

        case "Silver":
            return "#A8A8A8";

        case "Bronze":
            return "#B87333";

        default:
            return "#666";

    }

}

export default function TopCustomersCard({

    customers

}: Props) {

    return (

        <SectionCard

            title="Top Customers"

            subtitle="Highest value customers based on lifetime spending."

            badge={`${customers.length} Customers`}

        >

            {

                customers.length === 0 && (

                    <Box sx={{ py: 4, textAlign: "center" }}>

                        <Typography color="text.secondary">

                            No customer data available for the current filters.

                        </Typography>

                    </Box>

                )

            }

            <List disablePadding>

                {

                    customers.map((customer, index) => {

                        const medal =

                            index === 0

                                ? "🥇"

                                : index === 1

                                ? "🥈"

                                : index === 2

                                ? "🥉"

                                : `#${index + 1}`;

                        return (

                            <Box

                                key={customer.customerId}

                            >

                                <ListItem

                                    disableGutters

                                    sx={{

                                        py: 2,

                                        transition: ".25s",

                                        borderRadius: 2,

                                        flexWrap: "wrap",

                                        "&:hover": {

                                            bgcolor:

                                                "rgba(184,155,115,.06)"

                                        }

                                    }}

                                >

                                    <ListItemAvatar>

                                        <Avatar

                                            sx={{

                                                bgcolor: "#4A0E17",

                                                color: "#FFF",

                                                fontWeight: 700

                                            }}

                                        >

                                            {

                                                customer.name

                                                    ?.charAt(0)

                                                    .toUpperCase()

                                            }

                                        </Avatar>

                                    </ListItemAvatar>

                                    <ListItemText

                                        primary={

                                            <Stack

                                                direction="row"

                                                spacing={1}

                                                alignItems="center"

                                                flexWrap="wrap"

                                            >

                                                <Typography

                                                    fontWeight={700}

                                                    sx={{ wordBreak: "break-word" }}

                                                >

                                                    {customer.name}

                                                </Typography>

                                                <Chip

                                                    size="small"

                                                    label={

                                                        customer.segment

                                                    }

                                                    sx={{

                                                        bgcolor:

                                                            segmentColor(

                                                                customer.segment

                                                            ),

                                                        color: "#FFF",

                                                        fontWeight: 700

                                                    }}

                                                />

                                                <Chip

                                                    size="small"

                                                    label={

                                                        customer.lifetimeRank

                                                    }

                                                    sx={{

                                                        bgcolor:

                                                            `${rankColor(

                                                                customer.lifetimeRank

                                                            )}20`,

                                                        color:

                                                            rankColor(

                                                                customer.lifetimeRank

                                                            ),

                                                        fontWeight: 700

                                                    }}

                                                />

                                            </Stack>

                                        }

                                        secondary={

                                            <Stack

                                                direction={{

                                                    xs: "column",

                                                    md: "row"

                                                }}

                                                spacing={{ xs: .5, md: 2 }}

                                                mt={1}

                                            >

                                                <Stack

                                                    direction="row"

                                                    spacing={.5}

                                                    alignItems="center"

                                                >

                                                    <CurrencyRupeeRoundedIcon

                                                        sx={{

                                                            fontSize: 18,

                                                            color: "#059669"

                                                        }}

                                                    />

                                                    <Typography

                                                        variant="body2"

                                                    >

                                                        ₹

                                                        {

                                                            customer.totalSpent.toLocaleString()

                                                        }

                                                    </Typography>

                                                </Stack>

                                                <Stack

                                                    direction="row"

                                                    spacing={.5}

                                                    alignItems="center"

                                                >

                                                    <ShoppingBagRoundedIcon

                                                        sx={{

                                                            fontSize: 18,

                                                            color: "#2563EB"

                                                        }}

                                                    />

                                                    <Typography

                                                        variant="body2"

                                                    >

                                                        {

                                                            customer.totalOrders

                                                        }

                                                        {" "}Orders

                                                    </Typography>

                                                </Stack>

                                                <Typography

                                                    variant="body2"

                                                    sx={{

                                                        color: "#B45309",

                                                        fontWeight: 600

                                                    }}

                                                >

                                                    {

                                                        customer.revenueContribution

                                                    }

                                                    %

                                                    {" "}Contribution

                                                </Typography>

                                            </Stack>

                                        }

                                    />

                                    <Typography

                                        sx={{

                                            minWidth: 40,

                                            textAlign: "right",

                                            fontSize: "1.15rem",

                                            fontWeight: 700

                                        }}

                                    >

                                        {medal}

                                    </Typography>

                                </ListItem>

                                {

                                    index !== customers.length - 1 && (

                                        <Divider />

                                    )

                                }

                            </Box>

                        );

                    })

                }

            </List>

        </SectionCard>

    );

}
