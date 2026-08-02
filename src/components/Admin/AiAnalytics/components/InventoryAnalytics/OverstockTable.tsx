import InventoryDataTable from "./InventoryDataTable";

import {

    InventoryProduct

} from "../../../../../types/ai/inventory";

interface Props{

    products:InventoryProduct[];

}

export default function OverstockTable({

    products

}:Props){

    return(

        <InventoryDataTable

            title="Overstock Products"

            subtitle="Products occupying excess inventory"

            emptyMessage="No overstock products."

            products={

                products.filter(

                    p=>p.overStock

                )

            }

        />

    );

}