import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function NotFound() {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Helmet>
        <title>Page not found — YourBrand</title>
      </Helmet>
      <Container
        maxWidth="sm"
        sx={{
          py: { xs: 10, md: 14 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "3.5rem", md: "5rem" }, color: "secondary.main", mb: 1 }}
        >
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          This page doesn't exist.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The link may be broken, or the page may have moved. Let's get you back on track.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary" href="/">
            Back to home
          </Button>
          <Button variant="outlined" href="/contact">
            Contact us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
