import {
  Grid,
  Paper,
  Typography
} from "@mui/material";

interface Props {

  summary: {

    totalEvents: number;

    productViews: number;

    productClicks: number;

    searches: number;

    wishlistAdds: number;

    cartAdds: number;

    orders: number;

    conversionRate: number;

  };

}

export default function SummaryCards({

  summary

}: Props) {

  const cards = [

    {

      title: "Total Events",

      value: summary.totalEvents

    },

    {

      title: "Product Views",

      value: summary.productViews

    },

    {

      title: "Product Clicks",

      value: summary.productClicks

    },

    {

      title: "Searches",

      value: summary.searches

    },

    {

      title: "Wishlist Adds",

      value: summary.wishlistAdds

    },

    {

      title: "Cart Adds",

      value: summary.cartAdds

    },

    {

      title: "Orders",

      value: summary.orders

    },

    {

      title: "Conversion Rate",

      value: `${summary.conversionRate}%`

    }

  ];

  return (

    <Grid
      container
      spacing={3}
      sx={{
        mb: 4
      }}
    >

      {cards.map((card) => (

        <Grid
          key={card.title}
          size={{
            xs: 12,
            sm: 6,
            md: 3
          }}
        >

          <Paper

            elevation={0}

            sx={{

              p: 3,

              height: "100%",

              border: "1px solid rgba(229,213,188,.35)",

              bgcolor: "#FFFDF9",

              transition: ".25s",

              "&:hover": {

                boxShadow:
                  "0 8px 18px rgba(0,0,0,.08)"

              }

            }}

          >

            <Typography

              sx={{

                color: "#777",

                fontSize: ".9rem"

              }}

            >

              {card.title}

            </Typography>

            <Typography

              variant="h4"

              sx={{

                mt: 2,

                fontWeight: 700,

                color: "#4A0E17"

              }}

            >

              {card.value}

            </Typography>

          </Paper>

        </Grid>

      ))}

    </Grid>

  );

}