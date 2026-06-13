import React, { useState, useMemo } from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, Badge, Menu, MenuItem, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { ShoppingBagOutlined, FavoriteBorderOutlined, PersonOutlineOutlined, SearchOutlined } from '@mui/icons-material';
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
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 1. Categories Filter (Tumhari categories list)
  const categories = ['Rings', 'Earrings', 'Choker Set', 'Chain Pendent Set', 'Mantika'];
  // 1. Filter Categories based on searchVal (Sirf match hone wali dikhengi)
  const filteredCategories = useMemo(() => {
    if (!searchVal) return [];
    const categories = ['Rings', 'Earrings', 'Choker Set', 'Chain Pendent Set', 'Mantika'];
    return categories.filter(c => c.toLowerCase().includes(searchVal.toLowerCase()));
  }, [searchVal]);

  // 2. Filter Products (Sirf wahi product dikhenge jo search se match honge)
  const filteredProducts = useMemo(() => {
    if (!searchVal || !allProducts) return [];
    return allProducts
      .filter(p => p.name.toLowerCase().includes(searchVal.toLowerCase()))
      .filter((v, i, a) => a.findIndex(t => t.name === v.name) === i)
      // Agar category dropdown me// Dropdown render wala part update karoin dikh gayi hai, toh product mein repeat na ho
      .filter(p => !filteredCategories.some(cat => cat.toLowerCase() === p.name.toLowerCase()))
      .slice(0, 5);
  }, [searchVal, allProducts, filteredCategories]);

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ borderBottom: '1px solid rgba(74,14,23,.2)', background: '#FDFBF7', zIndex: 1200 }}>
        <TrustBar />
        <Toolbar sx={{ display: 'grid', gridTemplateColumns: { xs: 'auto 1fr auto', md: '1fr 2fr 1fr' }, alignItems: 'center', gap: 2, px: { xs: 2, md: 6 }, py: 1 }}>

          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, color: '#4A0E17', fontSize: { xs: '0.9rem', md: '1.35rem' } }}>सोहन लाल एंड संस ज्वेलर्स</Typography>
            <Typography variant="caption" sx={{ fontSize: '0.45rem', color: '#4A0E17', display: 'block' }}>LUXE JEWELLERY SHOWROOM</Typography>
          </Box>

          <Box sx={{ position: 'relative', width: '100%' }}>
            <Box sx={{ display: "flex", alignItems: "center", background: '#FFFFFF', border: '1px solid #4A0E17', borderRadius: "8px", height: "40px" }}>
              <InputBase fullWidth placeholder="Search..." value={searchVal} onChange={(e) => { setSearchVal(e.target.value); onSearch(e.target.value); }} sx={{ px: 2, color: '#4A0E17' }} />
              <SearchOutlined sx={{ color: "#4A0E17", mr: 1 }} />
            </Box>

            // Dropdown render wala part update karo
            {searchVal && (
              <Paper sx={{ position: 'absolute', top: '45px', width: '100%', zIndex: 2000, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
                <List sx={{ py: 0 }}>
                  {/* Yahan prefix 'Collection: ' hata diya */}
                  {filteredCategories.map(cat => (
                    <ListItem key={cat} onClick={() => { navigate(`/collection/${cat}`); setSearchVal(""); }} sx={{ bgcolor: '#fff9f0', borderBottom: '1px solid #eee' }}>
                      <ListItemText primary={cat} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 600, color: '#4A0E17' }} />
                    </ListItem>
                  ))}

                  <Divider />

                  {/* Products list */}
                  {filteredProducts.map(p => (
                    <ListItem key={p.id} onClick={() => { navigate(`/product/${p.id}`); setSearchVal(""); }}>
                      <ListItemText primary={p.name} primaryTypographyProps={{ fontSize: '0.85rem' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => navigate("/wishlist")} sx={{ color: '#4A0E17' }}><FavoriteBorderOutlined /></IconButton>
            <IconButton onClick={() => setIsCartOpen(true)} sx={{ color: '#4A0E17' }}><Badge badgeContent={itemCount} sx={{ '& .MuiBadge-badge': { bgcolor: '#4A0E17', color: '#fff' } }}><ShoppingBagOutlined /></Badge></IconButton>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ color: '#4A0E17' }}><PersonOutlineOutlined /></IconButton>
          </Box>
        </Toolbar>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          {user ? <MenuItem onClick={() => { setAnchorEl(null); logout("/"); }}>Logout</MenuItem> : <MenuItem onClick={() => { setAnchorEl(null); navigate("/login"); }}>Login</MenuItem>}
        </Menu>
      </AppBar>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}