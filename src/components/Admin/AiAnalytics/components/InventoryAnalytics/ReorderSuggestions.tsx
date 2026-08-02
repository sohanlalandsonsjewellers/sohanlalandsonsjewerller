import {
    Alert,
    Chip,
    Stack,
    Typography
} from "@mui/material";

import SectionCard from "../common/SectionCard";

import {
    InventoryProduct
} from "../../../../../types/ai/inventory";

interface Props {

    products: InventoryProduct[];

}

export default function ReorderSuggestions({

    products

}: Props) {

    const suggestions = products.filter(

        product =>

            product.recommendation !==

            "Maintain Current Stock"

    );

    return (

        <SectionCard

            title="Reorder Suggestions"

            subtitle="AI generated inventory actions"

        >

            {

                suggestions.length === 0 ?

                (

                    <Alert severity="success">

                        All inventory levels look healthy.

                    </Alert>

                )

                :

                (

                    <Stack spacing={2}>

                        {

                            suggestions.map(

                                product => (

                                    <Alert

                                        key={

                                            product.productId

                                        }

                                        severity={

                                            product.recommendation ===

                                            "Restock Immediately"

                                            ?

                                            "error"

                                            :

                                            product.recommendation ===

                                            "Reorder Today"

                                            ?

                                            "warning"

                                            :

                                            "info"

                                        }

                                        action={

                                            <Chip

                                                size="small"

                                                label={

                                                    product.inventoryHealth

                                                }

                                            />

                                        }

                                    >

                                        <Typography

                                            fontWeight={700}

                                        >

                                            {product.name}

                                        </Typography>

                                        <Typography

                                            variant="body2"

                                        >

                                            {

                                                product.recommendation

                                            }

                                        </Typography>

                                    </Alert>

                                )

                            )

                        }

                    </Stack>

                )

            }

        </SectionCard>

    );

}