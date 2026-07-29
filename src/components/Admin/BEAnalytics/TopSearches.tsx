import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Chip
} from "@mui/material";

interface Search {

  keyword: string;

  totalSearches: number;

}

interface Props {

  searches: Search[];

}

export default function TopSearches({

  searches

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

      <Box
        sx={{
          p: 3
        }}
      >

        <Typography

          variant="h6"

          sx={{

            color: "#4A0E17",

            fontWeight: 700

          }}

        >

          Top Search Keywords

        </Typography>

      </Box>

      <TableContainer>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell width={80}>
                #
              </TableCell>

              <TableCell>

                Keyword

              </TableCell>

              <TableCell align="center">

                Searches

              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {searches.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={3}
                  align="center"
                >

                  No Search Data

                </TableCell>

              </TableRow>

            ) : (

              searches.map((item, index) => (

                <TableRow
                  hover
                  key={item.keyword}
                >

                  <TableCell>

                    {index + 1}

                  </TableCell>

                  <TableCell>

                    <Chip

                      label={item.keyword}

                      sx={{

                        bgcolor: "#E5D5BC",

                        color: "#4A0E17",

                        fontWeight: 600

                      }}

                    />

                  </TableCell>

                  <TableCell
                    align="center"
                  >

                    <Typography
                      fontWeight={700}
                    >

                      {item.totalSearches}

                    </Typography>

                  </TableCell>

                </TableRow>

              ))

            )}

          </TableBody>

        </Table>

      </TableContainer>

    </Paper>

  );

}