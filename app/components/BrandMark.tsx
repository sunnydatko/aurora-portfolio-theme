"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import faviconSrc from "../favicon.png";

type BrandMarkProps = {
  iconSize?: number;
  fontSize?: number;
};

export default function BrandMark({ iconSize = 38, fontSize = 18 }: BrandMarkProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        opacity: 0.82,
        transition: "opacity 0.2s ease",
        "&:hover": { opacity: 1 },
      }}
    >
      <Image
        src={faviconSrc}
        alt=""
        width={iconSize}
        height={iconSize}
        aria-hidden
      />
      <Typography
        component="span"
        sx={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "common.white",
          lineHeight: 1,
        }}
      >
        Alex Parker
      </Typography>
    </Box>
  );
}
