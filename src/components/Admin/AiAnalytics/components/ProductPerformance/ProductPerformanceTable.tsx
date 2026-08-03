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

    ProductPerformance

} from "../../../../../types/ai/product";

interface Props {

    products: ProductPerformance[];

    loading: boolean;

}

export default function ProductPerformanceTable({

    products,

    loading

}: Props) {

    const columns: GridColDef[] = [

        {

            field: "name",

            headerName: "Product",

            flex: 1.4,

            minWidth: 220,

            renderCell: (params) => (

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

            field: "category",

            headerName: "Category",

            width: 150

        },

        {

            field: "stock",

            headerName: "Stock",

            width: 100,

            type: "number"

        },

        {

            field: "unitsSold",

            headerName: "Sold",

            width: 100,

            type: "number"

        },

        {

            field: "revenue",

            headerName: "Revenue",

            width: 140,

            renderCell: (params) =>

                `₹${params.value.toLocaleString()}`

        },

        {

            field: "estimatedProfit",

            headerName: "Profit",

            width: 140,

            renderCell: (params) =>

                `₹${params.value.toLocaleString()}`

        },

        {

            field: "salesScore",

            headerName: "Sales",

            width: 100

        },

        {

            field: "revenueScore",

            headerName: "Revenue",

            width: 110

        },

        {

            field: "profitScore",

            headerName: "Profit",

            width: 100

        },

        {

            field: "popularityScore",

            headerName: "Popularity",

            width: 120

        },

        {

            field: "grade",

            headerName: "Grade",

            width: 110,

            renderCell: (params) => (

                <Chip

                    size="small"

                    label={params.row.grade.grade}

                    color={

                        params.row.grade.grade === "A"

                            ? "success"

                            : params.row.grade.grade === "B"

                            ? "primary"

                            : params.row.grade.grade === "C"

                            ? "warning"

                            : "error"

                    }

                />

            )

        },

        {

            field: "trend",

            headerName: "Trend",

            width: 140,

            renderCell: (params) => (

                <Chip

                    size="small"

                    label={params.row.trend.trend}

                    variant="outlined"

                />

            )

        },

        {

            field: "strategy",

            headerName: "Strategy",

            flex: 1.4,

            minWidth: 220,

            renderCell: (params) =>

                params.row.strategy.action

        }

    ];

    return (

        <SectionCard

            title="Product Performance Table"

            subtitle="Complete AI product performance overview"

        >

            <DataGrid

                autoHeight

                loading={loading}

                rows={products}

                columns={columns}

                getRowId={(row) => row.productId}

                disableRowSelectionOnClick

                pageSizeOptions={[10, 20, 50, 100]}

                initialState={{

                    pagination: {

                        paginationModel: {

                            page: 0,

                            pageSize: 10

                        }

                    }

                }}

                sx={{

                    border: 0,

                    "& .MuiDataGrid-columnHeaders": {

                        bgcolor: "#F9F6F1",

                        fontWeight: 700

                    },

                    "& .MuiDataGrid-cell": {

                        alignItems: "center"

                    }

                }}

            />

        </SectionCard>

    );

}