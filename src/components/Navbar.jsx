import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ThemeToggle from "./ThemeToggle";

const SERVICE_LINKS = [
  { label: "SEO Services", to: "/services/seo" },
  { label: "Social Media Marketing", to: "/services/social-media-marketing" },
  { label: "PPC / Google Ads", to: "/services/ppc-google-ads" },
  { label: "Web Design & Development", to: "/services/web-design-development" },
];

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

// Reads live theme tokens instead of hardcoded hex, so link colors
// stay correct if theme.js palette is ever tuned.
const navLinkStyle = (theme) => ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? theme.palette.secondary.main : theme.palette.text.primary,
  fontWeight: isActive ? 700 : 500,
});

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const handleServicesEnter = (e) => setMenuAnchor(e.currentTarget);
  const handleServicesClose = () => setMenuAnchor(null);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "primary.dark",
              fontWeight: 800,
            }}
          >
            YourBrand
          </Typography>

          {/* Desktop links */}
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {LINKS.map((link) =>
              link.hasDropdown ? (
                <Box
                  key={link.to}
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesClose}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.25}
                    onClick={() => navigate("/services")}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography
                      component={NavLink}
                      to={link.to}
                      variant="body1"
                      sx={navLinkStyle(theme)}
                    >
                      {link.label}
                    </Typography>
                    <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18, color: "primary.dark" }} />
                  </Stack>
                  <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={handleServicesClose}
                    disableAutoFocusItem
                    MenuListProps={{ onMouseLeave: handleServicesClose }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    slotProps={{ paper: { sx: { mt: 0.5, minWidth: 240, borderRadius: 2 } } }}
                  >
                    {SERVICE_LINKS.map((s) => (
                      <MenuItem
                        key={s.to}
                        component={NavLink}
                        to={s.to}
                        onClick={handleServicesClose}
                        sx={{ py: 1.2, fontSize: 14 }}
                      >
                        {s.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Typography
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  variant="body1"
                  sx={navLinkStyle(theme)}
                >
                  {link.label}
                </Typography>
              )
            )}
            <ThemeToggle />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<PhoneOutlinedIcon />}
              href="/contact"
            >
              Get a quote
            </Button>
          </Stack>

          {/* Mobile menu button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, pt: 2 }} role="presentation">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ px: 2, mb: 1 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.dark" }}>
              YourBrand
            </Typography>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <List>
            {LINKS.map((link) =>
              link.hasDropdown ? (
                <Box key={link.to}>
                  <ListItemButton onClick={() => setServicesOpenMobile((v) => !v)}>
                    <ListItemText primary={link.label} />
                    {servicesOpenMobile ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                  </ListItemButton>
                  <Collapse in={servicesOpenMobile} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {SERVICE_LINKS.map((s) => (
                        <ListItemButton
                          key={s.to}
                          component={NavLink}
                          to={s.to}
                          onClick={() => setOpen(false)}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText
                            primary={s.label}
                            primaryTypographyProps={{ fontSize: 14 }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ) : (
                <ListItemButton
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  sx={{
                    "&.active": {
                      color: "secondary.dark",
                      fontWeight: 700,
                    },
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              )
            )}
          </List>
          <Box sx={{ px: 2, mt: 1 }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}