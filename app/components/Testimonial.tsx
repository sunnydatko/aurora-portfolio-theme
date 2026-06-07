"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { testimonials } from "../helpers/config";
import testimonialAvatar from "../images/testimonial-avatar.png";

const imageMap: Record<string, StaticImageData> = {
  "testimonial-avatar": testimonialAvatar,
};

export default function Testimonial() {
  const { quote, name, title, image } = testimonials[0];
  const avatarSrc = image ? imageMap[image] : undefined;

  return (
    <Box
      component="section"
      id="testimonial"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "120%", md: "900px" },
          height: { xs: "120%", md: "600px" },
          background:
            "radial-gradient(circle, rgba(80,130,255,.12), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Container sx={{ maxWidth: "650px !important", textAlign: "center", position: "relative" }}>
        <Typography
          component="span"
          className="reveal glow-eyebrow"
          sx={{
            display: "block",
            color: "primary.light",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: { xs: 12.5, md: 14 },
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 4,
          }}
        >
          + Recommendation
        </Typography>

        <Typography
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
          sx={{
            color: "primary.light",
            fontFamily: "Georgia, serif",
            fontSize: { xs: "6rem", md: "8rem" },
            lineHeight: 0.5,
            mt: 3,
            mb: 5,
            userSelect: "none",
          }}
          aria-hidden
        >
          &ldquo;
        </Typography>

        <Typography
          className="reveal"
          style={{ transitionDelay: "0.2s" }}
          sx={{
            color: "grey.200",
            fontSize: { xs: "18px", md: "21px" },
            lineHeight: 1.85,
            fontStyle: "italic",
            mb: 1,
          }}
        >
          {quote}
        </Typography>

        <Box
          className="reveal"
          style={{ transitionDelay: "0.3s" }}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}
        >
          {avatarSrc && (
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(236,72,153,0.45)",
                boxShadow: "0 0 16px rgba(236,72,153,0.4), 0 0 36px rgba(236,72,153,0.18)",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={avatarSrc}
                alt={name}
                fill
                style={{ objectFit: "cover", filter: "saturate(0.87) brightness(0.93)" }}
                sizes="100px"
              />
            </Box>
          )}
          <Box>
            <Typography
              sx={{
                color: "common.white",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: { xs: 15, md: 16 },
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: "rgba(236,190,255,0.65)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: { xs: 12, md: 13 },
                letterSpacing: "0.04em",
                mt: 0.5,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
