import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper, CircularProgress, Grid, TextField, Button, Autocomplete } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getMyProfile, updateUser } from '../api/adminUser';
import { toast } from 'react-toastify';

export default function MyProfile() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<any>({});
    const [areaList, setAreaList] = useState<string[]>([]);

    const valueColor = "#4A0E17"; 

    useEffect(() => {
        getMyProfile().then((res) => {
            setProfile(res.user);
            setFormData(res.user);
            setLoading(false);
            if (res.user.pincode) fetchAreas(res.user.pincode);
        });
    }, []);

    const fetchAreas = async (pincode: string) => {
        try {
            const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await res.json();
            if (data[0].Status === "Success") {
                setAreaList(data[0].PostOffice.map((po: any) => po.Name));
            }
        } catch (e) { console.error("API error"); }
    };

    const handleSave = async () => {
        try {
            await updateUser(profile.id, formData);
            setProfile(formData);
            setIsEditing(false);
            toast.success("Profile updated successfully!");
        } catch (err) {
            toast.error("Failed to update profile.");
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: { xs: 3, md: 8 }, minHeight: '80vh', bgcolor: '#FDFBF7' }}>
            <Box sx={{ mb: 4 }}>
                <Button startIcon={<ArrowBackIos />} onClick={() => navigate('/')} sx={{ color: '#8E8370', mb: 2, fontSize: '0.8rem' }}>
                    BACK TO HOME
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', color: '#4A0E17', fontWeight: 700 }}>My Account</Typography>
                    {!isEditing ? (
                        <Button onClick={() => setIsEditing(true)} sx={{ color: '#4A0E17', fontWeight: 600 }}>EDIT</Button>
                    ) : (
                        <Box>
                            <Button onClick={() => setIsEditing(false)} sx={{ color: '#8E8370', mr: 1 }}>Cancel</Button>
                            <Button onClick={handleSave} variant="contained" sx={{ bgcolor: '#4A0E17' }}>Save</Button>
                        </Box>
                    )}
                </Box>
            </Box>

            {loading ? <Box sx={{ textAlign: 'center', py: 10 }}><CircularProgress sx={{ color: '#4A0E17' }} /></Box> : (
                <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, border: '1px solid #E5D5BC', bgcolor: '#FFFFFF', boxShadow: 'none' }}>
                    <Grid container spacing={4}>
                       <Grid size={{ xs: 12, md: 6 }}>
                            {isEditing ? (
                                <TextField fullWidth label="Full Name" variant="standard" value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} sx={{ mb: 3 }} />
                            ) : (
                                <Box sx={{ mb: 3 }}><Typography variant="caption" sx={{ color: '#8E8370', fontWeight: 700 }}>FULL NAME</Typography><Typography variant="body1" sx={{ color: valueColor }}>{profile?.name}</Typography></Box>
                            )}
                            
                            {isEditing ? (
                                <TextField fullWidth label="Email" variant="standard" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} sx={{ mb: 3 }} />
                            ) : (
                                <Box sx={{ mb: 3 }}><Typography variant="caption" sx={{ color: '#8E8370', fontWeight: 700 }}>EMAIL ADDRESS</Typography><Typography variant="body1" sx={{ color: valueColor }}>{profile?.email}</Typography></Box>
                            )}
                        </Grid>
                        
                       <Grid size={{ xs: 12, md: 6 }}>
                            {isEditing ? (
                                <TextField fullWidth label="Mobile Number" variant="standard" value={formData.phoneNumber || ''} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} sx={{ mb: 3 }} />
                            ) : (
                                <Box sx={{ mb: 3 }}><Typography variant="caption" sx={{ color: '#8E8370', fontWeight: 700 }}>MOBILE NUMBER</Typography><Typography variant="body1" sx={{ color: valueColor }}>{profile?.phoneNumber}</Typography></Box>
                            )}
                            
                            {isEditing ? (
                                <TextField fullWidth label="Pincode" variant="standard" value={formData.pincode || ''} onChange={(e) => { setFormData({ ...formData, pincode: e.target.value }); fetchAreas(e.target.value); }} sx={{ mb: 3 }} />
                            ) : (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="caption" sx={{ color: '#8E8370', fontWeight: 700 }}>AREA & PINCODE</Typography>
                                    <Typography variant="body1" sx={{ color: valueColor }}>{profile?.area || "N/A"} - {profile?.pincode}</Typography>
                                </Box>
                            )}
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 1 }}>
                        {isEditing ? (
                            <>
                                <Autocomplete
                                    options={areaList}
                                    value={formData.area || ""}
                                    onChange={(e, val) => setFormData({ ...formData, area: val })}
                                    renderInput={(params) => <TextField {...params} label="Select Area" variant="standard" sx={{ mb: 2 }} />}
                                />
                                <TextField fullWidth label="Shipping Address" variant="standard" multiline rows={2} value={formData.address || ''} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                            </>
                        ) : (
                            <>
                                <Typography variant="caption" sx={{ color: '#8E8370', fontWeight: 700 }}>SHIPPING ADDRESS</Typography>
                                <Typography variant="body1" sx={{ color: valueColor }}>{profile?.address || "No address saved yet."}</Typography>
                            </>
                        )}
                    </Box>
                </Paper>
            )}
        </Container>
    );
}