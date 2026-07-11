import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: 0.3,
          }}
        >
          YourBrand
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              aria-label="open navigation menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "primary.main" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 240 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {NAV_LINKS.map((link) => (
                    <ListItem key={link.to} disablePadding>
                      <ListItemButton
                        component={RouterLink}
                        to={link.to}
                        selected={location.pathname === link.to}
                      >
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                sx={{
                  color:
                    location.pathname === link.to
                      ? "secondary.main"
                      : "text.primary",
                  fontWeight: location.pathname === link.to ? 700 : 500,
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
