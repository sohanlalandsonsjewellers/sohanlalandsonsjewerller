import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllPublic } from "../../../api/product";

type Props = {
  category: string;
};

export default function HomeBanner({
  category,
}: Props) {

  const [banners, setBanners] =
    useState<any[]>([]);

  const [bannerIndex, setBannerIndex] =
    useState(0);

  const navigate =
    useNavigate();

  useEffect(() => {

    let active = true;

    (async () => {

      try {

        const res =
          await getAllPublic({
            q: "",
            category,
          });

        if (!active) return;

        const rawProducts =
          res.products || [];


        // ONLY PRODUCTS WITH BANNER IMAGE

        const bannerProducts =
          rawProducts.filter(
            (p: any) =>

              p.bannerImages
                ?.desktopUrl
          );


        // REMOVE DUPLICATES (same name)

        const uniqueMap:
          Record<string, any> = {};

        bannerProducts.forEach(
          (p: any) => {

            const key =
              p.name
                .toLowerCase()
                .trim();

            if (
              !uniqueMap[key]
            ) {

              uniqueMap[key] = p;

            } else {

              const oldDate =
                new Date(
                  uniqueMap[key]
                    .created_at
                ).getTime();

              const newDate =
                new Date(
                  p.created_at
                ).getTime();

              if (
                newDate >
                oldDate
              ) {

                uniqueMap[key] = p;

              }

            }

          }
        );


        // LATEST FIRST

        const finalBanners =
          Object.values(uniqueMap)
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime()
                -
                new Date(b.created_at).getTime()
            )
            .slice(-5);
        setBanners(
          finalBanners
        );


        // DAY WISE ROTATION

        if (
          finalBanners.length
        ) {

          const dayIndex =

            Math.floor(

              Date.now()

              /

              86400000

            )

            %

            finalBanners.length;


          setBannerIndex(
            dayIndex
          );

        }

      } catch (err) {

        console.log(err);

      }

    })();

    return () => {

      active = false;

    };

  }, [category]);



  // AUTO SLIDE

  useEffect(() => {

    if (
      !banners.length
    ) return;

    const interval =
      setInterval(() => {

        setBannerIndex(

          prev =>

            (
              prev + 1
            )

            %

            banners.length

        );

      }, 5000);

    return () => clearInterval(
      interval
    );

  }, [banners]);


  if (
    !banners.length
  ) return null;


  const activeProduct =
    banners[
    bannerIndex
    ];


  const image =

    activeProduct
      ?.bannerImages
      ?.desktopUrl;


  return (

    <Box

      sx={{

        px: {
          xs: 2,
          sm: 2,
          md: 2
        },

        pt: {
          xs: 2,
          md: 0
        }

      }}

    >

      <Box

        onClick={() =>

          navigate(

            `/collection/${encodeURIComponent(
              activeProduct.name
            )}`

          )

        }

        sx={{

          position: "relative",

          overflow: "hidden",

          cursor: "pointer",

          borderRadius: {
            xs: "16px",
            md: "18px"
          },

          height: {
            xs: "320px",
            sm: "420px",
            md: "500px"
          },

          background: "#000"

        }}

      >

        {/* BLUR BACKGROUND */}

        <Box

          sx={{

            position: "absolute",

            inset: 0,

            backgroundImage:
              `url(${image})`,

            backgroundSize: "cover",

            backgroundPosition:
              "center",

            filter:
              "blur(18px) brightness(.55)",

            transform:
              "scale(1.08)"

          }}

        />


        {/* MAIN IMAGE */}

        <Box

          component="img"

          src={image}

          sx={{

            position: "relative",

            width: "100%",

            height: "100%",

            objectFit: {
              xs: "cover",
              md: "contain"
            },

            objectPosition:
              "center",

            display: "block",

            zIndex: 2

          }}

        />


        {/* OVERLAY */}

        <Box

          sx={{

            position: "absolute",

            inset: 0,

            background:

              "linear-gradient(to top,rgba(0,0,0,.55),transparent)"

          }}

        />


        {/* TEXT */}

        <Box

          sx={{

            position: "absolute",

            bottom: 30,

            left: 25,

            color: "#fff",

            zIndex: 3

          }}

        >

          <Typography

            sx={{

              fontSize: {

                xs: "1.6rem",

                md: "2.8rem"

              },

              fontFamily:

                '"Playfair Display", serif'

            }}

          >

            {activeProduct.name}

          </Typography>


          <Typography

            sx={{

              opacity: .9,

              fontSize: {

                xs: 12,

                md: 15

              }

            }}

          >

            {activeProduct.category}

          </Typography>

        </Box>

      </Box>


      {/* DOTS */}

      <Box

        sx={{

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          gap: 1,

          mt: 2

        }}

      >

        {

          banners.map(

            (_, index) => (

              <Box

                key={index}

                onClick={() => {

                  setBannerIndex(
                    index
                  )

                }}

                sx={{

                  width:

                    bannerIndex === index

                      ? 20

                      : 8,

                  height: 8,

                  borderRadius:
                    999,

                  background:

                    bannerIndex === index

                      ? "#7A1025"

                      : "#d4c5ad",

                  transition:
                    ".3s",

                  cursor:
                    "pointer"

                }}

              />

            )

          )

        }

      </Box>

    </Box>

  );

}