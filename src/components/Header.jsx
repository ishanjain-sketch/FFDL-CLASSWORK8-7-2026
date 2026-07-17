import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * Top utility bar — contact info + social links.
 * Sits above the Navbar. Hidden entirely on mobile (moved into
 * the Footer instead) rather than partially collapsed, so nothing
 * shifts awkwardly at the sm breakpoint.
 */
export default function Header() {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        color: "primary.contrastText",
        py: 0.85,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack
              direction="row"
              spacing={0.75}
              alignItems="center"
              component="a"
              href="tel:+15551234567"
              sx={{
                color: "inherit",
                textDecoration: "none",
                opacity: 0.9,
                "&:hover": { opacity: 1, color: "secondary.main" },
              }}
            >
              <PhoneOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={0.75}
              alignItems="center"
              component="a"
              href="mailto:hello@yourbrand.com"
              sx={{
                color: "inherit",
                textDecoration: "none",
                opacity: 0.9,
                "&:hover": { opacity: 1, color: "secondary.main" },
              }}
            >
              <EmailOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">hello@yourbrand.com</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={0.5}>
            <IconButton
              size="small"
              aria-label="Facebook"
              sx={{ color: "inherit", "&:hover": { color: "secondary.main" } }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              size="small"
              aria-label="Instagram"
              sx={{ color: "inherit", "&:hover": { color: "secondary.main" } }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              size="small"
              aria-label="LinkedIn"
              sx={{ color: "inherit", "&:hover": { color: "secondary.main" } }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}