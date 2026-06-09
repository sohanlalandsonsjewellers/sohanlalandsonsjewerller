import {
    Box,
    Typography,
    Button,
    Modal,
    TextField,
    Rating,
    Paper,
    Pagination,
    List,
    ListItem,
    Divider,
} from "@mui/material";

import { useEffect, useState } from "react";

import {
    getAllFeedbacks,
    submitAuthFeedback,
    submitGuestFeedback,
} from "../../../api/feedback";

import { toast } from "react-toastify";

export default function FeedbackSection() {
    const [feedbacks, setFeedbacks] = useState<any[]>([]);

    const [openModal, setOpenModal] = useState(false);

    const [openForm, setOpenForm] = useState(false);

    const [selectedReview, setSelectedReview] =
        useState<any>(null);

    const [page, setPage] = useState(1);

    const [isLoggedIn, setIsLoggedIn] =
        useState(false);

    const [rating, setRating] =
        useState<number | null>(5);

    const [comment, setComment] = useState("");

    const [userName, setUserName] =
        useState("");

    const [pincode, setPincode] =
        useState("");

    useEffect(() => {
        loadFeedbacks();

        const checkAuth = () => {
            setIsLoggedIn(
                !!localStorage.getItem("token")
            );
        };

        checkAuth();

        window.addEventListener(
            "storage",
            checkAuth
        );

        return () => {
            window.removeEventListener(
                "storage",
                checkAuth
            );
        };
    }, []);

    const loadFeedbacks = async () => {
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
    };

    const resetForm = () => {
        setRating(5);

        setComment("");

        setUserName("");

        setPincode("");
    };

    const handleSubmit = async () => {
        try {
            if (isLoggedIn) {
                if (!comment) {
                    return toast.error(
                        "Comment required"
                    );
                }

                await submitAuthFeedback({
                    rating: rating || 5,
                    comment,
                });
            } else {
                if (
                    !userName ||
                    !pincode ||
                    !comment
                ) {
                    return toast.error(
                        "Fill all fields"
                    );
                }

                await submitGuestFeedback({
                    userName,
                    pincode,
                    rating: rating || 5,
                    comment,
                });
            }

            toast.success(
                "Feedback Submitted"
            );

            resetForm();

            setOpenForm(false);

            loadFeedbacks();
        } catch {
            toast.error(
                "Submission failed"
            );
        }
    };

    return (
        <Box
            sx={{
                py: 6,
                px: 2,
                background:
                    "linear-gradient(to bottom,#faf8f5,#f3ede3)",
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",

                    fontFamily:
                        '"Playfair Display", serif',

                    fontSize: {
                        xs: "2rem",
                        md: "2.6rem",
                    },

                    mb: 4,

                    color: "#4A0E17",
                }}
            >
                Customer Reviews
            </Typography>

            {/* REVIEW CARDS */}

            <Box
                sx={{

                    display: "flex",

                    gap: 2,

                    overflowX: "auto",

                    overflowY: "hidden",

                    pb: 2,

                    mb: 4,

                    px: 2,

                    scrollBehavior: "smooth",

                    justifyContent: {
                        xs: "flex-start",
                        md: "center"
                    },

                    WebkitOverflowScrolling:
                        "touch",

                    scrollSnapType:
                        "x proximity",

                    "&::-webkit-scrollbar": {

                        height: "6px"

                    },

                    "&::-webkit-scrollbar-thumb": {

                        background: "#c4a878",

                        borderRadius: "20px"

                    }

                }}
            >
                {feedbacks
                    .slice(0, 5)
                    .map((f) => (
                        <Box
                            key={f.id}
                            sx={{
                                flexShrink: 0,
                            }}
                        >
                            <Paper
                                onClick={() =>
                                    setSelectedReview(f)
                                }
                                sx={{
                                    cursor: "pointer",

                                    width: 200,

                                    minWidth: 200,

                                    height: 155,

                                    display: "flex",

                                    flexDirection: "column",

                                    overflow: "hidden",

                                    justifyContent: "flex-start",

                                    p: 2,

                                    borderRadius: "14px",

                                    border:
                                        "1px solid rgba(184,155,115,.25)",

                                    boxShadow:
                                        "0 4px 12px rgba(0,0,0,.05)",

                                    transition: ".25s",

                                    "&:hover": {

                                        transform:
                                            "translateY(-4px)",

                                        boxShadow:
                                            "0 10px 24px rgba(0,0,0,.12)",

                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,

                                        overflow:
                                            "hidden",

                                        whiteSpace:
                                            "nowrap",

                                        textOverflow:
                                            "ellipsis",
                                    }}
                                >
                                    {f.userName}
                                </Typography>

                                <Rating
                                    readOnly
                                    size="small"
                                    value={f.rating}
                                />

                                {!!f.area && (
                                    <Typography
                                        sx={{
                                            fontSize:
                                                ".82rem",

                                            color:
                                                "#9b7b4f",

                                            fontWeight:
                                                600,

                                            mt: .5,
                                        }}
                                    >
                                        📍 {f.area}
                                    </Typography>
                                )}

                                <Typography
                                    sx={{
                                        mt: .5,

                                        fontSize:
                                            ".9rem",

                                        overflow:
                                            "hidden",

                                        display:
                                            "-webkit-box",

                                        WebkitLineClamp:
                                            2,

                                        WebkitBoxOrient:
                                            "vertical",

                                        color:
                                            "#555",
                                    }}
                                >
                                    {f.comment}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
            </Box>

            {/* BUTTONS */}

            <Box
                sx={{
                    display: "flex",

                    justifyContent:
                        "center",

                    gap: 2,

                    flexWrap:
                        "wrap",
                }}
            >
                {feedbacks.length > 5 && (
                    <Button
                        onClick={() =>
                            setOpenModal(true)
                        }
                        sx={{
                            color:
                                "#4A0E17",

                            fontWeight:
                                700,
                        }}
                    >
                        +{feedbacks.length - 5}
                        More
                    </Button>
                )}

                <Button
                    variant="contained"
                    onClick={() =>
                        setOpenForm(true)
                    }
                    sx={{
                        px: 4,

                        py: 1.5,

                        borderRadius:
                            "10px",

                        background:
                            "linear-gradient(135deg,#4A0E17,#6d1223)",
                    }}
                >
                    ✦ SHARE EXPERIENCE ✦
                </Button>
            </Box>

            {/* ALL REVIEWS */}

            {/* ALL REVIEWS */}

            <Modal
                open={openModal}
                onClose={() =>
                    setOpenModal(false)
                }
            >

                <Paper
                    sx={{

                        width: {
                            xs: "92%",
                            sm: 550
                        },

                        maxHeight: "80vh",

                        overflow: "hidden",

                        display: "flex",

                        flexDirection: "column",

                        mx: "auto",

                        mt: {
                            xs: "4vh",
                            sm: "8vh"
                        },

                        p: 3,

                        borderRadius: "18px"

                    }}
                >

                    <Typography
                        variant="h6"
                        mb={2}
                    >

                        All Reviews

                    </Typography>


                    <Box

                        sx={{

                            overflowY: "auto",

                            flex: 1,

                            pr: 1,

                            mb: 2,

                            "&::-webkit-scrollbar": {

                                width: "6px"

                            },

                            "&::-webkit-scrollbar-thumb": {

                                background: "#c4a878",

                                borderRadius: "10px"

                            }

                        }}

                    >

                        <List>

                            {

                                feedbacks
                                    .slice(
                                        (page - 1) * 10,
                                        page * 10
                                    )
                                    .map((f) => (

                                        <ListItem
                                            key={f.id}
                                            sx={{
                                                alignItems: "flex-start"
                                            }}
                                        >

                                            <Box>

                                                <Typography
                                                    fontWeight={700}
                                                >

                                                    {f.userName}

                                                </Typography>

                                                <Rating
                                                    readOnly
                                                    value={f.rating}
                                                />

                                                {!!f.area && (

                                                    <Typography

                                                        sx={{

                                                            color: "#9b7b4f",

                                                            fontWeight: 600,

                                                            mb: .5

                                                        }}

                                                    >

                                                        📍 {f.area}

                                                    </Typography>

                                                )}

                                                <Typography>

                                                    {f.comment}

                                                </Typography>

                                            </Box>

                                        </ListItem>

                                    ))

                            }

                        </List>

                    </Box>


                    <Box

                        sx={{

                            display: "flex",

                            justifyContent: "center",

                            pt: 1

                        }}

                    >

                        <Pagination

                            count={
                                Math.ceil(
                                    feedbacks.length / 10
                                )
                            }

                            page={page}

                            onChange={(_, p) =>
                                setPage(p)
                            }

                        />

                    </Box>

                </Paper>

            </Modal>

            {/* REVIEW DETAILS */}

            <Modal
                open={!!selectedReview}
                onClose={() =>
                    setSelectedReview(null)
                }
            >
                <Paper
                    sx={{
                        width: {
                            xs: "92%",
                            sm: 500,
                        },

                        mx: "auto",

                        mt: "10vh",

                        p: 4,

                        borderRadius:
                            "18px",
                    }}
                >
                    {selectedReview && (
                        <>
                            <Typography
                                fontWeight={700}
                                fontSize="1.6rem"
                            >
                                {
                                    selectedReview.userName
                                }
                            </Typography>

                            <Rating
                                readOnly
                                value={
                                    selectedReview.rating
                                }
                            />

                            {!!selectedReview.area && (
                                <Typography
                                    sx={{
                                        mt: 1,

                                        color:
                                            "#9b7b4f",

                                        fontWeight:
                                            600,
                                    }}
                                >
                                    📍 {
                                        selectedReview.area
                                    }
                                </Typography>
                            )}

                            <Typography mt={2}>
                                {
                                    selectedReview.comment
                                }
                            </Typography>
                        </>
                    )}
                </Paper>
            </Modal>

            {/* FORM MODAL */}

            <Modal
                open={openForm}
                onClose={() =>
                    setOpenForm(false)
                }
            >
                <Paper
                    sx={{
                        width: {
                            xs: "92%",
                            sm: 480,
                        },

                        mx: "auto",

                        mt: "8vh",

                        p: 4,

                        borderRadius:
                            "18px",

                        background:
                            "linear-gradient(to bottom,#fff,#faf6ef)",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize:
                                "2rem",

                            fontFamily:
                                '"Playfair Display", serif',

                            color:
                                "#4A0E17",
                        }}
                    >
                        Share Your Experience
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {!isLoggedIn && (
                        <>
                            <TextField
                                fullWidth
                                label="Name"
                                sx={{ mb: 2 }}
                                value={userName}
                                onChange={(e) =>
                                    setUserName(
                                        e.target.value
                                    )
                                }
                            />

                            <TextField
                                fullWidth
                                label="Pincode"
                                helperText="Area auto detected"
                                sx={{ mb: 2 }}
                                value={pincode}
                                onChange={(e) =>
                                    setPincode(
                                        e.target.value
                                    )
                                }
                            />
                        </>
                    )}

                    <Rating
                        value={rating}
                        onChange={(_, v) =>
                            setRating(v)
                        }
                    />

                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Comment"
                        sx={{ mt: 2 }}
                        value={comment}
                        onChange={(e) =>
                            setComment(
                                e.target.value
                            )
                        }
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            mt: 3,

                            py: 1.4,

                            background:
                                "#4A0E17",
                        }}
                    >
                        Submit Review
                    </Button>
                </Paper>
            </Modal>
        </Box>
    );
}