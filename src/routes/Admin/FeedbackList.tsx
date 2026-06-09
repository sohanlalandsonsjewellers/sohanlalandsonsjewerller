import { useEffect, useState } from "react";

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
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import DeleteIcon from "@mui/icons-material/Delete";

import { toast } from "react-toastify";

import AdminLayout from "../../components/Admin/AdminLayout";

import {
    getAllFeedbacks,
    deleteFeedback,
} from "../../api/feedback";

export default function FeedbackList() {

    const [feedbacks, setFeedbacks] =
        useState<any[]>([]);

    const [search, setSearch] =
        useState("");

    const [deleteId, setDeleteId] =
        useState<string | null>(null);


    useEffect(() => {

        loadFeedbacks();

    }, []);



    async function loadFeedbacks() {

        try {

            const res =
                await getAllFeedbacks();

            setFeedbacks(
                res.feedbacks || []
            );

        } catch {

            toast.error(
                "Unable loading feedbacks"
            );

        }

    }



    async function confirmDelete() {

        if (!deleteId) return;

        try {

            await deleteFeedback(
                deleteId
            );

            toast.success(
                "Feedback Deleted"
            );

            setDeleteId(
                null
            );

            loadFeedbacks();

        } catch {

            toast.error(
                "Delete Failed"
            );

        }

    }



    const filtered =
        feedbacks.filter((f: any) => {

            const q =
                search
                    .toLowerCase()
                    .trim();

            if (!q) return true;

            return (

                f.userName
                    ?.toLowerCase()
                    .includes(q)

                ||

                f.comment
                    ?.toLowerCase()
                    .includes(q)

                ||

                f.area
                    ?.toLowerCase()
                    .includes(q)

            );

        });



    return (

        <AdminLayout title="Feedbacks">


            <Box

                sx={{

                    display: "flex",

                    mb: 4

                }}

            >

                <TextField

                    size="small"

                    placeholder=
                    "Search Feedback..."

                    value={search}

                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }

                    InputProps={{

                        endAdornment: (

                            <InputAdornment
                                position="end"
                            >

                                <SearchIcon />

                            </InputAdornment>

                        )

                    }}

                    sx={{

                        width: {
                            xs: "100%",
                            sm: "340px"
                        },

                        bgcolor: "#fff"

                    }}

                />

            </Box>




            <Paper>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>

                                User

                            </TableCell>

                            <TableCell>

                                Area

                            </TableCell>

                            <TableCell>

                                Rating

                            </TableCell>

                            <TableCell>

                                Comment

                            </TableCell>

                            <TableCell>

                                Created

                            </TableCell>

                            <TableCell>

                                Action

                            </TableCell>

                        </TableRow>

                    </TableHead>



                    <TableBody>

                        {

                            filtered.map((f) => (

                                <TableRow
                                    key={f.id}
                                >

                                    <TableCell>

                                        <Typography
                                            fontWeight={700}
                                        >

                                            {f.userName}

                                        </Typography>

                                    </TableCell>


                                    <TableCell>

                                        {f.area}

                                    </TableCell>


                                    <TableCell>

                                        ⭐ {f.rating}

                                    </TableCell>


                                    <TableCell

                                        sx={{

                                            maxWidth: 280

                                        }}

                                    >

                                        <Typography

                                            sx={{

                                                overflow: "hidden",

                                                whiteSpace:
                                                    "nowrap",

                                                textOverflow:
                                                    "ellipsis"

                                            }}

                                        >

                                            {f.comment}

                                        </Typography>

                                    </TableCell>


                                    <TableCell>

                                        {

                                            new Date(
                                                f.createdAt
                                            )
                                                .toLocaleDateString()

                                        }

                                    </TableCell>


                                    <TableCell>

                                        <IconButton

                                            color="error"

                                            onClick={() =>

                                                setDeleteId(
                                                    f.id
                                                )

                                            }

                                        >

                                            <DeleteIcon />

                                        </IconButton>

                                    </TableCell>

                                </TableRow>

                            ))

                        }

                    </TableBody>

                </Table>

            </Paper>



            {/* DELETE MODAL */}


            <Modal

                open={
                    Boolean(deleteId)
                }

                onClose={() =>
                    setDeleteId(
                        null
                    )
                }

            >

                <Box

                    sx={{

                        position: "absolute",

                        top: "50%",

                        left: "50%",

                        transform:
                            "translate(-50%,-50%)",

                        bgcolor: "#fff",

                        width: 320,

                        p: 4,

                        boxShadow: 24,

                        textAlign: "center"

                    }}

                >

                    <Typography

                        sx={{

                            fontSize: "1.7rem",

                            fontWeight: 700,

                            mb: 4

                        }}

                    >

                        Delete Feedback?

                    </Typography>


                    <Box

                        sx={{

                            display: "flex",

                            justifyContent:
                                "center",

                            gap: 2

                        }}

                    >

                        <Button

                            onClick={() =>

                                setDeleteId(
                                    null
                                )

                            }

                            sx={{

                                color: "#555"

                            }}

                        >

                            Cancel

                        </Button>


                        <Button

                            variant="contained"

                            color="error"

                            onClick={
                                confirmDelete
                            }

                        >

                            Delete

                        </Button>

                    </Box>

                </Box>

            </Modal>


        </AdminLayout>

    );

}