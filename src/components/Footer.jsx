import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.dark", color: "primary.contrastText", pt: { xs: 6, md: 7 }, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>
              YourBrand
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 280 }}>
              A small studio helping teams design, build, and ship products that feel effortless.
            </Typography>

            {/* Contact info shown only on mobile, since the top Header bar is hidden there */}
            <Stack spacing={1} sx={{ mt: 2.5, display: { xs: "flex", sm: "none" } }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneOutlinedIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailOutlinedIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">hello@yourbrand.com</Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  underline="hover"
                  sx={{ color: "rgba(255,255,255,0.75)", fontSize: 14, "&:hover": { color: "secondary.main" } }}
                >
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Legal
            </Typography>
            <Stack spacing={1}>
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  underline="hover"
                  sx={{ color: "rgba(255,255,255,0.75)", fontSize: 14, "&:hover": { color: "secondary.main" } }}
                >
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Follow us
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "inherit", border: "1px solid rgba(255,255,255,0.2)", "&:hover": { color: "secondary.main", borderColor: "secondary.main" } }}
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                size="small"
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "inherit", border: "1px solid rgba(255,255,255,0.2)", "&:hover": { color: "secondary.main", borderColor: "secondary.main" } }}
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                size="small"
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "inherit", border: "1px solid rgba(255,255,255,0.2)", "&:hover": { color: "secondary.main", borderColor: "secondary.main" } }}
              >
                <LinkedInIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 4 }} />

        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.55)" }}>
          © {YEAR} YourBrand. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}