import React from 'react';
import { Grid as Grid, Box, Typography } from '@mui/material'; // Grid2 v6 ke liye
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: any[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  
  const getGroupedProducts = (rawProducts: any[]) => {
    if (!rawProducts || !rawProducts.length) return [];
    return rawProducts.reduce((acc: any[], current: any) => {
      const existingProduct = acc.find(
        (item) => item.name.toLowerCase().trim() === current.name.toLowerCase().trim()
      );
      if (existingProduct) {
        existingProduct.images = Array.from(new Set([...existingProduct.images, ...current.images]));
        if (!existingProduct.allVariantIds) {
          existingProduct.allVariantIds = [existingProduct.id || existingProduct._id];
        }
        existingProduct.allVariantIds.push(current.id || current._id);
        if (current.price < existingProduct.price) {
          existingProduct.price = current.price;
        }
      } else {
        acc.push({ ...current, allVariantIds: [current.id || current._id] });
      }
      return acc;
    }, []);
  };

  const uniqueGroupedProducts = getGroupedProducts(products);

  return (
    <Box sx={{ my: 6, px: { xs: 2, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography 
          variant="h4" 
          sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, color: '#4A0E17', mb: 1 }}
        >
          Find Your Perfect Match
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ color: '#8E8370', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, fontSize: '0.75rem' }}
        >
          Shop by Categories
        </Typography>
      </Box>

      {/* Container Grid */}
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {uniqueGroupedProducts.map((product) => (
          // 🚀 FIX: 'item' prop removed, 'size' prop added
          <Grid key={product.id || product._id} size={{ xs: 6, sm: 4, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}