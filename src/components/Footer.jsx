import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.dark", color: "primary.contrastText", pt: 6, pb: 3, mt: "auto" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>
              YourBrand
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(253,251,247,0.75)" }}>
              Building thoughtful products and delightful experiences,
              one project at a time.
            </Typography>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  underline="hover"
                  sx={{ color: "rgba(253,251,247,0.85)" }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600 }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: "rgba(253,251,247,0.85)" }}>
                123 Market Street, Suite 400
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(253,251,247,0.85)" }}>
                hello@yourbrand.com
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(253,251,247,0.85)" }}>
                +1 (555) 123-4567
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(253,251,247,0.15)" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "rgba(253,251,247,0.6)" }}
        >
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
