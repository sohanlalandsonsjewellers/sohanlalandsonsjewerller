import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Box, Typography, CircularProgress, Button, Card, CardMedia,
  CardContent, IconButton, Slider, Checkbox, FormControlLabel, Divider,
  Chip, Collapse, Drawer, useMediaQuery, useTheme
} from '@mui/material';
import { ArrowBackIos, FavoriteBorder, Favorite, FilterList, ExpandMore, ExpandLess, Close } from '@mui/icons-material';
import MainNavbar from '../components/Users/Navbar/MainNavbar';
import UserFooter from '../components/Users/Footer/MainFooter';
import { getAllPublic } from '../api/product';
import { optimizeImage } from '../utils/imageOptimizer';

export default function CollectionLanding() {
  const { name } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [loading, setLoading] = useState(true);
  const [filteredVariants, setFilteredVariants] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [collectionItems, setCollectionItems] = useState<any[]>([]);

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile drawer
  const [catOpen, setCatOpen] = useState(true);
  const [subCatOpen, setSubCatOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const savedWishlist = localStorage.getItem("sls_wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch { return []; }
  });

  const handleGlobalWishlistUpdate = useCallback(() => {
    try {
      const savedWishlist = localStorage.getItem("sls_wishlist");
      setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
    } catch { setWishlist([]); }
  }, []);

  useEffect(() => {
    window.addEventListener("sls_wishlist_update", handleGlobalWishlistUpdate);
    return () => window.removeEventListener("sls_wishlist_update", handleGlobalWishlistUpdate);
  }, [handleGlobalWishlistUpdate]);

  useEffect(() => {
    if (!name) return;
    async function fetchCollectionVariants() {
      setLoading(true);
      try {
        const res = await getAllPublic({ q: "", category: "all" });
        const allFetchedProducts = res.products || [];
        setAllProducts(allFetchedProducts);
        const decodedTargetName = decodeURIComponent(name || "").toLowerCase().trim();
        const matchedItems = allFetchedProducts.filter((p: any) => {
          const productName = p.name ? p.name.toLowerCase().trim() : "";
          return productName.includes(decodedTargetName) || decodedTargetName.includes(productName);
        });
        setCollectionItems(matchedItems);

        // Set price range from data
        const prices = matchedItems.map((p: any) => Number(p.price || 0));
        if (prices.length > 0) {
          const max = Math.max(...prices);
          setMaxPrice(max);
          setPriceRange([0, max]);
        }
      } catch (err) { console.error("Error:", err); }
      finally { setLoading(false); }
    }
    fetchCollectionVariants();
  }, [name]);

  // Derive unique categories & subcategories from collection items
  const uniqueCategories = useMemo(() =>
    Array.from(new Set(collectionItems.map((p: any) => p.category).filter(Boolean))),
    [collectionItems]
  );
  const uniqueSubCategories = useMemo(() =>
    Array.from(new Set(collectionItems.map((p: any) => p.subCategory).filter(Boolean))),
    [collectionItems]
  );

  // Apply filters
  useEffect(() => {
    let result = [...collectionItems];
    if (selectedCategories.length > 0) {
      result = result.filter((p: any) => selectedCategories.includes(p.category));
    }
    if (selectedSubCategories.length > 0) {
      result = result.filter((p: any) => selectedSubCategories.includes(p.subCategory));
    }
    result = result.filter((p: any) => {
      const price = Number(p.price || 0);
      return price >= priceRange[0] && price <= priceRange[1];
    });
    setFilteredVariants(result);
  }, [collectionItems, selectedCategories, selectedSubCategories, priceRange]);

  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };
  const handleSubCategoryToggle = (sub: string) => {
    setSelectedSubCategories(prev =>
      prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setPriceRange([0, maxPrice]);
  };

  const activeFilterCount = selectedCategories.length + selectedSubCategories.length +
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

  const handleToggleWishlist = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    let updated = wishlist.includes(itemId) ? wishlist.filter(id => id !== itemId) : [...wishlist, itemId];
    localStorage.setItem("sls_wishlist", JSON.stringify(updated));
    setWishlist(updated);
    window.dispatchEvent(new Event("sls_wishlist_update"));
  };

  // ── Shared filter panel content (used in both sidebar and drawer) ──
  const FilterContent = (
    <Box sx={{ p: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography sx={{ fontWeight: 700, color: '#4A0E17', fontSize: '0.82rem', letterSpacing: 1 }}>
          FILTERS {activeFilterCount > 0 && `(${activeFilterCount})`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {activeFilterCount > 0 && (
            <Typography
              onClick={handleClearFilters}
              sx={{ fontSize: '0.7rem', color: '#9E9E9E', cursor: 'pointer', '&:hover': { color: '#4A0E17' } }}
            >
              Clear all
            </Typography>
          )}
          {isMobile && (
            <IconButton size="small" onClick={() => setDrawerOpen(false)}>
              <Close sx={{ fontSize: 18, color: '#4A4A4A' }} />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Active filter chips */}
      {activeFilterCount > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
          {selectedCategories.map(c => (
            <Chip key={c} label={c} size="small" onDelete={() => handleCategoryToggle(c)}
              sx={{ fontSize: '0.62rem', bgcolor: '#4A0E17', color: '#fff', '& .MuiChip-deleteIcon': { color: '#fff' } }} />
          ))}
          {selectedSubCategories.map(s => (
            <Chip key={s} label={s} size="small" onDelete={() => handleSubCategoryToggle(s)}
              sx={{ fontSize: '0.62rem', bgcolor: '#6E6557', color: '#fff', '& .MuiChip-deleteIcon': { color: '#fff' } }} />
          ))}
          {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
            <Chip label={`₹${priceRange[0].toLocaleString('en-IN')} – ₹${priceRange[1].toLocaleString('en-IN')}`}
              size="small" onDelete={() => setPriceRange([0, maxPrice])}
              sx={{ fontSize: '0.62rem', bgcolor: '#8E8370', color: '#fff', '& .MuiChip-deleteIcon': { color: '#fff' } }} />
          )}
        </Box>
      )}

      <Divider sx={{ mb: 1.5 }} />

      {/* Category filter */}
      {uniqueCategories.length > 0 && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mb: 0.5 }}
            onClick={() => setCatOpen(p => !p)}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#4A4A4A', letterSpacing: 0.5 }}>CATEGORY</Typography>
            {catOpen ? <ExpandLess sx={{ fontSize: 16, color: '#9E9E9E' }} /> : <ExpandMore sx={{ fontSize: 16, color: '#9E9E9E' }} />}
          </Box>
          <Collapse in={catOpen}>
            <Box sx={{ pl: 0.5 }}>
              {uniqueCategories.map((cat: string) => (
                <FormControlLabel
                  key={cat}
                  control={
                    <Checkbox size="small" checked={selectedCategories.includes(cat)} onChange={() => handleCategoryToggle(cat)}
                      sx={{ color: '#C5A98B', '&.Mui-checked': { color: '#4A0E17' }, p: 0.5 }} />
                  }
                  label={<Typography sx={{ fontSize: '0.75rem', color: '#4A4A4A' }}>{cat}</Typography>}
                  sx={{ display: 'flex', m: 0, mb: 0.3 }}
                />
              ))}
            </Box>
          </Collapse>
          <Divider sx={{ my: 1.5 }} />
        </>
      )}

      {/* SubCategory filter */}
      {uniqueSubCategories.length > 0 && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mb: 0.5 }}
            onClick={() => setSubCatOpen(p => !p)}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#4A4A4A', letterSpacing: 0.5 }}>SUB CATEGORY</Typography>
            {subCatOpen ? <ExpandLess sx={{ fontSize: 16, color: '#9E9E9E' }} /> : <ExpandMore sx={{ fontSize: 16, color: '#9E9E9E' }} />}
          </Box>
          <Collapse in={subCatOpen}>
            <Box sx={{ pl: 0.5 }}>
              {uniqueSubCategories.map((sub: string) => (
                <FormControlLabel
                  key={sub}
                  control={
                    <Checkbox size="small" checked={selectedSubCategories.includes(sub)} onChange={() => handleSubCategoryToggle(sub)}
                      sx={{ color: '#C5A98B', '&.Mui-checked': { color: '#4A0E17' }, p: 0.5 }} />
                  }
                  label={<Typography sx={{ fontSize: '0.75rem', color: '#4A4A4A', textTransform: 'capitalize' }}>{sub}</Typography>}
                  sx={{ display: 'flex', m: 0, mb: 0.3 }}
                />
              ))}
            </Box>
          </Collapse>
          <Divider sx={{ my: 1.5 }} />
        </>
      )}

      {/* Price Range filter */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mb: 1 }}
        onClick={() => setPriceOpen(p => !p)}>
        <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#4A4A4A', letterSpacing: 0.5 }}>PRICE RANGE</Typography>
        {priceOpen ? <ExpandLess sx={{ fontSize: 16, color: '#9E9E9E' }} /> : <ExpandMore sx={{ fontSize: 16, color: '#9E9E9E' }} />}
      </Box>
      <Collapse in={priceOpen}>
        <Box sx={{ px: 1 }}>
          <Slider
            value={priceRange}
            onChange={(_, val) => setPriceRange(val as [number, number])}
            min={0}
            max={maxPrice}
            step={Math.max(100, Math.floor(maxPrice / 100) * 10)}
            sx={{
              color: '#4A0E17',
              '& .MuiSlider-thumb': { width: 14, height: 14 },
              '& .MuiSlider-rail': { bgcolor: '#E8DFD0' }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '0.7rem', color: '#6E6557' }}>
              ₹{priceRange[0].toLocaleString('en-IN')}
            </Typography>
            <Typography sx={{ fontSize: '0.7rem', color: '#6E6557' }}>
              ₹{priceRange[1].toLocaleString('en-IN')}
            </Typography>
          </Box>
        </Box>
      </Collapse>

      {/* Mobile apply button */}
      {isMobile && (
        <Button
          fullWidth
          onClick={() => setDrawerOpen(false)}
          sx={{
            mt: 3, bgcolor: '#4A0E17', color: '#fff', borderRadius: 0,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: 1,
            '&:hover': { bgcolor: '#6B1521' }
          }}
        >
          APPLY FILTERS {activeFilterCount > 0 && `(${activeFilterCount})`}
        </Button>
      )}
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#FDFBF7', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MainNavbar onSearch={() => { }} allProducts={allProducts} />
      <Container maxWidth="xl" sx={{ py: { xs: 1.5, md: 3 }, flex: 1 }}>
        <Button
          startIcon={<ArrowBackIos sx={{ fontSize: '0.62rem !important' }} />}
          onClick={() => navigate('/')}
          sx={{ color: '#6E6557', mb: 1, fontSize: '0.7rem' }}
        >
          BACK TO HOME
        </Button>

        {/* Title + Filter button row */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", serif', color: '#4A0E17', fontWeight: 600, textTransform: 'capitalize' }}>
            {decodeURIComponent(name || '')} Range
          </Typography>

          {/* Mobile filter button */}
          <Button
            startIcon={<FilterList sx={{ fontSize: '1rem' }} />}
            onClick={() => setDrawerOpen(true)}
            sx={{
              color: '#4A0E17', border: '1px solid #4A0E17', borderRadius: 0,
              fontSize: '0.72rem', px: 1.5, py: 0.6,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </Button>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress sx={{ color: '#4A0E17' }} />
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>

            {/* ── DESKTOP SIDEBAR ── */}
            <Box
              sx={{
                width: 220,
                flexShrink: 0,
                display: { xs: 'none', md: 'block' },  // hidden on mobile
                position: 'sticky',
                top: 80,
                alignSelf: 'flex-start',
              }}
            >
              <Box sx={{ border: '1px solid #E8DFD0', bgcolor: '#fff' }}>
                {FilterContent}
              </Box>
            </Box>

            {/* ── MOBILE DRAWER ── */}
            <Drawer
              anchor="bottom"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  maxHeight: '80vh',
                  overflowY: 'auto',
                  bgcolor: '#fff',
                }
              }}
            >
              {FilterContent}
            </Drawer>

            {/* ── PRODUCT GRID — always full width on mobile ── */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {/* Result count + desktop active chips row */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                <Typography sx={{ fontSize: '0.72rem', color: '#9E9E9E' }}>
                  {filteredVariants.length} product{filteredVariants.length !== 1 ? 's' : ''} found
                </Typography>
                {/* Show active chips above grid on mobile too */}
                {activeFilterCount > 0 && (
                  <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', gap: 0.5 }}>
                    {selectedCategories.map(c => (
                      <Chip key={c} label={c} size="small" onDelete={() => handleCategoryToggle(c)}
                        sx={{ fontSize: '0.6rem', bgcolor: '#4A0E17', color: '#fff', '& .MuiChip-deleteIcon': { color: '#fff' } }} />
                    ))}
                    {selectedSubCategories.map(s => (
                      <Chip key={s} label={s} size="small" onDelete={() => handleSubCategoryToggle(s)}
                        sx={{ fontSize: '0.6rem', bgcolor: '#6E6557', color: '#fff', '& .MuiChip-deleteIcon': { color: '#fff' } }} />
                    ))}
                    {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
                      <Chip
                        label={`₹${priceRange[0].toLocaleString('en-IN')}–₹${priceRange[1].toLocaleString('en-IN')}`}
                        size="small" onDelete={() => setPriceRange([0, maxPrice])}
                        sx={{ fontSize: '0.6rem', bgcolor: '#8E8370', color: '#fff', '& .MuiChip-deleteIcon': { color: '#fff' } }} />
                    )}
                  </Box>
                )}
              </Box>

              {filteredVariants.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                  <Typography sx={{ color: '#9E9E9E', fontFamily: '"Playfair Display"', fontSize: '1.1rem' }}>
                    No products match the selected filters.
                  </Typography>
                  <Button onClick={handleClearFilters} sx={{ mt: 2, color: '#4A0E17', border: '1px solid #4A0E17', borderRadius: 0, fontSize: '0.72rem' }}>
                    Clear Filters
                  </Button>
                </Box>
              ) : (
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                  gap: { xs: 1.5, md: 2.5 }
                }}>
                  {filteredVariants.map((item: any) => {
                    const itemId = (item.id || item._id || "").toString();
                    const stock = Number(item.stock || 0);
                    const isOutOfStock = stock <= 0;
                    const isWishlisted = wishlist.includes(itemId);

                    return (
                      <Card
                        key={itemId}
                        onClick={() => !isOutOfStock && navigate(`/product/${itemId}`)}
                        sx={{
                          borderRadius: 0, boxShadow: 'none', bgcolor: 'transparent',
                          cursor: isOutOfStock ? 'default' : 'pointer', transition: '0.3s', position: 'relative',
                          '&:hover': { transform: isOutOfStock ? 'none' : 'translateY(-4px)' }
                        }}
                      >
                        <IconButton
                          disabled={isOutOfStock}
                          onClick={(e) => handleToggleWishlist(e, itemId)}
                          sx={{
                            position: 'absolute', top: 8, right: 8, zIndex: 100,
                            bgcolor: 'rgba(255,255,255,0.9)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                            cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                            p: { xs: 0.5, md: 1 }
                          }}
                        >
                          {isWishlisted
                            ? <Favorite sx={{ color: '#4A0E17', fontSize: { xs: 20, md: 26 } }} />
                            : <FavoriteBorder sx={{ color: '#9E9E9E', fontSize: { xs: 20, md: 26 } }} />}
                        </IconButton>

                        <Box sx={{ pt: '85%', position: 'relative' }}>
                          <CardMedia
                            component="img"
                            image={optimizeImage(item.images?.[0])}
                            sx={{
                              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                              objectFit: 'contain',
                              filter: isOutOfStock ? 'grayscale(100%)' : 'none',
                              opacity: isOutOfStock ? 0.6 : 1
                            }}
                          />
                        </Box>

                        <CardContent sx={{ textAlign: 'center', px: { xs: 0.5, md: 2 }, py: { xs: 1, md: 2 } }}>
                          <Typography variant="caption" sx={{ display: "block", color: "#4A0E17", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, fontSize: { xs: '0.55rem', md: '0.7rem' } }}>
                            {item.category}
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: { xs: '0.55rem', md: '0.62rem' }, fontWeight: 700, color: '#8E8370' }}>
                            {item.subCategory?.toUpperCase()}
                          </Typography>
                          <Typography variant="body2" sx={{ fontFamily: '"Playfair Display"', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#4A0E17', fontWeight: 700, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            ₹{Number(item.price).toLocaleString('en-IN')}
                          </Typography>
                          {isOutOfStock && (
                            <Typography variant="caption" sx={{ color: 'red', fontWeight: 'bold', fontSize: { xs: '0.55rem', md: '0.7rem' } }}>OUT OF STOCK</Typography>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Container>
      <UserFooter />
    </Box>
  );
}
