import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface PolicySection {
  title: string;
  content: string | React.ReactNode;
}

interface PolicyPageProps {
  title: string;
  subtitle?: string;
  intro?: string;
  sections: PolicySection[];
}

const GoldAccordion = ({
  section,
}: {
  section: PolicySection;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        mb: 2,
        border: "1px solid rgba(212,175,55,0.25)",
        borderRadius: "14px",
        overflow: "hidden",
        background: "#FFFDF8",
        boxShadow: "0 4px 20px rgba(0,0,0,.04)",
      }}
    >
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2.5, md: 4 },
          py: 2.5,
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            color: "#7A5A22",
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          {section.title}
        </Typography>

        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: expanded
              ? "rgba(212,175,55,.12)"
              : "transparent",
          }}
        >
          {expanded ? (
            <Remove sx={{ color: "#D4AF37" }} />
          ) : (
            <Add sx={{ color: "#D4AF37" }} />
          )}
        </Box>
      </Box>

      {expanded && (
        <Box
          sx={{
            px: { xs: 2.5, md: 4 },
            pb: 3,
            borderTop: "1px solid rgba(212,175,55,.15)",
          }}
        >
          <Typography
            sx={{
              color: "#6B4B1F",
              lineHeight: 2,
              fontSize: 14.5,
              mt: 2,
            }}
          >
            {section.content}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default function PolicyPage({
  title,
  subtitle,
  intro,
  sections,
}: PolicyPageProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F8F3EA",
      }}
    >
      {/* HERO SECTION */}

      <Box
        sx={{
          background:
            "linear-gradient(180deg,#3B0007 0%,#52000B 100%)",
          pt: { xs: 6, md: 10 },
          pb: 12,
        }}
      >
        <Container maxWidth="md">
          {/* Breadcrumb */}

          <Typography
            sx={{
              color: "rgba(255,255,255,.45)",
              fontSize: 13,
              mb: 6,
            }}
          >
            <Link
              to="/"
              style={{
                color: "rgba(255,255,255,.6)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>

            {" / "}

            <Box
              component="span"
              sx={{
                color: "#E6C46A",
              }}
            >
              {title}
            </Box>
          </Typography>

          {/* Heading */}

          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 1,
                  bgcolor: "#D4AF37",
                }}
              />

              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#D4AF37",
                }}
              />

              <Box
                sx={{
                  width: 80,
                  height: 1,
                  bgcolor: "#D4AF37",
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#E6C46A",
                fontSize: {
                  xs: 30,
                  md: 48,
                },
                fontWeight: 700,
                letterSpacing: 3,
                fontFamily: "Georgia, serif",
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography
                sx={{
                  color: "#C9A74E",
                  mt: 2,
                  letterSpacing: 3,
                }}
              >
                {subtitle}
              </Typography>
            )}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mt: 3,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 1,
                  bgcolor: "#D4AF37",
                }}
              />

              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#D4AF37",
                }}
              />

              <Box
                sx={{
                  width: 80,
                  height: 1,
                  bgcolor: "#D4AF37",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CONTENT SECTION */}

      <Container
        maxWidth="md"
        sx={{
          mt: -6,
          pb: 10,
        }}
      >
        {intro && (
          <Box
            sx={{
              mb: 5,
              p: 4,
              borderRadius: "16px",
              background: "#FFFDF8",
              border:
                "1px solid rgba(212,175,55,.25)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,.05)",
            }}
          >
            <Typography
              sx={{
                color: "#6B4B1F",
                lineHeight: 2,
                fontSize: 15,
              }}
            >
              {intro}
            </Typography>
          </Box>
        )}

        {sections.map((section, index) => (
          <GoldAccordion
            key={index}
            section={section}
          />
        ))}

        <Box
          sx={{
            textAlign: "center",
            mt: 8,
          }}
        >
          <Typography
            sx={{
              color: "#8A6B36",
              fontSize: 13,
            }}
          >
            For any queries contact us at{" "}
            <Box
              component="span"
              sx={{
                color: "#B8860B",
                fontWeight: 600,
              }}
            >
              sohanlalandsonsjewellers@gmail.com
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}