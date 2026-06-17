import { useState, useEffect } from "react";
import {
  Button, Box, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, IconButton, Pagination,
  TextField, InputAdornment
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import AdminLayout from "../../components/Admin/AdminLayout";
import { getAllOrders, updateOrderStatus, deleteOrder } from "../../api/orderService";

const ORDERS_PER_PAGE = 10;

export default function OrderList() {
  const [orders, setOrders] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    const res = await getAllOrders();
    setOrders(res.orders || []);
  }

  const handleStatusUpdate = async (order: any, status: string) => {
    if (window.confirm(`Are you sure?`)) {
      try {
        const res = await updateOrderStatus(order.id, status);

        if (status === "ACCEPTED" && res.billLink) {
          const cleanPhone = "91" + order.customerPhone.replace(/[^0-9]/g, "").slice(-10);
          const text = `Hello ${order.customerName}, your order #${order.id.slice(-6).toUpperCase()} is ACCEPTED!\n\nTotal: ₹${order.totalAmount}\n\nDownload Bill: ${res.billLink}`;

          const whatsappAppUrl = `whatsapp://send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
          window.location.href = whatsappAppUrl;

          setTimeout(() => {
            const webUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
            window.open(webUrl, "_blank");
          }, 2000);
        }

        fetchOrders();
      } catch (error) {
        alert("Error updating status!");
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      await deleteOrder(id);
      fetchOrders();
    }
  };

  // Search filter — Order ID, Customer, Phone teeno se
  const filteredOrders = orders.filter((order: any) => {
    const q = search.replace(/^#/, "").toLowerCase().trim();
    if (!q) return true;
    const orderId = order.id.slice(-6).toUpperCase();
    return (
      orderId.toLowerCase().includes(q) ||
      (order.customerName || "").toLowerCase().includes(q) ||
      (order.customerPhone || "").includes(q)
    );
  });

  // Pagination — search hone par page 1 pe reset
  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice((page - 1) * ORDERS_PER_PAGE, page * ORDERS_PER_PAGE);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // search badle toh page 1 pe aa jao
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AdminLayout title="Orders">
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, gap: 2, flexWrap: "wrap" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#4A0E17" }}>Orders Management</Typography>

        {/* Search bar */}
        <TextField
          size="small"
          placeholder="Search by Order ID, Customer, Phone..."
          value={search}
          onChange={handleSearchChange}
          sx={{
            width: { xs: '100%', sm: 320 },
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              bgcolor: '#fff',
              '&:hover fieldset': { borderColor: '#4A0E17' },
              '&.Mui-focused fieldset': { borderColor: '#4A0E17' },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9E9E9E', fontSize: 20 }} />
              </InputAdornment>
            ),
            endAdornment: search ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => { setSearch(""); setPage(1); }}>
                  <ClearIcon sx={{ fontSize: 18, color: '#9E9E9E' }} />
                </IconButton>
              </InputAdornment>
            ) : null
          }}
        />
      </Box>

      {/* Result count jab search ho */}
      {search && (
        <Typography sx={{ fontSize: '0.78rem', color: '#9E9E9E', mb: 1.5 }}>
          {filteredOrders.length} result{filteredOrders.length !== 1 ? 's' : ''} found for "{search}"
        </Typography>
      )}

      <TableContainer component={Paper} sx={{ borderRadius: 0, boxShadow: 'none', border: "1px solid #E5D5BC" }}>
        <Table>
          <TableHead sx={{ bgcolor: "#F5EFE6" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Order ID</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: 'center', py: 5, color: '#9E9E9E' }}>
                  No orders found{search ? ` for "${search}"` : ''}.
                </TableCell>
              </TableRow>
            ) : (
              paginatedOrders.map((order: any) => (
                <TableRow key={order.id} hover sx={{ bgcolor: "#FFFFFF !important" }}>
                  <TableCell sx={{ fontWeight: 600, fontFamily: 'monospace' }}>#{order.id.slice(-6).toUpperCase()}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.customerPhone}</TableCell>
                  <TableCell>₹{order.totalAmount?.toLocaleString()}</TableCell>
                  <TableCell>
                    <Typography sx={{ color: order.status === "ACCEPTED" ? "#2e7d32" : "#ed6c02", fontWeight: 700 }}>
                      {order.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {order.status === "PENDING" && (
                      <Button size="small" variant="outlined" color="success" onClick={() => handleStatusUpdate(order, "ACCEPTED")}>Accept</Button>
                    )}
                    <IconButton color="error" onClick={() => handleDelete(order.id)}><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#4A0E17',
                borderColor: '#E5D5BC',
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                bgcolor: '#4A0E17',
                color: '#fff',
                '&:hover': { bgcolor: '#6B1521' }
              }
            }}
          />
        </Box>
      )}
    </AdminLayout>
  );
}
