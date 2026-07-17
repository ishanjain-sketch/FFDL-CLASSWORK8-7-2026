import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

/**
 * Hero banner. Signature element: a soft diagonal amber "cut" across
 * the ink-navy panel, echoed as a thin rule under the eyebrow — a
 * recurring motif rather than a decorative gradient blob.
 */
export default function Banner({ title, subtitle, ctaLabel, ctaHref }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "primary.dark",
        color: "primary.contrastText",
      }}
    >
      {/* diagonal accent cut */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: { xs: "-30%", md: "-5%" },
          width: { xs: "80%", md: "45%" },
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(245,163,0,0.16) 0%, rgba(245,163,0,0) 60%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 9, md: 13 } }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              letterSpacing: "0.14em",
              fontWeight: 700,
            }}
          >
            Digital Marketing Studio
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              maxWidth: 720,
              mt: 1,
              mb: 2.5,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 560,
              mb: 4,
            }}
          >
            {subtitle}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href={ctaHref}
            >
              {ctaLabel}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/services"
              sx={{
                color: "primary.contrastText",
                borderColor: "rgba(255,255,255,0.4)",
                "&:hover": {
                  borderColor: "secondary.main",
                  color: "secondary.main",
                },
              }}
            >
              See our work
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}