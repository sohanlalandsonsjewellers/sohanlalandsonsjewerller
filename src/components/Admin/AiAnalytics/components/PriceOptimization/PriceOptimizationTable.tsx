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
    PriceProduct
} from "../../../../../types/ai/price";

interface Props {

    products: PriceProduct[];

    loading: boolean;

}

export default function PriceOptimizationTable({

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
            width: 150
        },

        {
            field: "currentPrice",
            headerName: "Current",
            width: 130,

            renderCell: (params) =>

                `₹${params.value.toLocaleString()}`
        },

        {
            field: "suggestedPrice",
            headerName: "Suggested",
            width: 130,

            renderCell: (params) =>

                `₹${params.value.toLocaleString()}`
        },

        {
            field: "priceChangePercent",
            headerName: "Change %",
            width: 120,

            renderCell: (params) => (

                <Typography

                    fontWeight={700}

                    color={

                        params.value > 0

                            ? "#16A34A"

                            : params.value < 0

                            ? "#DC2626"

                            : "#666"

                    }

                >

                    {params.value.toFixed(1)}%

                </Typography>

            )

        },

        {
            field: "pricingHealth",
            headerName: "Pricing",
            width: 150,

            renderCell: (params) => (

                <Chip

                    size="small"

                    label={params.value}

                    color={

                        params.value === "Fair Price"

                            ? "success"

                            : params.value === "Underpriced"

                            ? "primary"

                            : params.value === "Overpriced"

                            ? "warning"

                            : "error"

                    }

                />

            )

        },

        {
            field: "demandLevel",
            headerName: "Demand",
            width: 130,

            renderCell: (params) => (

                <Chip

                    size="small"

                    label={params.value}

                    color={

                        params.value === "High"

                            ? "success"

                            : params.value === "Medium"

                            ? "warning"

                            : "default"

                    }

                />

            )

        },

        {
            field: "stockLevel",
            headerName: "Stock",
            width: 120
        },

        {
            field: "confidence",
            headerName: "Confidence",
            width: 120,

            renderCell: (params) =>

                `${params.value}%`

        },

        {
            field: "priority",
            headerName: "Priority",
            width: 120,

            renderCell: (params) => (

                <Chip

                    size="small"

                    label={params.value}

                    color={

                        params.value === "Critical"

                            ? "error"

                            : params.value === "High"

                            ? "warning"

                            : params.value === "Medium"

                            ? "primary"

                            : "success"

                    }

                />

            )

        },

        {
            field: "strategy",
            headerName: "Strategy",
            width: 150
        },

        {
            field: "action",
            headerName: "Action",
            flex: 1.5,
            minWidth: 250
        }

    ];

    return (

        <SectionCard

            title="Price Optimization"

            subtitle="Complete AI pricing analysis"

        >

            <DataGrid

                autoHeight

                loading={loading}

                rows={products}

                columns={columns}

                getRowId={(row) => row.productId}

                disableRowSelectionOnClick

                pageSizeOptions={[

                    10,

                    20,

                    50,

                    100

                ]}

                initialState={{

                    pagination: {

                        paginationModel: {

                            page: 0,

                            pageSize: 10

                        }

                    }

                }}

                sx={{

                    border:0,

                    "& .MuiDataGrid-columnHeaders":{

                        bgcolor:"#F9F6F1"

                    },

                    "& .MuiDataGrid-cell":{

                        alignItems:"center"

                    }

                }}

            />

        </SectionCard>

    );

}