"use client";

import { useEffect, useRef } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import nodeBg from "../images/nodes-bg.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
`;

const anim = (delay: string) => ({
  animation: `${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay} forwards`,
  opacity: 0,
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 1 },
});

const NEUTRAL =
  "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 0%, rgba(7,4,15,0.4) 100%)";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mouseOverlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseOverlayRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseOverlayRef.current.style.background = `radial-gradient(ellipse 70% 80% at ${x}% ${y}%, transparent 0%, rgba(7,4,15,0.4) 100%)`;
  };

  const handleMouseLeave = () => {
    if (mouseOverlayRef.current) mouseOverlayRef.current.style.background = NEUTRAL;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const progress = Math.min(window.scrollY / sectionRef.current.offsetHeight, 1);
      bgRef.current.style.transform = `scale(${1 + progress * 0.08})`;
      bgRef.current.style.opacity = String(1 - progress * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: { xs: "100svh", md: "100vh" },
        overflow: "hidden",
        backgroundColor: "#07040f",
      }}
    >
      {/* Background photo */}
      <Box
        ref={bgRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${nodeBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "center" },
          willChange: "transform, opacity",
          transformOrigin: "center center",
          opacity: 0.55,
        }}
      />

      {/* Dark gradient — left-heavy on desktop so text stays legible */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(180deg, rgba(7,4,15,0.75) 0%, rgba(7,4,15,0.55) 50%, rgba(7,4,15,0.80) 100%)",
            md: "linear-gradient(90deg, rgba(7,4,15,0.82) 0%, rgba(7,4,15,0.65) 38%, rgba(7,4,15,0.35) 65%, rgba(7,4,15,0.10) 100%)",
          },
        }}
      />

      {/* Cursor-tracked radial overlay — desktop only */}
      <Box
        ref={mouseOverlayRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: NEUTRAL,
          transition: "background 0.18s ease",
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2, py: { xs: 12, md: 10 } }}>
        <Box sx={{ maxWidth: { xs: "100%", md: 620 } }}>
          {/* Eyebrow */}
          <Typography
            sx={{
              ...anim("0.4s"),
              color: "primary.light",
              fontWeight: 600,
              fontSize: { xs: 12, md: 13 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: { xs: 2.5, md: 4 },
            }}
          >
            + Hello, I&apos;m Alex Parker
          </Typography>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              ...anim("0.7s"),
              fontSize: { xs: "42px", sm: "60px", md: "80px" },
              lineHeight: 1.02,
              color: "common.white",
              mb: { xs: 3, md: 4 },
            }}
          >
            Senior Software
            <br />
            Engineer
          </Typography>

          {/* Accent rule */}
          <Box
            sx={{
              ...anim("1.0s"),
              width: 64,
              height: 3,
              borderRadius: 2,
              bgcolor: "primary.main",
              mb: { xs: 3, md: 4 },
            }}
          />

          {/* Intro */}
          <Typography
            sx={{
              ...anim("1.25s"),
              color: "grey.300",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.65,
              maxWidth: 480,
              mb: { xs: 4, md: 5 },
            }}
          >
            I build thoughtful, accessible, and performant web experiences
            with a focus on design systems, developer experience, and clean
            code.
          </Typography>

          {/* CTAs */}
          <Box
            sx={{
              ...anim("1.5s"),
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: { xs: 2.5, md: 4 },
            }}
          >
            <Button
              href="#experience"
              sx={{
                fontSize: { xs: 15, md: 16 },
                px: 3.5,
                py: 1.4,
                "& .arrow": { ml: 1.5, transition: "transform 0.3s" },
                "&:hover .arrow": { transform: "translateX(4px)" },
              }}
            >
              View My Work
              <Box component="span" className="arrow" aria-hidden>
                {" "}→
              </Box>
            </Button>

            <Box
              component="a"
              href="#contact"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: "grey.200",
                fontSize: { xs: 15, md: 16 },
                fontWeight: 500,
                borderBottom: "1px solid",
                borderColor: "grey.500",
                pb: "3px",
                transition: "color 0.3s, border-color 0.3s",
                textDecoration: "none",
                "&:hover": {
                  color: "common.white",
                  borderColor: "grey.300",
                },
              }}
            >
              Contact Me
              <Box
                component="svg"
                aria-hidden
                sx={{ width: 16, height: 16, fill: "currentColor", flexShrink: 0 }}
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
