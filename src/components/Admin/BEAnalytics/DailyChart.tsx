import {
  Paper,
  Typography,
  Box
} from "@mui/material";

import {

  ResponsiveContainer,

  LineChart,

  Line,

  CartesianGrid,

  XAxis,

  YAxis,

  Tooltip,

  Legend

} from "recharts";

interface DailyData {

  date: string;

  views: number;

  clicks: number;

  cartAdds: number;

  orders: number;

  searches: number;

}

interface Props {

  data: DailyData[];

}

export default function DailyChart({

  data

}: Props) {

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

      <Box

        sx={{

          mb: 3,

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center"

        }}

      >

        <Typography

          variant="h6"

          sx={{

            fontWeight: 700,

            color: "#4A0E17"

          }}

        >

          Daily Analytics

        </Typography>

      </Box>

      <ResponsiveContainer

        width="100%"

        height={350}

      >

        <LineChart

          data={data}

        >

          <CartesianGrid

            strokeDasharray="3 3"

          />

          <XAxis

            dataKey="date"

          />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line

            type="monotone"

            dataKey="views"

            name="Views"

            stroke="#4A0E17"

            strokeWidth={3}

          />

          <Line

            type="monotone"

            dataKey="clicks"

            name="Clicks"

            stroke="#B89B73"

            strokeWidth={3}

          />

          <Line

            type="monotone"

            dataKey="cartAdds"

            name="Cart"

            stroke="#D2A679"

            strokeWidth={3}

          />

          <Line

            type="monotone"

            dataKey="orders"

            name="Orders"

            stroke="#000000"

            strokeWidth={3}

          />

          <Line

            type="monotone"

            dataKey="searches"

            name="Searches"

            stroke="#1976d2"

            strokeWidth={3}

          />

        </LineChart>

      </ResponsiveContainer>

    </Paper>

  );

}