import {
    Avatar,
    Card,
    CardContent,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

import { ProductAnalytics } from "../../../../../types/ai/businessSummary";

interface Props {
    products: ProductAnalytics[];
}

const TopSellingProductsTable = ({ products }: Props) => {

    return (

        <Card
            elevation={3}
            sx={{
                borderRadius: 3,
            }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                    fontWeight={700}
                    mb={3}
                >
                    🏆 Top Selling Products
                </Typography>

                <TableContainer>

                    <Table>

                        <TableHead>

                            <TableRow>

                                <TableCell>

                                    Rank

                                </TableCell>

                                <TableCell>

                                    Product

                                </TableCell>

                                <TableCell>

                                    SKU

                                </TableCell>

                                <TableCell align="center">

                                    Sold Qty

                                </TableCell>

                                <TableCell align="right">

                                    Revenue

                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {

                                products.length === 0 ? (

                                    <TableRow>

                                        <TableCell
                                            colSpan={5}
                                            align="center"
                                        >

                                            No sales available.

                                        </TableCell>

                                    </TableRow>

                                ) : (

                                    products.map((product, index) => (

                                        <TableRow
                                            key={product._id}
                                            hover
                                        >

                                            <TableCell>

                                                <Chip
                                                    icon={
                                                        <EmojiEventsRoundedIcon />
                                                    }
                                                    label={`#${index + 1}`}
                                                    color={
                                                        index === 0
                                                            ? "warning"
                                                            : index === 1
                                                            ? "primary"
                                                            : "default"
                                                    }
                                                />

                                            </TableCell>

                                            <TableCell>

                                                <Avatar
                                                    src={product.image}
                                                    variant="rounded"
                                                    sx={{
                                                        width: 56,
                                                        height: 56,
                                                        mr: 2,
                                                        display: "inline-flex",
                                                        verticalAlign: "middle",
                                                    }}
                                                />

                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        fontWeight: 600,
                                                        ml: 2,
                                                    }}
                                                >

                                                    {product.name}

                                                </Typography>

                                            </TableCell>

                                            <TableCell>

                                                {product.sku}

                                            </TableCell>

                                            <TableCell align="center">

                                                {product.soldQty}

                                            </TableCell>

                                            <TableCell align="right">

                                                ₹
                                                {product.revenue.toLocaleString()}

                                            </TableCell>

                                        </TableRow>

                                    ))

                                )

                            }

                        </TableBody>

                    </Table>

                </TableContainer>

            </CardContent>

        </Card>

    );

};

export default TopSellingProductsTable;