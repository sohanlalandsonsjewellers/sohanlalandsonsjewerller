import { useEffect, useState } from "react";
import HomeBanner from "../Banner/HomeBanner";
import FeaturedCollections from "../Collections/FeaturedCollections";
import { Box, Typography } from "@mui/material";
import { getAllPublic } from "../../../api/product";

type Product = {
  id?: string;
  _id?: string;
  name: string;
  images: string[];
};

export default function Home() {

  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {

    getAllPublic({
      q: "",
      category: "all"
    })

      .then((res) => {

        setProducts(
          res.products || []
        );

      })

      .catch(console.log);

  }, []);

  return (

    <Box>

      <HomeBanner
        category=""
      />

      <Box
        sx={{
          bgcolor: "#fdfaf7",
          py: 5,
          textAlign: "center",
          borderY: "1px solid #eee"
        }}
      >

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontFamily: "serif"
          }}
        >
          SLAS Collection
        </Typography>

        <Typography>
          Explore our newly launched collection
        </Typography>

      </Box>

      {/* FEATURED COLLECTIONS */}

      <FeaturedCollections
        products={products}
      />

    </Box>

  )

}