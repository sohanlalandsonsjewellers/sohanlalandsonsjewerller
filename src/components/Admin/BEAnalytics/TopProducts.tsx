import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box
} from "@mui/material";

interface Product {

  name: string;

  category: string;

  views: number;

  clicks: number;

  cartAdds: number;

  orders: number;

}

interface Props {

  products: Product[];

}

export default function TopProducts({

  products

}: Props) {

  return (

    <Paper
      elevation={0}
      sx={{
        mt: 4,
        border: "1px solid rgba(229,213,188,.35)",
        bgcolor: "#FFFDF9",
        overflow: "hidden"
      }}
    >

      <Box sx={{ p: 3 }}>

        <Typography
          variant="h6"
          sx={{
            color: "#4A0E17",
            fontWeight: 700
          }}
        >
          Top Products
        </Typography>

      </Box>

      <TableContainer>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell sx={{ fontWeight: 700 }}>
                Product
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Category
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Views
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Clicks
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Cart
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Orders
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {products.map((product) => (

              <TableRow
                key={product.name}
                hover
              >

                <TableCell>

                  <Typography
                    fontWeight={600}
                    color="#4A0E17"
                  >

                    {product.name}

                  </Typography>

                </TableCell>

                <TableCell>

                  {product.category}

                </TableCell>

                <TableCell align="center">

                  {product.views}

                </TableCell>

                <TableCell align="center">

                  {product.clicks}

                </TableCell>

                <TableCell align="center">

                  {product.cartAdds}

                </TableCell>

                <TableCell align="center">

                  {product.orders}

                </TableCell>

              </TableRow>

            ))}

            {products.length === 0 && (

              <TableRow>

                <TableCell
                  colSpan={6}
                  align="center"
                  sx={{
                    py: 5,
                    color: "#777"
                  }}
                >

                  No Product Analytics Available

                </TableCell>

              </TableRow>

            )}

          </TableBody>

        </Table>

      </TableContainer>

    </Paper>

  );

}