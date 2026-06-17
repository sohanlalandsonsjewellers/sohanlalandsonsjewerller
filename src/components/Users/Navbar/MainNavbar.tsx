import React, { useState, useMemo, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, Badge, Menu, MenuItem, Paper, List, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material';
import { ShoppingBagOutlined, FavoriteBorderOutlined, PersonOutlineOutlined, SearchOutlined, LogoutOutlined, LocalShippingOutlined, NotificationsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthProvider';
import { useCart } from '../../../contexts/CartProvider';
import CartDrawer from '../Cart/CartDrawer';
import TrustBar from './TrustBar';

interface MainNavbarProps {
  onSearch: (query: string) => void;
  allProducts?: any[];
}

export default function MainNavbar({ onSearch, allProducts = [] }: MainNavbarProps) {
  const { logout, user } = useAuth();
  const { itemCount } = useCart();
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {

    const loadWishlistCount = () => {
      try {
        const saved = localStorage.getItem("sls_wishlist");
        const ids = saved ? JSON.parse(saved) : [];
        setWishlistCount(ids.length);
      } catch {
        setWishlistCount(0);
      }
    };

    loadWishlistCount();

    window.addEventListener(
      "sls_wishlist_update",
      loadWishlistCount
    );

    return () => {
      window.removeEventListener(
        "sls_wishlist_update",
        loadWishlistCount
      );
    };

  }, []);
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 1. Dynamic Product Name Search Logic (categories excluded intentionally)
  const searchResults = useMemo(() => {
    if (!searchVal) return { categories: [], products: [] };

    const filteredProds = allProducts
      .filter(p => p.name.toLowerCase().includes(searchVal.toLowerCase()))
      .filter((v, i, a) => a.findIndex(t => t.name === v.name) === i)
      .slice(0, 5);

    return { categories: [], products: filteredProds };
  }, [searchVal, allProducts]);

  const handleNavigation = (path: string) => {
    setSearchVal("");
    setAnchorEl(null);
    if (window.location.pathname === path) {
      // Already on this exact collection page - force a refresh of route state
      navigate('/', { replace: true });
      window.requestAnimationFrame(() => navigate(path));
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ borderBottom: '1px solid rgba(74,14,23,.2)', background: '#FDFBF7', zIndex: 1200 }}>
        <TrustBar />
        <Toolbar sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr auto', md: '1fr 2fr 1fr' },
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
          px: { xs: 1.5, md: 6 },
          py: 1
        }}>

          {/* Logo */}
          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer', justifySelf: 'start' }}>
            <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, color: '#4A0E17', fontSize: { xs: '0.9rem', md: '1.35rem' }, lineHeight: 1 }}>सोहन लाल एंड संस ज्वेलर्स</Typography>
            <Typography variant="caption" sx={{ fontSize: '0.45rem', color: '#4A0E17', display: 'block' }}>LUXE JEWELLERY SHOWROOM</Typography>
          </Box>

          {/* Search Box */}
          <Box sx={{ gridColumn: { xs: 'span 2', md: 'auto' }, order: { xs: 3, md: 2 }, position: 'relative' }}>
            <Box sx={{ display: "flex", alignItems: "center", background: '#FFFFFF', border: '1px solid #4A0E17', borderRadius: "8px", height: "38px" }}>
              <InputBase fullWidth placeholder="Search..." value={searchVal} onChange={(e) => { setSearchVal(e.target.value); onSearch(e.target.value); }} sx={{ px: 2, color: '#4A0E17', fontSize: '0.9rem' }} />
              <SearchOutlined sx={{ color: "#4A0E17", mr: 1 }} />
            </Box>

            {searchVal && (searchResults.categories.length > 0 || searchResults.products.length > 0) && (
              <Paper sx={{ position: 'absolute', top: '42px', width: '100%', zIndex: 2000, boxShadow: '0 8px 16px rgba(0,0,0,0.1)', bgcolor: '#FDFBF7' }}>
                <List sx={{ py: 0 }}>
                  {searchResults.categories.map(cat => (
                    <ListItem key={cat} onClick={() => handleNavigation(`/collection/${cat}`)} sx={{ borderBottom: '1px solid #eee', '&:hover': { bgcolor: '#f7f1e9' } }}>
                      <ListItemText primary={cat} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 600, color: '#4A0E17' }} />
                    </ListItem>
                  ))}
                  {searchResults.categories.length > 0 && searchResults.products.length > 0 && <Divider />}
                  {searchResults.products.map(p => (
                    <ListItem key={p.id} onClick={() => handleNavigation(`/collection/${p.name}`)} sx={{ '&:hover': { bgcolor: '#f5f5f5' } }}>
                      <ListItemText primary={p.name} primaryTypographyProps={{ fontSize: '0.85rem' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Box>

          {/* Icons & Profile Menu */}
          <Box sx={{ display: 'flex', justifySelf: 'end', order: 2 }}>
            <IconButton
              onClick={() => navigate("/wishlist")}
              sx={{ color: '#4A0E17' }}
            >
              <Badge
                badgeContent={wishlistCount}
                invisible={wishlistCount === 0}
                sx={{
                  '& .MuiBadge-badge': {
                    bgcolor: '#4A0E17',
                    color: '#fff'
                  }
                }}
              >
                <FavoriteBorderOutlined />
              </Badge>
            </IconButton>
            <IconButton onClick={() => setIsCartOpen(true)} sx={{ color: '#4A0E17' }}><Badge badgeContent={itemCount} sx={{ '& .MuiBadge-badge': { bgcolor: '#4A0E17', color: '#fff' } }}><ShoppingBagOutlined /></Badge></IconButton>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ color: '#4A0E17' }}><PersonOutlineOutlined /></IconButton>
          </Box>
        </Toolbar>

        {/* Profile Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)} sx={{ mt: 1 }}>
          {user ? (
            <Box>
              <MenuItem sx={{ fontWeight: 600, pointerEvents: 'none' }}>{user.name || "User"}</MenuItem>
              <Divider />
              <MenuItem onClick={() => handleNavigation("/profile")}><ListItemIcon><AccountCircleOutlined fontSize="small" /></ListItemIcon>My Profile</MenuItem>
              <MenuItem onClick={() => handleNavigation("/my-orders")}><ListItemIcon><LocalShippingOutlined fontSize="small" /></ListItemIcon>Orders</MenuItem>
              <MenuItem onClick={() => handleNavigation("/notifications")}><ListItemIcon><NotificationsOutlined fontSize="small" /></ListItemIcon>Notifications</MenuItem>
              <MenuItem onClick={() => { setAnchorEl(null); logout("/"); }}><ListItemIcon><LogoutOutlined fontSize="small" /></ListItemIcon>Logout</MenuItem>
            </Box>
          ) : (
            <MenuItem onClick={() => handleNavigation("/login")}>Login / Sign Up</MenuItem>
          )}
        </Menu>
      </AppBar>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
