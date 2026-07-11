import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * Banner — hero section used at the top of every page.
 *
 * Visual language ties back to the "Ledger" theme:
 *  - faint ruled-paper lines in the background (brass, low opacity)
 *  - a brass eyebrow label above the headline
 *  - a hairline-divided stat row along the bottom (optional)
 *  - a soft radial glow behind the content instead of a flat block color
 *
 * Fully driven by props, so each page can reuse it with different content.
 */
export default function Banner({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  onCtaClick,
  secondaryLabel,
  secondaryHref,
  stats,
  align = "left",
}) {
  const isCentered = align === "center";

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "primary.main",
        color: "primary.contrastText",
        backgroundImage: `
          repeating-linear-gradient(
            transparent,
            transparent 27px,
            rgba(200, 155, 60, 0.09) 28px
          )
        `,
      }}
    >
      {/* soft radial glow, purely decorative */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,155,60,0.28) 0%, rgba(200,155,60,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: "-25%",
          left: "-8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(246,244,236,0.08) 0%, rgba(246,244,236,0) 70%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          py: { xs: 8, md: 12 },
          textAlign: isCentered ? "center" : "left",
        }}
      >
        <Stack
          spacing={2.5}
          alignItems={isCentered ? "center" : "flex-start"}
        >
          {eyebrow && (
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ color: "secondary.light" }}
            >
              <Box
                aria-hidden
                sx={{
                  width: 28,
                  height: 1.5,
                  bgcolor: "secondary.light",
                }}
              />
              <Typography variant="overline" sx={{ color: "secondary.light" }}>
                {eyebrow}
              </Typography>
            </Stack>
          )}

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.25rem" },
              maxWidth: 720,
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontWeight: 400,
                color: "rgba(246,244,236,0.82)",
                maxWidth: 560,
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
          )}

          {(ctaLabel || secondaryLabel) && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ pt: 1.5, width: { xs: "100%", sm: "auto" } }}
            >
              {ctaLabel && (
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href={ctaHref}
                  onClick={onCtaClick}
                  endIcon={<ArrowForwardIcon />}
                >
                  {ctaLabel}
                </Button>
              )}
              {secondaryLabel && (
                <Button
                  variant="outlined"
                  size="large"
                  href={secondaryHref}
                  sx={{
                    color: "primary.contrastText",
                    borderColor: "rgba(246,244,236,0.4)",
                    "&:hover": {
                      borderColor: "primary.contrastText",
                      bgcolor: "rgba(246,244,236,0.08)",
                    },
                  }}
                >
                  {secondaryLabel}
                </Button>
              )}
            </Stack>
          )}
        </Stack>

        {stats && stats.length > 0 && (
          <Stack
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "rgba(246,244,236,0.18)" }}
              />
            }
            spacing={{ xs: 2.5, sm: 5 }}
            justifyContent={isCentered ? "center" : "flex-start"}
            flexWrap="wrap"
            useFlexGap
            sx={{ mt: { xs: 6, md: 8 } }}
          >
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography
                  variant="h4"
                  component="p"
                  sx={{ fontFamily: '"Fraunces", Georgia, serif', color: "secondary.light" }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(246,244,236,0.65)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}

Banner.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaHref: PropTypes.string,
  onCtaClick: PropTypes.func,
  secondaryLabel: PropTypes.string,
  secondaryHref: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  align: PropTypes.oneOf(["left", "center"]),
};
