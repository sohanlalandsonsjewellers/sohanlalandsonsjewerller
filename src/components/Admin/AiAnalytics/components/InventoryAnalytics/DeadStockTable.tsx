import InventoryDataTable from "./InventoryDataTable";

import {

    InventoryProduct

} from "../../../../../types/ai/inventory";

interface Props{

    products:InventoryProduct[];

}

export default function DeadStockTable({

    products

}:Props){

    return(

        <InventoryDataTable

            title="Dead Stock"

            subtitle="Products with very low turnover"

            emptyMessage="No dead stock."

            products={

                products.filter(

                    p=>

                    p.turnover<=0.20

                )

            }

        />

    );

}