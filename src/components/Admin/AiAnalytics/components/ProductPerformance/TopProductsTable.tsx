import ProductDataTable from "./ProductDataTable";

import {

    ProductPerformance

} from "../../../../../types/ai/product";

interface Props{

    products:ProductPerformance[];

}

export default function TopProductsTable({

    products

}:Props){

    return(

        <ProductDataTable

            title="Top Performing Products"

            subtitle="Highest revenue & score"

            emptyMessage="No products found."

            products={

                [...products]

                .sort(

                    (a,b)=>

                        b.salesScore-

                        a.salesScore

                )

                .slice(0,10)

            }

        />

    );

}