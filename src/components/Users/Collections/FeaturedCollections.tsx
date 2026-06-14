import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Product = {
  id?: string;
  _id?: string;
  name: string;
  images: string[];
};

export default function FeaturedCollections({
  products = [],
}: {
  products?: Product[];
}) {
  const navigate = useNavigate();

  if (!products.length) return null;

  const uniqueMap: Record<string, any> = {};

  products.forEach((p: any) => {

    const key =
      p.name
        ?.toLowerCase()
        ?.trim();

    if (!uniqueMap[key]) {
      uniqueMap[key] = p;
    } else {
      const oldDate =
        new Date(
          uniqueMap[key].created_at
        ).getTime();
      const newDate =
        new Date(
          p.created_at
        ).getTime();
      if (newDate > oldDate) {
        uniqueMap[key] = p;
      }

    }

  });

  const latestProducts =
    Object.values(uniqueMap)
      .sort(
        (a: any, b: any) =>
          new Date(b.created_at).getTime() -
          new Date(a.created_at).getTime()
      )
      .slice(0, 5);



  const dayNumber = Math.floor(
    Date.now() / 86400000
  );

  const startIndex =
    latestProducts.length <= 3
      ? 0
      : dayNumber %
      (latestProducts.length - 2);

  const topThree =
    latestProducts.slice(
      startIndex,
      startIndex + 3
    );

  const goCollection = (name: string) => {
    navigate(
      `/collection/${encodeURIComponent(name)}`
    );
  };

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 4 },
        background:
          "linear-gradient(to bottom,#faf8f5,#f5f0e8)",
      }}
    >

      {/* HEADING */}

      <Box
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >

        <Typography
          sx={{
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },

            fontFamily:
              '"Playfair Display", serif',

            color: "#4A0E17",

            fontWeight: 500,
          }}
        >
          Sohan Lal & Sons Collection
        </Typography>

        <Typography
          sx={{
            color: "#7b7265",
            mt: 1,
            fontSize: "1rem",
          }}
        >
          Explore our newly launched collection
        </Typography>

      </Box>


      {/* MAIN GRID */}

      <Grid
        container
        spacing={1.5}
        sx={{
          maxWidth: "980px",
          mx: "auto",
          alignItems: "stretch"
        }}
      >

        {/* BIG LEFT CARD */}

        {topThree[0] && (

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >

            <LuxuryCard
              product={topThree[0]}
              hheight={520}
              large
              onClick={goCollection}
            />

          </Grid>

        )}

        {/* RIGHT */}

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >

            {topThree
              .slice(1, 3)
              .map((p) => (

                <LuxuryCard
                  key={p.id || p._id}
                  product={p}
                  height={250}
                  onClick={goCollection}
                />

              ))}

          </Box>

        </Grid>

      </Grid>

    </Box>
  );
}



function LuxuryCard({
  product,
  height,
  onClick,
  large = false,
}: any) {

  return (

    <Box

      onClick={() =>
        onClick(product.name)
      }

      sx={{

        position: "relative",

        height,

        overflow: "hidden",

        borderRadius: "18px",

        cursor: "pointer",

        boxShadow:
          "0 10px 40px rgba(0,0,0,.12)",

        "&:hover img": {

          transform: "scale(1.05)"

        }

      }}

    >

      <Box

        component="img"

        src={product.images?.[0]}

        sx={{

          width: "100%",

          height: "100%",

          objectFit: "cover",

          transition: ".5s"

        }}

      />


      <Box

        sx={{

          position: "absolute",

          inset: 0,

          background:
            "linear-gradient(to top,rgba(0,0,0,.65),transparent 45%)"

        }}

      />


      <Box

        sx={{

          position: "absolute",

          left: 30,

          bottom: 30,

          color: "#fff"

        }}

      >

        <Typography

          sx={{

            fontSize:
              large
                ? "3rem"
                : "2rem",

            fontFamily:
              '"Playfair Display", serif',

            lineHeight: 1.1,

            mb: 1

          }}

        >

          {product.name}

        </Typography>


        <Typography

          sx={{

            opacity: .9,

            mb: 2,

            letterSpacing: 1

          }}

        >

          Luxury Jewellery Collection

        </Typography>


        <Button

          variant="outlined"

          sx={{

            borderColor: "#d9b46a",

            color: "#f4d38b",

            borderRadius: 0,

            px: 3,

            "&:hover": {

              borderColor: "#f4d38b"

            }

          }}

        >

          Explore →

        </Button>

      </Box>

    </Box>

  )

}