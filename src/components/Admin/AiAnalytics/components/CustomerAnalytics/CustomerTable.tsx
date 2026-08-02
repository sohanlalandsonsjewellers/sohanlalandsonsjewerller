import { useMemo } from "react";

import {
    Avatar,
    Box,
    Chip,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";

import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";

import {
    DataGrid,
    GridColDef
} from "@mui/x-data-grid";

import { Customer } from "../../../../../types/ai/customer";

interface Props {

    customers: Customer[];

    loading?: boolean;

    page: number;

    pageSize: number;

    total: number;

    onPageChange: (page: number) => void;

}

function segmentColor(segment: string) {

    switch (segment) {

        case "VIP":

            return "#B89B73";

        case "Premium":

            return "#7C3AED";

        case "Regular":

            return "#2563EB";

        default:

            return "#16A34A";

    }

}

function rankColor(rank: string) {

    switch (rank) {

        case "Gold":

            return "#D4AF37";

        case "Silver":

            return "#A8A8A8";

        case "Bronze":

            return "#B87333";

        default:

            return "#777";

    }

}

const statusColor = (status: string) =>

    status === "Active"

        ? "#16A34A"

        : "#DC2626";

function NoRowsOverlay() {

    return (

        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                py: 6,
                color: "text.secondary"
            }}
        >

            <PeopleOutlineRoundedIcon sx={{ fontSize: 42, color: "#B89B73" }} />

            <Typography color="text.secondary">

                No customers match the current filters.

            </Typography>

        </Box>

    );

}

