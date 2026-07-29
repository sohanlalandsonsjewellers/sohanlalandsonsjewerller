import {
  Grid,
  Paper,
  Typography,
  LinearProgress,
  Box
} from "@mui/material";

interface Funnel {

  views: number;

  clicks: number;

  cartAdds: number;

  orders: number;

  viewToClick: number;

  clickToCart: number;

  cartToOrder: number;

}

interface Props {

  funnel: Funnel;

}

export default function FunnelCard({

  funnel

}: Props) {

  const cards = [

    {

      title: "Product Views",

      count: funnel.views,

      percentage: 100

    },

    {

      title: "Product Clicks",

      count: funnel.clicks,

      percentage: funnel.viewToClick

    },

    {

      title: "Added To Cart",

      count: funnel.cartAdds,

      percentage: funnel.clickToCart

    },

    {

      title: "Orders",

      count: funnel.orders,

      percentage: funnel.cartToOrder

    }

  ];

  return (

    <Paper

      elevation={0}

      sx={{

        mt: 4,

        p: 3,

        border: "1px solid rgba(229,213,188,.35)",

        bgcolor: "#FFFDF9"

      }}

    >

      <Typography

        variant="h6"

        sx={{

          color: "#4A0E17",

          fontWeight: 700,

          mb: 4

        }}

      >

        Conversion Funnel

      </Typography>

      <Grid

        container

        spacing={3}

      >

        {cards.map((item) => (

          <Grid

            key={item.title}

            size={{

              xs: 12,

              md: 6

            }}

          >

            <Box>

              <Box

                sx={{

                  display: "flex",

                  justifyContent: "space-between",

                  mb: 1

                }}

              >

                <Typography

                  fontWeight={600}

                >

                  {item.title}

                </Typography>

                <Typography

                  fontWeight={700}

                >

                  {item.count}

                </Typography>

              </Box>

              <LinearProgress

                variant="determinate"

                value={item.percentage}

                sx={{

                  height: 10,

                  borderRadius: 5,

                  bgcolor: "#EEE",

                  "& .MuiLinearProgress-bar": {

                    backgroundColor: "#4A0E17"

                  }

                }}

              />

              <Typography

                sx={{

                  mt: .7,

                  color: "#666",

                  fontSize: ".85rem"

                }}

              >

                {item.percentage}%

              </Typography>

            </Box>

          </Grid>

        ))}

      </Grid>

    </Paper>

  );

}