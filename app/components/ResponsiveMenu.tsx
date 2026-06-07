"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import BrandMark from "./BrandMark";

const drawerWidth = 320;

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

export default function ResponsiveMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <BrandMark iconSize={38} fontSize={15} />
      </Box>
      <Divider />
      <List>
        {navItems.map(({ name, href }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              component="a"
              href={href}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={name}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontSize: 13,
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: "rgba(7,4,15,0.65)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          zIndex: 1100,
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open navigation"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "common.white", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link
            href="/"
            aria-label="Home"
            underline="none"
            sx={{ paddingBottom: 0, "&::before": { display: "none" } }}
          >
            <BrandMark iconSize={42} fontSize={17} />
          </Link>

          <Box sx={{ ml: "auto", display: { xs: "none", sm: "flex" }, gap: 0.5 }}>
            {navItems.filter(({ name }) => name !== "Contact").map(({ name, href }) => (
              <Button
                key={name}
                href={href}
                sx={{
                  color: "grey.300",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: "0.04em",
                  px: 2,
                  "&:hover": { color: "common.white", backgroundColor: "transparent" },
                }}
                variant="text"
              >
                {name}
              </Button>
            ))}
            <Button
              href="/#contact"
              variant="contained"
              sx={{ ml: 1.5, px: 2.5, fontSize: 14, whiteSpace: "nowrap" }}
            >
              Contact Me
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
