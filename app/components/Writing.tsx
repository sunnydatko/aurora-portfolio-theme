"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { blogPosts } from "../helpers/config";
import blog1 from "../images/blog-1.webp";
import blog2 from "../images/blog-2.webp";
import blog3 from "../images/blog-3.webp";

const imageMap: Record<string, StaticImageData> = {
  "blog-1": blog1,
  "blog-2": blog2,
  "blog-3": blog3,
};

export default function Writing() {
  return (
    <Box
      component="section"
      id="blog"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.09)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container sx={{ maxWidth: "1100px !important" }}>
        <Box className="reveal" sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="span"
            className="glow-eyebrow"
            sx={{
              display: "block",
              color: "primary.light",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12.5, md: 14 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            + My Writing
          </Typography>
          <Typography variant="h3" className="glow-heading">Blog</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {blogPosts.map((post, index) => (
            <Box
              key={post.slug}
              component="a"
              href={post.href}
              className="reveal"
              style={{ transitionDelay: `${index * 0.15 + 0.1}s` }}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "background.paper",
                textDecoration: "none",
                position: "relative",
                boxShadow: "0 8px 32px rgba(0,0,0,0.32), 0 0 28px rgba(236,72,153,0.07)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "#EC4899",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.35s ease",
                },
                "&:hover": {
                  boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 48px rgba(236,72,153,0.18)",
                  borderColor: "rgba(236,72,153,0.25)",
                  "&::after": { transform: "scaleX(1)" },
                  "& img": { transform: "scale(1.06)" },
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 200, md: "auto" },
                  flex: { md: "0 0 44%" },
                  overflow: "hidden",
                  "& img": { transition: "transform 0.6s ease" },
                }}
              >
                <Image
                  src={imageMap[post.image]}
                  alt={post.title}
                  fill
                  priority={index === 0}
                  style={{
                    objectFit: "cover",
                    filter: "brightness(1.15) contrast(1.05)",
                  }}
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
              </Box>

              {/* Content */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 3, md: 4.5 },
                }}
              >
                {/* Number + category + read time */}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <Typography
                    aria-hidden
                    sx={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: 24, md: 30 },
                      color: "rgba(255,255,255,0.10)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 600,
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "grey.400",
                    }}
                  >
                    {post.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "grey.500",
                    }}
                  >
                    · {post.readTime} min read
                  </Typography>
                  {post.date && (
                    <Typography
                      sx={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "grey.500",
                        ml: "auto",
                      }}
                    >
                      {post.date}
                    </Typography>
                  )}
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "22px", md: "36px" },
                    color: "common.white",
                    mb: 1.5,
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </Typography>

                {/* Excerpt — clamped to 2 lines */}
                <Typography
                  sx={{
                    color: "grey.300",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: { xs: 14, md: 15 },
                    lineHeight: 1.65,
                    mb: 2.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.excerpt}
                </Typography>

              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
