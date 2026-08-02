import {
    Chip,
    Stack,
    Typography
} from "@mui/material";

import {

    DataGrid,

    GridColDef

} from "@mui/x-data-grid";

import SectionCard from "../common/SectionCard";

import {

    InventoryProduct

} from "../../../../../types/ai/inventory";

interface Props{

    products:InventoryProduct[];

    loading:boolean;

}

export default function InventoryTable({

    products,

    loading

}:Props){

    const columns:GridColDef[]=[

        {

            field:"name",

            headerName:"Product",

            flex:1.2,

            minWidth:180,

            renderCell:(params)=>(

                <Stack>

                    <Typography

                        fontWeight={700}

                    >

                        {params.row.name}

                    </Typography>

                    <Typography

                        variant="caption"

                        color="text.secondary"

                    >

                        {params.row.sku}

                    </Typography>

                </Stack>

            )

        },

        {

            field:"category",

            headerName:"Category",

            flex:1.2,

            minWidth:180

        },

        {

            field:"stock",

            headerName:"Stock",

            width:100,

            type:"number"

        },

        {

            field:"inventoryValue",

            headerName:"Value",

            width:140,

            renderCell:(params)=>

                `₹${params.value.toLocaleString()}`

        },

        {

            field:"turnover",

            headerName:"Turnover",

            width:120

        },

        {

            field:"stockoutDays",

            headerName:"Stockout",

            width:120,

            renderCell:(params)=>

                params.value ?? "-"

        },

        {

            field:"inventoryHealth",

            headerName:"Health",

            width:160,

            renderCell:(params)=>(

                <Chip

                    size="small"

                    label={params.value}

                    color={

                        params.value==="Healthy"

                        ?

                        "success"

                        :

                        params.value==="Low Stock"

                        ?

                        "warning"

                        :

                        "error"

                    }

                />

            )

        },

        {

            field:"recommendation",

            headerName:"Recommendation",

            flex:1.4,

            minWidth:220

        }

    ];

    return(

        <SectionCard

            title="Inventory Table"

            subtitle="Complete inventory overview"

        >

            <DataGrid

                autoHeight

                loading={loading}

                rows={products}

                columns={columns}

                getRowId={(row)=>

                    row.productId

                }

                pageSizeOptions={[

                    10,

                    20,

                    50,

                    100

                ]}

                initialState={{

                    pagination:{

                        paginationModel:{

                            pageSize:10,

                            page:0

                        }

                    }

                }}

                disableRowSelectionOnClick

                sx={{

                    border:0,

                    "& .MuiDataGrid-columnHeaders":{

                        bgcolor:"#F9F6F1",

                        fontWeight:700

                    },

                    "& .MuiDataGrid-cell":{

                        alignItems:"center"

                    }

                }}

            />

        </SectionCard>

    );

}