"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { experience } from "../helpers/config";

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.09)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container sx={{ maxWidth: "880px !important" }}>
        {/* Section header */}
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
            + Career
          </Typography>
          <Typography variant="h3" className="glow-heading">Experience</Typography>
        </Box>

        {/* Timeline entries */}
        {experience.slice(0, 4).map((company, index) => (
          <Box
            key={company.company}
            className="reveal"
            style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
            sx={{
              position: "relative",
              pl: { xs: 2.5, md: 4 },
              py: 1,
              mb: 5,
              borderLeft: "2px solid",
              borderColor: "rgba(236,72,153,0.35)",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "22px", md: "28px" } }}
            >
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
sx={{ color: "common.white" }}
              >
                {company.company}
              </Link>

              {"note" in company && company.note && (
                <Typography
                  component="span"
                  sx={{
                    color: "grey.500",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: { xs: 13, md: 14 },
                    fontWeight: 400,
                    ml: 1.5,
                  }}
                >
                  {company.note}
                </Typography>
              )}
            </Typography>

            <Typography
              sx={{
                color: "grey.100",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: { xs: 15, md: 17 },
                mt: 1.5,
              }}
            >
              {company.title}
            </Typography>

            <Typography
              sx={{
                color: "grey.400",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: { xs: 13, md: 14 },
                letterSpacing: "0.04em",
                mt: 0.5,
                mb: 1,
              }}
            >
              {company.dates}
            </Typography>

            <Typography
              sx={{
                color: "grey.300",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: { xs: 15, md: 16 },
                lineHeight: 1.65,
              }}
            >
              {company.points[0]}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