export default function CustomerTable({

    customers,

    loading,

    page,

    pageSize,

    total,

    onPageChange

}: Props) {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

    const columns: GridColDef[] = useMemo(() => [

        {

            field: "customer",

            headerName: "Customer",

            flex: 1.8,

            minWidth: 200,

            sortable: false,

            renderCell: ({ row }) => (

                <Stack

                    direction="row"

                    spacing={2}

                    alignItems="center"

                    sx={{

                        height: "100%"

                    }}

                >

                    <Avatar

                        sx={{

                            bgcolor: "#4A0E17",

                            width: 42,

                            height: 42,

                            fontWeight: 700

                        }}

                    >

                        {row.name?.charAt(0)}

                    </Avatar>

                    <Box sx={{ minWidth: 0 }}>

                        <Typography

                            fontWeight={700}

                            color="#4A0E17"

                            noWrap

                        >

                            {row.name}

                        </Typography>

                        <Typography

                            variant="caption"

                            color="text.secondary"

                            noWrap

                            component="div"

                        >

                            {row.email}

                        </Typography>

                    </Box>

                </Stack>

            )

        },

        {

            field: "phone",

            headerName: "Phone",

            flex: 1,

            minWidth: 120

        },

        {

            field: "segment",

            headerName: "Segment",

            flex: 1,

            minWidth: 110,

            renderCell: ({ value }) => (

                <Chip

                    size="small"

                    label={value}

                    sx={{

                        bgcolor:

                            segmentColor(value),

                        color: "#FFF",

                        fontWeight: 700

                    }}

                />

            )

        },

        {

            field: "lifetimeRank",

            headerName: "Rank",

            flex: .8,

            minWidth: 100,

            renderCell: ({ value }) => (

                <Chip

                    size="small"

                    label={value}

                    sx={{

                        bgcolor:

                            `${rankColor(value)}15`,

                        color:

                            rankColor(value),

                        fontWeight: 700

                    }}

                />

            )

        },

        {

            field: "customerStatus",

            headerName: "Status",

            flex: .8,

            minWidth: 100,

            renderCell: ({ value }) => (

                <Chip

                    size="small"

                    label={value}

                    sx={{

                        bgcolor:

                            `${statusColor(value)}15`,

                        color:

                            statusColor(value),

                        fontWeight: 700

                    }}

                />

            )

        },

            {

            field: "totalOrders",

            headerName: "Orders",

            flex: .8,

            minWidth: 90,

            type: "number"

        },

        {

            field: "totalSpent",

            headerName: "Revenue",

            flex: 1,

            minWidth: 110,

            renderCell: ({ value }) => (

                <Typography
                    fontWeight={700}
                    color="#059669"
                >

                    ₹{Number(value).toLocaleString()}

                </Typography>

            )

        },

        {

            field: "averageOrderValue",

            headerName: "Avg Order",

            flex: 1,

            minWidth: 110,

            renderCell: ({ value }) => (

                <Typography>

                    ₹{Number(value).toLocaleString()}

                </Typography>

            )

        },

        {

            field: "revenueContribution",

            headerName: "Contribution",

            flex: .9,

            minWidth: 110,

            renderCell: ({ value }) => (

                <Typography
                    fontWeight={700}
                    color="#B45309"
                >

                    {Number(value).toFixed(1)}%

                </Typography>

            )

        },

        {

            field: "lastOrder",

            headerName: "Last Order",

            flex: 1,

            minWidth: 110,

            renderCell: ({ value }) => (

                <Typography
                    variant="body2"
                >

                    {

                        value

                            ? new Date(value).toLocaleDateString()

                            : "--"

                    }

                </Typography>

            )

        },

        {

            field: "recommendations",

            headerName: "AI",

            flex: .8,

            minWidth: 100,

            sortable: false,

            renderCell: ({ value }) => (

                <Chip

                    size="small"

                    label={`${value.length} Tips`}

                    sx={{

                        bgcolor:
                            "rgba(184,155,115,.15)",

                        color: "#4A0E17",

                        fontWeight: 700

                    }}

                />

            )

        }

    ], []);

    // Mobile / tablet: sirf sabse zaroori columns dikhao, baaki hide
    // (data delete nahi hoti, sirf column visibility model change hoti hai)
    const columnVisibilityModel = useMemo(() => {

        if (isMobile) {

            return {

                phone: false,

                lifetimeRank: false,

                averageOrderValue: false,

                revenueContribution: false,

                lastOrder: false,

                recommendations: false

            };

        }

        if (isTablet) {

            return {

                phone: true,

                lifetimeRank: true,

                averageOrderValue: false,

                revenueContribution: false,

                lastOrder: true,

                recommendations: false

            };

        }

        return {

            phone: true,

            lifetimeRank: true,

            averageOrderValue: true,

            revenueContribution: true,

            lastOrder: true,

            recommendations: true

        };

    }, [isMobile, isTablet]);

    return (

        <Paper

            elevation={0}

            sx={{

                mt: 4,

                borderRadius: { xs: "16px", sm: "22px" },

                overflow: "hidden",

                border:
                    "1px solid rgba(184,155,115,.18)",

                boxShadow:
                    "0 15px 35px rgba(0,0,0,.05)"

            }}

        >

            <Box
                px={{ xs: 2, sm: 3 }}
                py={{ xs: 2, sm: 2.5 }}
                borderBottom="1px solid rgba(184,155,115,.12)"
            >

                <Typography
                    variant="h5"
                    sx={{

                        color: "#4A0E17",

                        fontWeight: 700,

                        fontFamily:
                            '"Playfair Display", serif',

                        fontSize: { xs: "1.15rem", sm: "1.5rem" }

                    }}
                >

                    Customer Directory

                </Typography>

                <Typography
                    color="text.secondary"
                    mt={.5}
                    sx={{ fontSize: { xs: ".85rem", sm: "1rem" } }}
                >

                    {total.toLocaleString()} customer{total === 1 ? "" : "s"} total
                    — showing AI insights, lifetime value and contribution.

                </Typography>

            </Box>

            <Box sx={{ width: "100%", overflowX: "auto" }}>

            <DataGrid

                autoHeight

                rows={customers}

                columns={columns}

                loading={loading}

                getRowId={(row) => row.customerId}

                paginationMode="server"

                rowCount={total}

                pageSizeOptions={[10]}

                paginationModel={{

                    page: page - 1,

                    pageSize

                }}

                onPaginationModelChange={(model) =>

                    onPageChange(

                        model.page + 1

                    )

                }

                columnVisibilityModel={columnVisibilityModel}

                disableRowSelectionOnClick

                slots={{

                    noRowsOverlay: NoRowsOverlay

                }}

                sx={{

                    border: 0,

                    bgcolor: "#FFF",

                    minWidth: 640,

                    "& .MuiDataGrid-columnHeaders": {

                        bgcolor: "#FFF8EF",

                        color: "#4A0E17",

                        fontWeight: 700,

                        fontSize: ".95rem"

                    },

                    "& .MuiDataGrid-columnHeaderTitle": {

                        fontWeight: 700

                    },

                    "& .MuiDataGrid-row": {

                        transition: ".25s"

                    },

                    "& .MuiDataGrid-row:hover": {

                        bgcolor:
                            "rgba(184,155,115,.08)"

                    },

                    "& .MuiDataGrid-cell": {

                        borderColor:
                            "rgba(184,155,115,.08)"

                    },

                    "& .MuiDataGrid-footerContainer": {

                        bgcolor: "#FFFDF9"

                    }

                }}

            />

            </Box>

        </Paper>

    );

}
