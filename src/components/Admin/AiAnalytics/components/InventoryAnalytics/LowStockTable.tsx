import InventoryDataTable from "./InventoryDataTable";

import {

    InventoryProduct

} from "../../../../../types/ai/inventory";

interface Props{

    products:InventoryProduct[];

}

export default function LowStockTable({

    products

}:Props){

    return(

        <InventoryDataTable

            title="Low Stock Products"

            subtitle="Products requiring replenishment"

            emptyMessage="No low stock products."

            products={

                products.filter(

                    p=>

                    p.inventoryHealth==="Low Stock"

                )

            }

        />

    );

}