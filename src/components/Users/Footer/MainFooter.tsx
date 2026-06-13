import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, IconButton, Typography, Stack } from "@mui/material";
import { WhatsApp, Instagram, Facebook, YouTube, LocationOn, Phone, Email } from "@mui/icons-material";
import QRCode from "react-qr-code";
import logo from "./logo.png";

const FooterLink = ({ children, to = "/" }: { children: React.ReactNode; to?: string }) => (
  <Link to={to} style={{ textDecoration: "none" }}>
    <Typography
      sx={{
        display: "block",
        mb: 0.8,
        fontSize: 13,
        color: "rgba(255,255,255,0.65)",
        cursor: "pointer",
        transition: "color 0.2s",
        "&:hover": { color: "#E6C46A" }
      }}
    >
      {children}
    </Typography>
  </Link>
);

const ColHead = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      fontSize: 14,
      fontWeight: 700,
      color: "#E6C46A",
      letterSpacing: 2,
      textTransform: "uppercase",
      fontFamily: "Georgia, serif",
      mb: 1.5,
      pb: 0.8,
      borderBottom: "1px solid rgba(212,175,55,0.35)"
    }}
  >
    {children}
  </Typography>
);

export default function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "#1a0004",
        pt: 5, // Top padding thoda badha diya taaki curve hataane ke baad space dikhe
        pb: 3,
        borderTop: "2px solid rgba(212,175,55,0.35)" // Clean straight gold border
      }}
    >
      <Container maxWidth="lg">

        {/* LOGO — center, compact */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Box
            component="img"
            src={logo}
            alt="Sohan Lal & Son's Jewellers"
            sx={{
              height: { xs: 70, md: 85 },
              maxWidth: "280px",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 14px rgba(212,175,55,0.35))"
            }}
          />
        </Box>

        {/* DIVIDER */}
        <Box sx={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4) 20%, rgba(212,175,55,0.4) 80%, transparent)", mb: 3 }} />

        {/* MAIN ROW */}
        <Grid container spacing={3}>

          {/* QR */}
           <Grid size={{ xs: 12, sm: 3 }}>
            <ColHead>Download App</ColHead>
            <Box sx={{ display: "inline-block", p: 1, background: "#fff", borderRadius: "8px", border: "2px solid #D4AF37" }}>
              <QRCode value="http://localhost:3000/" size={110} />
            </Box>
            <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.45)", fontSize: 11.5, lineHeight: 1.5 }}>
              Scan to visit our website
            </Typography>

            <Stack direction="row" spacing={0.8} sx={{ mt: 1.5 }}>
              {[<WhatsApp key="w" />, <Instagram key="i" />, <Facebook key="f" />, <YouTube key="y" />].map((icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    p: 0.5,
                    "&:hover": { color: "#E6C46A" }
                  }}
                >
                  {React.cloneElement(icon, { sx: { fontSize: 18 } })}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* USEFUL LINKS */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <ColHead>Useful Links</ColHead>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/new-arrivals">New Arrivals</FooterLink>
            <FooterLink to="/wishlist">Wishlist</FooterLink>
            <FooterLink to="/my-orders">My Orders</FooterLink>
            <FooterLink to="/track-order">Track Order</FooterLink>
            <FooterLink to="/profile">My Profile</FooterLink>
          </Grid>

          {/* INFORMATION */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <ColHead>Information</ColHead>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
            <FooterLink to="/shipping-policy">Shipping Policy</FooterLink>
            <FooterLink to="/refund-policy">Refund Policy</FooterLink>
            <FooterLink to="/exchange-policy">Exchange Policy</FooterLink>
            <FooterLink to="/faqs">FAQs</FooterLink>
          </Grid>

          {/* CONTACT */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <ColHead>Contact Us</ColHead>

            <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "flex-start" }}>
              <LocationOn sx={{ color: "#D4AF37", fontSize: 15, mt: 0.2, flexShrink: 0 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, lineHeight: 1.7 }}>
                Durga Mandir Road, Siswa Bazar, Maharajganj, UP – 273163
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 0.8, alignItems: "center" }}>
              <Phone sx={{ color: "#D4AF37", fontSize: 14, flexShrink: 0 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5 }}>+91 96822 96756</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 1.5, alignItems: "center" }}>
              <Email sx={{ color: "#D4AF37", fontSize: 14, flexShrink: 0 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 12, wordBreak: "break-all" }}>
                sohanlalandsonsjewellers@gmail.com
              </Typography>
            </Box>

            {/* Payment methods */}
            <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
              {["UPI", "GPay", "Paytm", "RuPay"].map((p) => (
                <Box
                  key={p}
                  sx={{
                    px: 1.2,
                    py: 0.4,
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "4px",
                    color: "rgba(230,196,106,0.8)",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: 0.5
                  }}
                >
                  {p}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM BAR */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(212,175,55,0.15)",
            textAlign: "center"
          }}
        >
          <Typography sx={{ color: "#E6C46A", fontSize: 11.5 }}>
            © 2026 Sohan Lal & Son's Jewellers. All Rights Reserved.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}