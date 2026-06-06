"use client";

import { type CSSProperties } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Footer from "./components/Footer";
import Ambient from "./components/Ambient";

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
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0c0819", display: "flex", flexDirection: "column" }}>
      <Ambient />
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
              This page drifted beyond the aurora. It may have moved or never existed — but the path home is always lit.
            </Typography>

            {/* CTA */}
            <Box sx={{ ...anim("1.0s") }}>
              <Button
                href="/"
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  px: 3.5,
                  py: 1.4,
                  "& .arrow": { ml: 1.5, transition: "transform 0.3s" },
                  "&:hover .arrow": { transform: "translateX(4px)" },
                }}
              >
                Back to Home
                <Box component="span" className="arrow" aria-hidden>
                  {" "}→
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
