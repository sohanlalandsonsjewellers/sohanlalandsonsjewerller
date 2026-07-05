import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper, Divider, Chip, CircularProgress, Button } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import {
  LocalShipping,
  Inventory2,
  ReceiptLong,
  OpenInNew
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { useAuth } from '../contexts/AuthProvider';

export default function MyOrders() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadOrders = async () => {
      try {
        // 1️⃣ Nimbus se latest tracking sync
        await axiosInstance.post(
          "/order/refresh-tracking",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        // 2️⃣ Updated orders fetch
        const res = await axiosInstance.get(

          "/order/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setOrders(res.data.orders);

      }

      catch (err) {

        console.error(err);

      }

      finally {

        setLoading(false);

      }

    };

    if (token) {

      loadOrders();

    }

  }, [token]);

  return (
    <Container maxWidth="md" sx={{ py: 8, minHeight: '80vh', bgcolor: '#FDFBF7' }}>
      {/* Luxury Header Section */}
      <Box sx={{ mb: 6, borderBottom: '1px solid #E5D5BC', pb: 2 }}>
        <Button
          startIcon={<ArrowBackIos sx={{ fontSize: '0.7rem !important' }} />}
          onClick={() => navigate('/')}
          sx={{ color: '#8E8370', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', mb: 1, p: 0 }}
        >
          CONTINUE SHOPPING
        </Button>
        <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', color: '#4A0E17', fontWeight: 700 }}>
          Order History
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ textAlign: 'center', py: 10 }}><CircularProgress sx={{ color: '#4A0E17' }} /></Box>
      ) : orders.length === 0 ? (
        <Typography sx={{ textAlign: 'center', color: '#8E8370', fontStyle: 'italic' }}>Your exquisite collection is currently empty.</Typography>
      ) : (
        orders.map((order: any) => (
          <Paper key={order.id} sx={{ mb: 4, p: 4, borderRadius: 0, border: '1px solid #E5D5BC', bgcolor: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#4A0E17', letterSpacing: '0.05em' }}>
                ORDER #{order.id.slice(-6).toUpperCase()}
              </Typography>
              <Chip
                label={order.status}
                sx={{
                  bgcolor: order.status === 'ACCEPTED' ? '#EDE6DB' : '#F9F6F0',
                  color: '#4A0E17',
                  borderRadius: 0,
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  textTransform: 'uppercase'
                }}
              />
            </Box>

            <Divider sx={{ mb: 3, opacity: 0.5 }} />

            {/* Product Items */}
            {/* Product Items */}
            {order.items &&
              order.items.map((item: any, index: number) => {

                const delivered =
                  order.shipmentStatus === "Delivered" ||
                  order.shipmentStatus === "DL";

                return (

                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3
                    }}
                  >

                    {/* Image sirf delivery se pehle */}
                    {!delivered && (

                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          mr: 3,
                          border: "1px solid #E5D5BC",
                          overflow: "hidden",
                          borderRadius: "10px",
                          bgcolor: "#fff"
                        }}
                      >
                        <img
                          src={
                            item.image ||
                            item.images?.[0] ||
                            ""
                          }
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                        />
                      </Box>

                    )}

                    <Box
                      sx={{
                        flex: 1
                      }}
                    >

                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: '"Playfair Display"',
                          fontWeight: 600,
                          color: "#4A0E17"
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: "#8E8370",
                          display: "block"
                        }}
                      >
                        Qty: {item.qty}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4A0E17",
                          fontWeight: 700
                        }}
                      >
                        ₹{Number(item.price).toLocaleString("en-IN")}
                      </Typography>

                      {delivered && (

                        <Chip
                          size="small"
                          label="Delivered Successfully"
                          color="success"
                          sx={{
                            mt: 1,
                            fontWeight: 700
                          }}
                        />

                      )}

                    </Box>

                  </Box>

                );

              })}

            <Divider sx={{ my: 2 }} />

            {order.awbNumber && (

              <Box
                sx={{
                  mt: 3,
                  mb: 2,
                  overflow: "hidden",
                  borderRadius: "18px",
                  border: "1px solid #E8D8BE",
                  background:
                    "linear-gradient(135deg,#fffdf9 0%,#faf5ec 100%)",
                  boxShadow:
                    "0 10px 30px rgba(74,14,23,.08)"
                }}
              >

                {/* Header */}

                <Box
                  sx={{
                    px: 3,
                    py: 2,
                    bgcolor: "#4A0E17",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  }}
                >
                  <LocalShipping />

                  <Typography
                    sx={{
                      fontWeight: 700,
                      letterSpacing: ".05em"
                    }}
                  >
                    Shipment Details
                  </Typography>

                </Box>

                <Box sx={{ p: 3 }}>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        md: "1fr 1fr"
                      },
                      gap: 2
                    }}
                  >

                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        bgcolor: "#fff",
                        borderRadius: 3,
                        border: "1px solid #EFE2CF"
                      }}
                    >

                      <Typography
                        sx={{
                          color: "#8D7A63",
                          fontSize: 13
                        }}
                      >
                        Courier Partner
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 700,
                          mt: .5
                        }}
                      >
                        🚚 {order.courierName}
                      </Typography>

                    </Paper>

                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        bgcolor: "#fff",
                        borderRadius: 3,
                        border: "1px solid #EFE2CF"
                      }}
                    >

                      <Typography
                        sx={{
                          color: "#8D7A63",
                          fontSize: 13
                        }}
                      >
                        AWB Number
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 700,
                          mt: .5,
                          fontFamily: "monospace"
                        }}
                      >
                        📦 {order.awbNumber}
                      </Typography>

                    </Paper>

                  </Box>

                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 2
                    }}
                  >

                    <Box>

                      <Typography
                        sx={{
                          color: "#8D7A63",
                          fontSize: 13,
                          mb: .5
                        }}
                      >
                        Current Shipment Status
                      </Typography>

                      <Chip
                        label={order.shipmentStatus || "Processing"}
                        color={
                          order.shipmentStatus === "Delivered"
                            ? "success"
                            : order.shipmentStatus === "Out For Delivery"
                              ? "warning"
                              : "info"
                        }
                        sx={{
                          fontWeight: 700,
                          px: 1,
                          fontSize: ".82rem"
                        }}
                      />

                    </Box>

                    <Button
                      variant="contained"
                      target="_blank"
                      href={order.trackingUrl}
                      startIcon={<OpenInNew />}
                      sx={{
                        bgcolor: "#4A0E17",
                        px: 3,
                        py: 1.3,
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: 700,
                        boxShadow:
                          "0 8px 18px rgba(74,14,23,.25)",
                        "&:hover": {
                          bgcolor: "#651726"
                        }
                      }}
                    >
                      Track Shipment
                    </Button>

                  </Box>

                </Box>

              </Box>

            )}
          </Paper>
        ))
      )}
    </Container>
  );
}