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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

/**
 * Top utility bar — contact info + social links.
 * Sits above the Navbar. Hides contact text on small screens.
 */
export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        color: "primary.contrastText",
        py: 0.75,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Stack direction="row" spacing={0.75} alignItems="center">
              <PhoneOutlinedIcon sx={{ fontSize: 16 }} />
              {!isMobile && (
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              )}
            </Stack>
            <Stack direction="row" spacing={0.75} alignItems="center">
              <EmailOutlinedIcon sx={{ fontSize: 16 }} />
              {!isMobile && (
                <Typography variant="body2">hello@yourbrand.com</Typography>
              )}
            </Stack>
          </Stack>

          <Stack direction="row" spacing={0.5}>
            <IconButton
              size="small"
              aria-label="Facebook"
              sx={{ color: "inherit" }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              size="small"
              aria-label="Instagram"
              sx={{ color: "inherit" }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              size="small"
              aria-label="LinkedIn"
              sx={{ color: "inherit" }}
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
