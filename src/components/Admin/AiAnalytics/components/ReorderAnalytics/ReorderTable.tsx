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

    ReorderProduct

} from "../../../../../types/ai/reorder";

interface Props {

    products: ReorderProduct[];

    loading: boolean;

}

export default function ReorderTable({

    products,

    loading

}: Props) {

    const columns: GridColDef[] = [

        {

            field: "name",

            headerName: "Product",

            flex: 1.5,

            minWidth: 220,

            renderCell: (params) => (

                <Stack>

                    <Typography fontWeight={700}>

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

            field: "category",

            headerName: "Category",

            width: 140

        },

        {

            field: "currentStock",

            headerName: "Current",

            width: 120

        },

        {

            field: "predictedDemand",

            headerName: "Forecast",

            width: 120

        },

        {

            field: "safetyStock",

            headerName: "Safety",

            width: 120

        },

        {

            field: "recommendedQty",

            headerName: "Reorder Qty",

            width: 130,

            renderCell: (params)=>(

                <Typography

                    fontWeight={700}

                    color="#2563EB"

                >

                    {params.value}

                </Typography>

            )

        },

        {

            field: "leadTimeDays",

            headerName: "Lead Time",

            width: 120,

            renderCell:(params)=>

                `${params.value} Days`

        },

        {

            field: "reorderScore",

            headerName: "Score",

            width:120,

            renderCell:(params)=>(

                <Typography

                    fontWeight={700}

                    color="#4A0E17"

                >

                    {params.value}

                </Typography>

            )

        },

        {

            field:"priority",

            headerName:"Priority",

            width:120,

            renderCell:(params)=>(

                <Chip

                    size="small"

                    label={params.value}

                    color={

                        params.value==="Critical"

                        ?

                        "error"

                        :

                        params.value==="High"

                        ?

                        "warning"

                        :

                        params.value==="Medium"

                        ?

                        "primary"

                        :

                        params.value==="Low"

                        ?

                        "success"

                        :

                        "default"

                    }

                />

            )

        },

        {

            field:"confidence",

            headerName:"Confidence",

            width:130

        },

        {

            field:"action",

            headerName:"Action",

            flex:1.8,

            minWidth:260

        }

    ];

    return (

        <SectionCard

            title="Smart Reorder Plan"

            subtitle="AI generated reorder planning table"

        >

            <DataGrid

                autoHeight

                loading={loading}

                rows={products}

                columns={columns}

                getRowId={(row)=>row.productId}

                disableRowSelectionOnClick

                pageSizeOptions={[

                    10,

                    20,

                    50,

                    100

                ]}

                initialState={{

                    pagination:{

                        paginationModel:{

                            page:0,

                            pageSize:10

                        }

                    }

                }}

                sx={{

                    border:0,

                    "& .MuiDataGrid-columnHeaders":{

                        bgcolor:"#F9F6F1",

                        fontWeight:700

                    },

                    "& .MuiDataGrid-cell":{

                        alignItems:"center"

                    },

                    "& .MuiDataGrid-row:hover":{

                        bgcolor:"rgba(184,155,115,.05)"

                    }

                }}

            />

        </SectionCard>

    );

}