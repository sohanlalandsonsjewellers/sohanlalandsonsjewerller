// src/components/Admin/Product/ProductTable.tsx
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";

interface ProductTableProps {
  products: any[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  const columns = [
    { field: "sku", headerName: "SKU-ID", flex: 1, headerClassName: 'super-app-theme--header' },
    { field: "createdAt", headerName: "createdAt", flex: 1, headerClassName: 'super-app-theme--header', type: 'dateTime' as const, valueGetter: (v: any) => v ? new Date(v) : null },
    { field: "name", headerName: "Name", flex: 1, headerClassName: 'super-app-theme--header' },
    { field: "category", headerName: "Category", flex: 1, headerClassName: 'super-app-theme--header' },
    { field: "subCategory", headerName: "Sub Category", flex: 1, headerClassName: 'super-app-theme--header' },
    { field: "price", headerName: "Price", flex: 1, headerClassName: 'super-app-theme--header', renderCell: (p: any) => `₹${Number(p.value).toLocaleString('en-IN')}` },
    { field: "stock", headerName: "Stock", flex: 1, headerClassName: 'super-app-theme--header' },

    {
      field: "images",
      headerName: "Images",
      width: 150,
      headerClassName: 'super-app-theme--header',
      renderCell: (params: any) => {
        let imgs = params.row.images;
        if (typeof imgs === "string") {
          try { imgs = JSON.parse(imgs); } catch { imgs = []; }
        }
        if (!Array.isArray(imgs)) imgs = [];

        return (
          <Box sx={{ display: "flex", gap: 1, alignItems: 'center', height: '100%' }}>
            {imgs.slice(0, 3).map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                width={40}
                height={40}
                style={{
                  borderRadius: 0,
                  objectFit: "cover",
                  border: "1px solid rgba(229, 213, 188, 0.4)",
                }}
                alt="asset"
              />
            ))}
          </Box>
        );
      },
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      headerClassName: 'super-app-theme--header',
      renderCell: (params: any) => (
        <Box sx={{ display: "flex", gap: 1, alignItems: 'center', height: '100%' }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => onEdit(params.row.id)}
            sx={{ 
              borderRadius: 0, 
              borderColor: '#4A0E17 !important', 
              color: '#4A0E17 !important', 
              fontSize: '0.75rem',
              fontWeight: 600,
              '&:hover': { borderColor: '#000', bgcolor: 'rgba(74,14,23,0.05)' } 
            }}
          >
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={() => onDelete(params.row.id)}
            sx={{ borderRadius: 0, boxShadow: 'none', fontSize: '0.75rem' }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box 
      sx={{ 
        width: '100%', 
        bgcolor: '#FFFDF9 !important',
        border: '1px solid rgba(229, 213, 188, 0.35)',
        boxShadow: '0px 8px 24px rgba(0,0,0,0.04)'
      }}
    >
      <DataGrid
        rows={products}
        columns={columns}
        autoHeight
        pagination
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
          sorting: { sortModel: [{ field: 'createdAt', sort: 'desc' }] },
          columns: { columnVisibilityModel: { createdAt: false } }
        }}
        pageSizeOptions={[10]}
        getRowId={(row) => row.id || row._id}
        sx={{
          border: 'none',
          borderRadius: 0,
          
          "& .MuiDataGrid-main": {
            backgroundColor: "#FFFDF9 !important",
          },
          "& .MuiDataGrid-row": {
            backgroundColor: "#FFFDF9 !important",
          },
          
          "& .MuiDataGrid-cell": {
            color: '#4A0E17 !important',
            fontSize: '0.85rem !important',
            fontWeight: '600 !important',
            borderBottom: '1px solid rgba(229, 213, 188, 0.2) !important',
          },
          
          "& .super-app-theme--header": {
            backgroundColor: "#F5EFE6 !important",
            borderBottom: '1px solid rgba(229, 213, 188, 0.4) !important',
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontFamily: '"Playfair Display", serif',
            fontWeight: '700 !important',
            fontSize: '0.9rem !important',
            color: "#4A0E17 !important",
          },
          
          "& .MuiDataGrid-row:hover": {
            bgcolor: 'rgba(229, 213, 188, 0.15) !important'
          },
          
          // Pagination styling — maroon theme
          "& .MuiDataGrid-footerContainer": {
            borderTop: '1px solid rgba(229, 213, 188, 0.3) !important',
            bgcolor: '#F5EFE6 !important',
            "& .MuiTablePagination-root, & .MuiTypography-root, & .MuiIconButton-root": {
              color: '#4A0E17 !important'
            },
            "& .MuiIconButton-root.Mui-disabled": {
              color: 'rgba(74,14,23,0.3) !important'
            }
          },
          "& .MuiDataGrid-selectedRowCount": {
            display: 'none' // unnecessary row count text hide
          }
        }}
      />
    </Box>
  );
}
