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

    ProductPerformance

} from "../../../../../types/ai/product";

interface Props {

    title: string;

    subtitle: string;

    products: ProductPerformance[];

    emptyMessage: string;

}

export default function ProductDataTable({

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

                                        Grade

                                    </TableCell>

                                    <TableCell>

                                        Revenue

                                    </TableCell>

                                    <TableCell>

                                        Profit

                                    </TableCell>

                                    <TableCell>

                                        Trend

                                    </TableCell>

                                    <TableCell>

                                        Strategy

                                    </TableCell>

                                </TableRow>

                            </TableHead>

                            <TableBody>

                                {

                                    products.map(

                                        product=>(

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

                                                    <Typography

                                                        variant="caption"

                                                        color="text.secondary"

                                                    >

                                                        {

                                                            product.sku

                                                        }

                                                    </Typography>

                                                </TableCell>

                                                <TableCell>

                                                    <Chip

                                                        size="small"

                                                        label={

                                                            product.grade.grade

                                                        }

                                                        color={

                                                            product.grade.grade==="A"

                                                            ?

                                                            "success"

                                                            :

                                                            product.grade.grade==="B"

                                                            ?

                                                            "primary"

                                                            :

                                                            product.grade.grade==="C"

                                                            ?

                                                            "warning"

                                                            :

                                                            "error"

                                                        }

                                                    />

                                                </TableCell>

                                                <TableCell>

                                                    ₹{

                                                        product.revenue.toLocaleString()

                                                    }

                                                </TableCell>

                                                <TableCell>

                                                    ₹{

                                                        product.estimatedProfit.toLocaleString()

                                                    }

                                                </TableCell>

                                                <TableCell>

                                                    {

                                                        product.trend.trend

                                                    }

                                                </TableCell>

                                                <TableCell>

                                                    {

                                                        product.strategy.action

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