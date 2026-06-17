import React, { useEffect, useState } from "react";

import {
    Box,
    TextField,
    InputAdornment,
    Paper,
    Typography,
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Modal,
    Button,
    Pagination,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";

import { toast } from "react-toastify";

import AdminLayout from "../../components/Admin/AdminLayout";

import {
    getAllFeedbacks,
    deleteFeedback,
} from "../../api/feedback";

const FEEDBACKS_PER_PAGE = 10;

export default function FeedbackList() {

    const [feedbacks, setFeedbacks] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadFeedbacks();
    }, []);

    async function loadFeedbacks() {
        try {
            const res = await getAllFeedbacks();
            setFeedbacks(res.feedbacks || []);
        } catch {
            toast.error("Unable loading feedbacks");
        }
    }

    async function confirmDelete() {
        if (!deleteId) return;
        try {
            await deleteFeedback(deleteId);
            toast.success("Feedback Deleted");
            setDeleteId(null);
            loadFeedbacks();
        } catch {
            toast.error("Delete Failed");
        }
    }

    const filtered = feedbacks.filter((f: any) => {
        const q = search.toLowerCase().trim();
        if (!q) return true;
        return (
            f.userName?.toLowerCase().includes(q) ||
            f.comment?.toLowerCase().includes(q) ||
            f.area?.toLowerCase().includes(q)
        );
    });

    // Pagination
    const totalPages = Math.ceil(filtered.length / FEEDBACKS_PER_PAGE);
    const paginated = filtered.slice((page - 1) * FEEDBACKS_PER_PAGE, page * FEEDBACKS_PER_PAGE);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AdminLayout title="Feedbacks">

            <Box sx={{ display: "flex", mb: 4 }}>
                <TextField
                    size="small"
                    placeholder="Search Feedback..."
                    value={search}
                    onChange={handleSearchChange}
                    InputProps={{
                        endAdornment: search ? (
                            <InputAdornment position="end">
                                <IconButton size="small" onClick={() => { setSearch(""); setPage(1); }}>
                                    <ClearIcon sx={{ fontSize: 18, color: '#9E9E9E' }} />
                                </IconButton>
                            </InputAdornment>
                        ) : (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                    sx={{ width: { xs: "100%", sm: "340px" }, bgcolor: "#fff" }}
                />
            </Box>

            {search && (
                <Typography sx={{ fontSize: '0.78rem', color: '#9E9E9E', mb: 1.5 }}>
                    {filtered.length} result{filtered.length !== 1 ? 's' : ''} found for "{search}"
                </Typography>
            )}

            <Paper sx={{ borderRadius: 0, boxShadow: 'none', border: "1px solid #E5D5BC" }}>
                <Table>
                    <TableHead sx={{ bgcolor: "#F5EFE6" }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>User</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Area</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Rating</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Comment</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Created</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: "#4A0E17" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginated.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} sx={{ textAlign: 'center', py: 5, color: '#9E9E9E' }}>
                                    No feedbacks found{search ? ` for "${search}"` : ''}.
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginated.map((f) => (
                                <TableRow key={f.id} hover sx={{ bgcolor: "#FFFFFF !important" }}>
                                    <TableCell>
                                        <Typography fontWeight={700}>{f.userName}</Typography>
                                    </TableCell>
                                    <TableCell>{f.area}</TableCell>
                                    <TableCell>⭐ {f.rating}</TableCell>
                                    <TableCell sx={{ maxWidth: 280 }}>
                                        <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                                            {f.comment}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>{new Date(f.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <IconButton color="error" onClick={() => setDeleteId(f.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </Paper>

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

            {/* DELETE MODAL */}
            <Modal open={Boolean(deleteId)} onClose={() => setDeleteId(null)}>
                <Box sx={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    bgcolor: "#fff", width: 320, p: 4, boxShadow: 24, textAlign: "center"
                }}>
                    <Typography sx={{ fontSize: "1.7rem", fontWeight: 700, mb: 4 }}>
                        Delete Feedback?
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                        <Button onClick={() => setDeleteId(null)} sx={{ color: "#555" }}>Cancel</Button>
                        <Button variant="contained" color="error" onClick={confirmDelete}>Delete</Button>
                    </Box>
                </Box>
            </Modal>

        </AdminLayout>
    );
}
