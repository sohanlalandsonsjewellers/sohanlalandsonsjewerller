import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Box,
    Paper,
    Typography,
    CircularProgress,
    IconButton,
    Snackbar,
    Alert
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { getUserById, updateUser } from "../../api/adminUser";

export default function UserEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState<any>({
        name: "",
        phoneNumber: "",
        password: "",
        adminRole: false
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        severity: "success" | "error";
    }>({
        open: false,
        message: "",
        severity: "success"
    });

    const loadUser = useCallback(async () => {

        if (!id) return;

        setLoading(true);

        try {

            const res: any = await getUserById(id);

            // NOTE: purana bug yaha tha — "res.data.user" try kar rahe the,
            // lekin api wrapper (adminUser.ts) already response.data unwrap
            // karke deta hai, isliye seedha "res.user" (ya res.data ka fallback)
            // use karna hai, warna form hamesha khaali/default reh jaata hai.
            const user = res?.user ?? res?.data?.user ?? res?.data ?? res;

            setForm({
                name: user?.name || "",
                phoneNumber: user?.phoneNumber || "",
                password: "",
                adminRole: !!user?.adminRole
            });

        } catch (err) {

            console.error("Failed to load user", err);

            setSnackbar({
                open: true,
                message: "User data load nahi ho paaya. Dobara try karein.",
                severity: "error"
            });

        } finally {

            setLoading(false);

        }

    }, [id]);

    useEffect(() => {

        loadUser();

    }, [loadUser]);

    async function handleSubmit() {

        setSaving(true);

        try {

            await updateUser(id!, form);

            setSnackbar({
                open: true,
                message: "User details successfully update ho gayi.",
                severity: "success"
            });

        } catch (err) {

            console.error("Update failed", err);

            setSnackbar({
                open: true,
                message: "Update fail ho gaya. Dobara try karein.",
                severity: "error"
            });

        } finally {

            setSaving(false);

        }

    }

    if (loading) {

        return (

            <Box
                sx={{
                    height: "70vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

                <CircularProgress sx={{ color: "#4A0E17" }} />

            </Box>

        );

    }

    return (

        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#FBF7F0",
                py: { xs: 3, sm: 4, md: 6 },
                px: { xs: 2, sm: 3 }
            }}
        >

            <Box
                sx={{
                    maxWidth: 560,
                    mx: "auto"
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: { xs: 2, sm: 3 }
                    }}
                >

                    <IconButton
                        onClick={() => navigate(-1)}
                        sx={{
                            bgcolor: "#FFF",
                            border: "1px solid rgba(184,155,115,.25)",
                            "&:hover": {
                                bgcolor: "rgba(74,14,23,.06)"
                            }
                        }}
                    >

                        <ArrowBackRoundedIcon sx={{ color: "#4A0E17" }} />

                    </IconButton>

                    <Typography
                        sx={{
                            color: "#4A0E17",
                            fontWeight: 700,
                            fontSize: { xs: "1.1rem", sm: "1.25rem" }
                        }}
                    >

                        Back to Users

                    </Typography>

                </Box>

                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2.5, sm: 4 },
                        borderRadius: 4,
                        bgcolor: "#FFFDF9",
                        border: "1px solid rgba(229,213,188,.5)",
                        boxShadow: "0 12px 32px rgba(74,14,23,.08)"
                    }}
                >

                    <Typography
                        variant="h5"
                        sx={{
                            mb: { xs: 2.5, sm: 3.5 },
                            color: "#4A0E17",
                            fontWeight: 700,
                            fontFamily: '"Playfair Display", serif',
                            fontSize: { xs: "1.4rem", sm: "1.6rem" }
                        }}
                    >

                        Edit User

                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 2, sm: 2.5 }
                        }}
                    >

                        <TextField
                            label="Name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            fullWidth
                            sx={fieldSx}
                        />

                        <TextField
                            label="Phone Number"
                            value={form.phoneNumber}
                            onChange={(e) => {
                                // sirf digits allow, aur max 10 digits
                                const digitsOnly = e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 10);

                                setForm({
                                    ...form,
                                    phoneNumber: digitsOnly
                                });
                            }}
                            error={
                                form.phoneNumber.length > 0 &&
                                form.phoneNumber.length !== 10
                            }
                            helperText={
                                form.phoneNumber.length > 0 &&
                                form.phoneNumber.length !== 10
                                    ? "Phone number must be exactly 10 digits"
                                    : " "
                            }
                            inputProps={{
                                inputMode: "numeric",
                                maxLength: 10
                            }}
                            fullWidth
                            sx={fieldSx}
                        />

                        <TextField
                            label="New Password (optional)"
                            type="password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    password: e.target.value
                                })
                            }
                            fullWidth
                            sx={fieldSx}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={form.adminRole}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            adminRole: e.target.checked
                                        })
                                    }
                                    sx={{
                                        color: "#4A0E17",
                                        "&.Mui-checked": {
                                            color: "#4A0E17"
                                        }
                                    }}
                                />
                            }
                            label="Admin User"
                            sx={{ color: "#4A0E17", fontWeight: 600 }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                gap: 1.5,
                                mt: 1,
                                flexDirection: { xs: "column", sm: "row" }
                            }}
                        >

                            <Button
                                variant="outlined"
                                onClick={() => navigate(-1)}
                                fullWidth
                                sx={{
                                    height: 48,
                                    borderRadius: 3,
                                    textTransform: "none",
                                    fontWeight: 700,
                                    color: "#4A0E17",
                                    borderColor: "rgba(74,14,23,.3)",
                                    "&:hover": {
                                        borderColor: "#4A0E17",
                                        bgcolor: "rgba(74,14,23,.04)"
                                    }
                                }}
                            >

                                Cancel

                            </Button>

                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={
                                    saving ||
                                    form.phoneNumber.length !== 10
                                }
                                fullWidth
                                sx={{
                                    height: 48,
                                    borderRadius: 3,
                                    bgcolor: "#4A0E17",
                                    color: "#FFF",
                                    fontWeight: 700,
                                    textTransform: "none",
                                    boxShadow: "0 10px 24px rgba(74,14,23,.18)",
                                    transition: ".25s",
                                    "&:hover": {
                                        bgcolor: "#611523",
                                        transform: "translateY(-2px)",
                                        boxShadow:
                                            "0 16px 30px rgba(74,14,23,.24)"
                                    },
                                    "&:disabled": {
                                        bgcolor: "rgba(74,14,23,.35)",
                                        color: "#FFF"
                                    }
                                }}
                            >

                                {saving ? (
                                    <CircularProgress
                                        size={22}
                                        sx={{ color: "#FFF" }}
                                    />
                                ) : (
                                    "Save Changes"
                                )}

                            </Button>

                        </Box>

                    </Box>

                </Paper>

            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3500}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >

                <Alert
                    severity={snackbar.severity}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    sx={{ borderRadius: 2 }}
                >

                    {snackbar.message}

                </Alert>

            </Snackbar>

        </Box>

    );

}

const fieldSx = {
    "& .MuiOutlinedInput-root": {
        borderRadius: 2.5,
        bgcolor: "#FFF"
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#4A0E17"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#4A0E17"
    }
};
