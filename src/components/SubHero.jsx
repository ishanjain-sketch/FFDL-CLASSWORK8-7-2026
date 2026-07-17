import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";

/**
 * Compact interior-page hero. Shares the diagonal amber-cut motif
 * from Banner.jsx at lower intensity, so sub-pages feel part of the
 * same system without repeating the full homepage hero.
 */
export default function SubHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "primary.dark",
        color: "primary.contrastText",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: { xs: "-40%", md: "-10%" },
          width: { xs: "80%", md: "35%" },
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(245,163,0,0.14) 0%, rgba(245,163,0,0) 60%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 6, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {crumb && (
            <Breadcrumbs
              separator="›"
              sx={{
                mb: 2,
                "& .MuiBreadcrumbs-separator": { color: "rgba(255,255,255,0.4)" },
              }}
            >
              <Link
                href="/"
                underline="hover"
                sx={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}
              >
                Home
              </Link>
              <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>
                {crumb}
              </Typography>
            </Breadcrumbs>
          )}

          {eyebrow && (
            <Typography
              variant="overline"
              sx={{ color: "secondary.main", letterSpacing: "0.14em", fontWeight: 700 }}
            >
              {eyebrow}
            </Typography>
          )}

          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, maxWidth: 680, mt: 0.5, mb: 1.5 }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 560 }}
            >
              {subtitle}
            </Typography>
          )}
        </motion.div>
      </Container>
    </Box>
  );
}
