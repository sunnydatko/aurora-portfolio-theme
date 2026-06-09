"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Footer from "./components/Footer";
import notFoundBg from "./images/not-found-bg.webp";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
`;

const auroraSweep = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

const bloom = keyframes`
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50%       { opacity: 0.6; transform: translate(-50%, -50%) scale(1.14); }
`;

const shootingStar = keyframes`
  0%   { opacity: 0; transform: translateX(0)     translateY(0)     rotate(-45deg); }
  15%  { opacity: 1; transform: translateX(-30px)  translateY(30px)  rotate(-45deg); }
  100% { opacity: 0; transform: translateX(-280px) translateY(280px) rotate(-45deg); }
`;

const anim = (delay: string) => ({
  animation: `${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay} forwards`,
  opacity: 0,
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 1 },
});

const BotanicalSprig = ({
  style,
  className,
}: {
  style?: CSSProperties;
  className?: string;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 60 220"
    fill="none"
    stroke="rgba(249,168,212,0.45)"
    strokeWidth={1.1}
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M30 220 C 30 150, 30 110, 30 40" />
    <path d="M30 168 C 14 158, 8 168, 6 180" />
    <path d="M30 150 C 46 140, 52 150, 54 162" />
    <path d="M30 128 C 16 120, 10 128, 8 140" />
    {[40, 52, 64, 76, 88, 100].map((y, i) => (
      <g key={y} transform={`translate(0 ${y})`}>
        <circle cx={30} cy={0} r={i < 2 ? 2.6 : 2.2} fill="rgba(249,168,212,0.28)" />
        <line x1={30} y1={-3} x2={24} y2={-7} />
        <line x1={30} y1={-3} x2={36} y2={-7} />
      </g>
    ))}
  </svg>
);

export default function NotFound() {
  const [starActive, setStarActive] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;

    const fire = () => {
      setStarActive(true);
      t = setTimeout(() => {
        setStarActive(false);
        t = setTimeout(fire, 10_000 + Math.random() * 5_000);
      }, 1_000);
    };

    t = setTimeout(fire, 2_000 + Math.random() * 3_000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0c0819", display: "flex", flexDirection: "column" }}>
      <ResponsiveMenu />

      <Box
        component="section"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${notFoundBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        {/* Shooting star easter egg */}
        {starActive && (
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: "18%",
              right: "22%",
              width: 90,
              height: 1.5,
              borderRadius: "9999px",
              background: "linear-gradient(to right, rgba(255,255,255,0.95), transparent)",
              boxShadow: "0 0 4px rgba(255,255,255,0.6), 0 0 10px rgba(236,72,153,0.5)",
              animation: `${shootingStar} 1s ease-out forwards`,
              "@media (prefers-reduced-motion: reduce)": { display: "none" },
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        )}

        {/* Decorative botanical sprigs */}
        <BotanicalSprig
          className="sway"
          style={{ position: "absolute", bottom: 0, left: "3vw", width: 90, height: 240, opacity: 0.15, zIndex: 1 }}
        />
        <BotanicalSprig
          className="sway sway-slow"
          style={{ position: "absolute", bottom: 0, right: "4vw", width: 80, height: 220, opacity: 0.12, transform: "scaleX(-1)", zIndex: 1 }}
        />

        <Container sx={{ position: "relative", zIndex: 3, py: { xs: 10, md: 12 } }}>
          <Box sx={{ maxWidth: 560, mx: "auto", textAlign: "center" }}>

            {/* Aurora 404 */}
            <Box sx={{ ...anim("0.2s"), mb: { xs: 2, md: 3 }, position: "relative" }}>
              {/* Bloom glow behind the number */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: { xs: "340px", md: "540px" },
                  height: { xs: "220px", md: "360px" },
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(236,72,153,0.55) 0%, rgba(109,40,217,0.35) 45%, transparent 70%)",
                  filter: "blur(44px)",
                  animation: `${bloom} 4s ease-in-out infinite`,
                  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 0.4 },
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              <Typography
                component="div"
                sx={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "140px", md: "220px" },
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                  position: "relative",
                  zIndex: 1,
                  background: "linear-gradient(135deg, #EC4899 0%, #a855f7 28%, #818cf8 55%, #F9A8D4 78%, #EC4899 100%)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: `${auroraSweep} 7s ease infinite, ${float} 5s ease-in-out infinite`,
                  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                }}
              >
                404
              </Typography>
            </Box>

            {/* Accent rule */}
            <Box
              sx={{
                ...anim("0.45s"),
                width: 48,
                height: 3,
                borderRadius: 2,
                bgcolor: "primary.main",
                mx: "auto",
                mb: { xs: 3, md: 4 },
              }}
            />

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                ...anim("0.6s"),
                fontSize: { xs: "28px", md: "36px" },
                color: "common.white",
                mb: 2,
              }}
            >
              Lost in the Cosmos
            </Typography>

            {/* Body */}
            <Typography
              sx={{
                ...anim("0.8s"),
                color: "grey.400",
                fontSize: { xs: 15, md: 16 },
                lineHeight: 1.7,
                mb: { xs: 5, md: 6 },
              }}
            >
              This page drifted beyond the aurora. It may have moved or never existed, but the path home is always lit.
            </Typography>

            {/* CTA */}
            <Box sx={{ ...anim("1.0s") }}>
              <Button
                href="/"
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  px: 4,
                  py: 1.6,
                  borderRadius: "10px",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  background: "linear-gradient(135deg, #EC4899 0%, #a855f7 55%, #818cf8 100%)",
                  backgroundSize: "200% auto",
                  backgroundPosition: "left center",
                  boxShadow: "0 4px 24px rgba(236,72,153,0.35), 0 0 40px rgba(168,85,247,0.12)",
                  transition: "box-shadow 0.35s ease, transform 0.3s ease, background-position 0.5s ease",
                  "&:hover": {
                    backgroundPosition: "right center",
                    boxShadow: "0 5px 28px rgba(236,72,153,0.45), 0 0 52px rgba(168,85,247,0.18)",
                    transform: "translateY(-2px)",
                  },
                  "& .arrow": { ml: 1.5, transition: "transform 0.3s" },
                  "&:hover .arrow": { transform: "translateX(5px)" },
                }}
              >
                Back to Home
                <Box component="span" className="arrow" aria-hidden>
                  →
                </Box>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
