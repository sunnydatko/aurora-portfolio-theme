"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const skills = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Accessibility",
];

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.09)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          maxWidth: "860px !important",
        }}
      >
        <Typography
          component="span"
          className="reveal"
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
          + About Me
        </Typography>

        <Typography className="reveal" style={{ transitionDelay: "0.1s" }} variant="h3" sx={{ mb: 4 }}>
          Turning product ideas into polished user experiences
        </Typography>

        <Box
          className="reveal"
          style={{ transitionDelay: "0.2s" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
            mb: 4,
            justifyContent: "center",
          }}
        >
          {skills.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Box>

        <Typography
          className="reveal"
          style={{ transitionDelay: "0.3s" }}
          sx={{
            color: "grey.300",
            fontSize: { xs: "17px", md: "21px" },
            lineHeight: 1.7,
            mb: 0,
          }}
        >
          I'm a Senior Software Engineer with a passion for building scalable products, thoughtful design systems, and user experiences that feel effortless to use. I enjoy working across product, design, and engineering to turn ideas into polished, maintainable solutions.
        </Typography>
      </Container>
    </Box>
  );
}
