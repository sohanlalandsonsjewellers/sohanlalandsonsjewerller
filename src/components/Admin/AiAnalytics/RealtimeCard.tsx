import {
  Paper,
  Typography,
  Grid,
  Box,
  Chip
} from "@mui/material";

interface Realtime {

  last30Minutes: number;

  loggedInUsers: number;

  guestVisitors: number;

  lastActivity: string | null;

}

interface Props {

  realtime: Realtime;

}

export default function RealtimeCard({

  realtime

}: Props) {

  const cards = [

    {

      title: "Events (Last 30 Min)",

      value: realtime.last30Minutes

    },

    {

      title: "Logged In Users",

      value: realtime.loggedInUsers

    },

    {

      title: "Guest Visitors",

      value: realtime.guestVisitors

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

        Realtime Analytics

      </Typography>

      <Grid

        container

        spacing={3}

      >

        {cards.map((card) => (

          <Grid

            key={card.title}

            size={{

              xs: 12,

              sm: 4

            }}

          >

            <Paper

              elevation={0}

              sx={{

                p: 3,

                height: "100%",

                border: "1px solid rgba(229,213,188,.35)",

                textAlign: "center",

                bgcolor: "#FFFFFF"

              }}

            >

              <Typography

                sx={{

                  color: "#666",

                  fontSize: ".9rem"

                }}

              >

                {card.title}

              </Typography>

              <Typography

                variant="h4"

                sx={{

                  mt: 2,

                  color: "#4A0E17",

                  fontWeight: 700

                }}

              >

                {card.value}

              </Typography>

            </Paper>

          </Grid>

        ))}

      </Grid>

      <Box

        sx={{

          mt: 4,

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: 2

        }}

      >

        <Typography

          sx={{

            color: "#666"

          }}

        >

          Last Activity

        </Typography>

        <Chip

          color="success"

          label={
            realtime.lastActivity
              ? new Date(
                  realtime.lastActivity
                ).toLocaleString()
              : "No Activity"
          }

        />

      </Box>

    </Paper>

  );

}