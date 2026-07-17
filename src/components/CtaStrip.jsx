import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export default function CtaStrip({
  title = "Ready to get started?",
  subtitle = "Tell us about your project — we'll reply within one business day.",
  ctaLabel = "Book a call",
  ctaHref = "/contact",
}) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            bgcolor: "secondary.main",
            color: "primary.dark",
            borderRadius: 4,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            spacing={3}
          >
            <Box>
              <Typography variant="h4" sx={{ mb: 0.5 }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.85 }}>
                {subtitle}
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              href={ctaHref}
              sx={{
                bgcolor: "primary.dark",
                color: "primary.contrastText",
                flexShrink: 0,
                "&:hover": { bgcolor: "primary.main" },
              }}
            >
              {ctaLabel}
            </Button>
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
}
