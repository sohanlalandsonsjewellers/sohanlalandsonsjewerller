import { useCallback, useEffect, useState } from "react";
import MainNavbar from "../components/Users/Navbar/MainNavbar";
import HomeBanner from "../components/Users/Banner/HomeBanner";
import CategoryStrip from "../components/Users/Categories/CategoryStrip";
import FeaturedCollections from "../components/Users/Collections/FeaturedCollections";
import UserFooter from "../components/Users/Footer/MainFooter";
import ProductGrid from "../components/Users/Product/ProductGrid";
import { Container, Box, Skeleton } from "@mui/material";
import { getAllPublic } from "../api/product";
import CartDrawer from "../components/Users/Cart/CartDrawer";
import FeedbackSection from "../components/Users/Feedback/FeedbackSection";

export default function UserHome() {
  const [products, setProducts] = useState<any[]>([]);
  const [initialProducts, setInitialProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ q: "", category: "all" });
  const [cartOpen, setCartOpen] = useState(false);

  // LOGIC: Agar search query (q) khali nahi hai, to banner hide karo 
  const isSearching = filters.q.trim().length > 0;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await getAllPublic({ ...filters, signal });

        if (!signal.aborted) {
          const productsData =
            res.products || [];
          setProducts(productsData);
          localStorage.setItem(
            "cached_products",
            JSON.stringify(productsData)
          );
          if (
            filters.category === "all" &&
            filters.q === ""
          ) {
            setInitialProducts(productsData);
          }
        }
      } catch (err: any) {

        if (
          err.name === "CanceledError" ||
          err.message === "canceled"
        ) {
          return;
        }

        console.log(
          "Offline mode: Loading cached products"
        );

        const cachedProducts =
          localStorage.getItem(
            "cached_products"
          );

        if (cachedProducts) {
          const parsed =
            JSON.parse(cachedProducts);
          setProducts(parsed);
          if (
            filters.category === "all" &&
            filters.q === ""
          ) {
            setInitialProducts(parsed);
          }
        } else {
          setProducts([]);
        }

      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    fetchProducts();
    return () => { controller.abort(); };
  }, [filters]);

  const handleSearch = useCallback((q: string) => {
    setFilters((prev) => (prev.q === q ? prev : { ...prev, q }));
  }, []);

  const handleCategory = useCallback((cat: string) => {
    setFilters((prev) => (prev.category === cat ? prev : { ...prev, category: cat, q: "" }));
  }, []);

  return (
    <Box sx={{ bgcolor: "#FDFBF7", minHeight: "100vh" }}>
      <MainNavbar onSearch={handleSearch} allProducts={initialProducts} />

      {!isSearching && (
        <>
          <CategoryStrip products={initialProducts} onSelect={handleCategory} />
          <HomeBanner category={filters.category} />
        </>
      )}

      <Container maxWidth="lg" sx={{ mt: isSearching ? 4 : 0, mb: 2 }}>
        {loading ? (
          <Box sx={{ py: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill,minmax(250px,1fr))",
                gap: 3,
              }}
            >
              {[...Array(8)].map((_, index) => (
                <Box key={index}>
                  <Skeleton
                    variant="rectangular"
                    height={280}
                    animation="wave"
                    sx={{
                      borderRadius: 2,
                    }}
                  />

                  <Skeleton
                    height={40}
                    animation="wave"
                  />

                  <Skeleton
                    width="70%"
                    animation="wave"
                  />

                  <Skeleton
                    width="40%"
                    animation="wave"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <ProductGrid products={products} />
        )}
      </Container>

      {!isSearching && (
        <Box sx={{ background: "linear-gradient(to bottom,#faf8f5,#f5f0e8)", pt: 2, pb: 2, borderTop: "1px solid rgba(184,155,115,.15)" }}>
          <FeaturedCollections products={initialProducts} />
        </Box>
      )}

      {!isSearching && <FeedbackSection />}

      <UserFooter />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </Box>
  );
}