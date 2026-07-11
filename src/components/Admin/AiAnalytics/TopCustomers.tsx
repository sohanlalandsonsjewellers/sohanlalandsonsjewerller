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

interface Customer {

    name: string;

    phone: string;

    orders: number;

    bills: number;

    revenue: number;

}

interface Props {

    customers: Customer[];

}

export default function TopCustomers({

    customers

}: Props) {

    const getRank = (index: number) => {

        switch (index) {

            case 0:
                return "🥇";

            case 1:
                return "🥈";

            case 2:
                return "🥉";

            default:
                return index + 1;

        }

    };

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

                    Top Customers

                </Typography>

            </Box>

            <TableContainer>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell width={70}>
                                Rank
                            </TableCell>

                            <TableCell>
                                Customer
                            </TableCell>

                            <TableCell>
                                Phone
                            </TableCell>

                            <TableCell align="center">
                                Orders
                            </TableCell>

                            <TableCell align="center">
                                Bills
                            </TableCell>

                            <TableCell align="right">
                                Revenue
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {customers.length === 0 ? (

                            <TableRow>

                                <TableCell
                                    colSpan={6}
                                    align="center"
                                    sx={{
                                        py: 5
                                    }}
                                >

                                    No Customer Data Available

                                </TableCell>

                            </TableRow>

                        ) : (

                            customers.map(

                                (customer, index) => (

                                    <TableRow
                                        key={`${customer.phone}-${index}`}
                                        hover
                                    >

                                        <TableCell>

                                            <Typography
                                                fontWeight={700}
                                            >

                                                {getRank(index)}

                                            </Typography>

                                        </TableCell>

                                        <TableCell>

                                            <Typography
                                                fontWeight={600}
                                            >

                                                {customer.name}

                                            </Typography>

                                        </TableCell>

                                        <TableCell>

                                            {customer.phone}

                                        </TableCell>

                                        <TableCell
                                            align="center"
                                        >

                                            <Chip
                                                label={customer.orders}
                                                size="small"
                                                color="primary"
                                                variant="outlined"
                                            />

                                        </TableCell>

                                        <TableCell
                                            align="center"
                                        >

                                            <Chip
                                                label={customer.bills}
                                                size="small"
                                                color="success"
                                                variant="outlined"
                                            />

                                        </TableCell>

                                        <TableCell
                                            align="right"
                                        >

                                            <Typography
                                                fontWeight={700}
                                                color="#4A0E17"
                                            >

                                                ₹{customer.revenue.toLocaleString("en-IN", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })}

                                            </Typography>

                                        </TableCell>

                                    </TableRow>

                                )

                            )

                        )}

                    </TableBody>

                </Table>

            </TableContainer>

        </Paper>

    );

}