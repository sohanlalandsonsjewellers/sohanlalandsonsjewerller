import {
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

import SectionCard from "../common/SectionCard";

import {
    InventoryProduct
} from "../../../../../types/ai/inventory";

interface Props {

    title: string;

    subtitle: string;

    products: InventoryProduct[];

    emptyMessage: string;

}

export default function InventoryDataTable({

    title,

    subtitle,

    products,

    emptyMessage

}: Props) {

    return (

        <SectionCard

            title={title}

            subtitle={subtitle}

        >

            {

                products.length === 0 ?

                (

                    <Typography

                        py={5}

                        textAlign="center"

                        color="text.secondary"

                    >

                        {emptyMessage}

                    </Typography>

                )

                :

                (

                    <TableContainer>

                        <Table size="small">

                            <TableHead>

                                <TableRow>

                                    <TableCell>

                                        Product

                                    </TableCell>

                                    <TableCell>

                                        SKU

                                    </TableCell>

                                    <TableCell>

                                        Stock

                                    </TableCell>

                                    <TableCell>

                                        Health

                                    </TableCell>

                                    <TableCell>

                                        Recommendation

                                    </TableCell>

                                </TableRow>

                            </TableHead>

                            <TableBody>

                                {

                                    products.map(

                                        product => (

                                            <TableRow

                                                key={

                                                    product.productId

                                                }

                                                hover

                                            >

                                                <TableCell>

                                                    <Typography

                                                        fontWeight={700}

                                                    >

                                                        {

                                                            product.name

                                                        }

                                                    </Typography>

                                                </TableCell>

                                                <TableCell>

                                                    {

                                                        product.sku

                                                    }

                                                </TableCell>

                                                <TableCell>

                                                    {

                                                        product.stock

                                                    }

                                                </TableCell>

                                                <TableCell>

                                                    <Chip

                                                        size="small"

                                                        label={

                                                            product.inventoryHealth

                                                        }

                                                        color={

                                                            product.inventoryHealth ===

                                                            "Healthy"

                                                            ?

                                                            "success"

                                                            :

                                                            product.inventoryHealth ===

                                                            "Low Stock"

                                                            ?

                                                            "warning"

                                                            :

                                                            "error"

                                                        }

                                                    />

                                                </TableCell>

                                                <TableCell>

                                                    {

                                                        product.recommendation

                                                    }

                                                </TableCell>

                                            </TableRow>

                                        )

                                    )

                                }

                            </TableBody>

                        </Table>

                    </TableContainer>

                )

            }

        </SectionCard>

    );

}