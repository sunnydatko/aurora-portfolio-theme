import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { social } from "../helpers/config";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon fontSize="small" />,
  LinkedIn: <LinkedInIcon fontSize="small" />,
  X: <XIcon fontSize="small" />,
};

const Footer = () => (
  <Box
    className="footer"
    component="footer"
    sx={{ borderTop: "1px solid rgba(245,241,236,0.08)" }}
  >
    <Box sx={{ padding: "16px 0" }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 1 }}>
          {social.map(({ label, href }) => (
            <IconButton
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              size="small"
              sx={{
                color: "grey.500",
                "&:hover": { color: "primary.main", backgroundColor: "transparent" },
              }}
            >
              {iconMap[label]}
            </IconButton>
          ))}
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "grey.600",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          &copy; {new Date().getFullYear()} Alex Parker. All rights reserved.
        </Typography>
      </Container>
    </Box>
  </Box>
);

export default Footer;
