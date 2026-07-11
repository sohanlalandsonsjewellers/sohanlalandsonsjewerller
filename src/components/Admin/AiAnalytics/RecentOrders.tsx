import { useEffect, useState } from "react";

import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    CircularProgress,
    Box
} from "@mui/material";

import { getRecentOrders } from "../../../api/analytics";

interface Order {

    id: string;

    customerName: string;

    totalAmount: number;

    status: string;

    createdAt: string;

}

export default function RecentOrders() {

    const [loading, setLoading] =
        useState(true);

    const [orders, setOrders] =
        useState<Order[]>([]);

    useEffect(() => {

        loadOrders();

    }, []);

    async function loadOrders() {

        try {

            setLoading(true);

            const res =
                await getRecentOrders();

            setOrders(res.orders);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <Paper
            elevation={0}
            sx={{
                mt: 4,
                bgcolor: "#FFFDF9",
                border: "1px solid rgba(229,213,188,.35)"
            }}
        >

            <Box sx={{ p: 3 }}>

                <Typography
                    variant="h5"
                    sx={{
                        color: "#4A0E17",
                        fontWeight: 700,
                        fontFamily: '"Playfair Display", serif'
                    }}
                >

                    Recent Orders

                </Typography>

            </Box>

            {loading ? (

                <Box
                    sx={{
                        py: 6,
                        display: "flex",
                        justifyContent: "center"
                    }}
                >

                    <CircularProgress />

                </Box>

            ) : (

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>

                                Order ID

                            </TableCell>

                            <TableCell>

                                Customer

                            </TableCell>

                            <TableCell>

                                Amount

                            </TableCell>

                            <TableCell>

                                Status

                            </TableCell>

                            <TableCell>

                                Date

                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {orders.map((order) => (

                            <TableRow
                                key={order.id}
                                hover
                            >

                                <TableCell>

                                    #{order.id.slice(-6).toUpperCase()}

                                </TableCell>

                                <TableCell>

                                    {order.customerName}

                                </TableCell>

                                <TableCell>

                                    ₹{order.totalAmount.toLocaleString("en-IN", {

                                        minimumFractionDigits: 2,

                                        maximumFractionDigits: 2

                                    })}

                                </TableCell>

                                <TableCell>

                                    <Chip

                                        label={order.status}

                                        color={
                                            order.status === "ACCEPTED"
                                                ? "success"
                                                : order.status === "PENDING"
                                                    ? "warning"
                                                    : "default"
                                        }

                                        size="small"

                                    />

                                </TableCell>

                                <TableCell>

                                    {new Date(

                                        order.createdAt

                                    ).toLocaleDateString(

                                        "en-GB",

                                        {

                                            day: "2-digit",

                                            month: "short",

                                            year: "numeric"

                                        }

                                    )}

                                </TableCell>

                            </TableRow>

                        ))}

                    </TableBody>

                </Table>

            )}

        </Paper>

    );

}