import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TagIcon from "@mui/icons-material/Tag";
import { motion } from "framer-motion";
import SubHero from "../components/SubHero";
import CtaStrip from "../components/CtaStrip";

const PLATFORMS = [
  {
    icon: <InstagramIcon sx={{ fontSize: 28 }} color="secondary" />,
    name: "Instagram & TikTok",
    text: "Short-form content built for retention, not just views — reels, series, and creator partnerships.",
  },
  {
    icon: <FacebookIcon sx={{ fontSize: 28 }} color="secondary" />,
    name: "Facebook & Meta Ads",
    text: "Community management paired with paid amplification to extend organic reach.",
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 28 }} color="secondary" />,
    name: "LinkedIn",
    text: "Thought-leadership content and employee advocacy for B2B pipeline generation.",
  },
  {
    icon: <TagIcon sx={{ fontSize: 28 }} color="secondary" />,
    name: "X / Threads",
    text: "Real-time engagement, community building, and reactive brand moments.",
  },
];

const RESULTS = [
  { value: "3.2x", label: "Avg. engagement lift" },
  { value: "60%", label: "Faster content turnaround" },
  { value: "2.4M+", label: "Monthly impressions managed" },
  { value: "40+", label: "Active brand accounts" },
];

const APPROACH = [
  "Audit your current channels and competitor benchmarking",
  "Define voice, pillars, and a repeatable content system",
  "Produce and schedule content with a monthly calendar",
  "Run paid boosts on top-performing organic posts",
  "Report on engagement, reach, and follower-to-lead conversion",
];

export default function SocialMediaMarketing() {
  return (
    <Box>
      <Helmet>
        <title>Social Media Marketing — YourBrand</title>
        <meta
          name="description"
          content="Platform-native social strategy, content production, and paid amplification across Instagram, TikTok, LinkedIn, and Meta."
        />
      </Helmet>

      <SubHero
        eyebrow="Social Media Marketing"
        crumb="Social Media Marketing"
        title="Content built for the platform it lives on — not repurposed filler."
        subtitle="We plan, produce, and report on social the same way we do paid media: against real business outcomes."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 1 }}>
          Platforms we run
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 560, mx: "auto" }}
        >
          We go deep on the channels that actually move your audience, not every channel at once.
        </Typography>

        <Grid container spacing={3}>
          {PLATFORMS.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                style={{ height: "100%" }}
              >
                <Card variant="outlined" sx={{ height: "100%", p: 1, borderRadius: 3 }}>
                  <CardContent>
                    <Box sx={{ mb: 1.5 }}>{item.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Results strip */}
      <Box sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
          <Grid container spacing={3}>
            {RESULTS.map((stat, idx) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: "secondary.main" }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Our approach
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              A consistent system, applied per platform — this is the order we
              actually work in with every new client.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Strategy" size="small" />
              <Chip label="Content" size="small" />
              <Chip label="Paid boost" size="small" />
              <Chip label="Reporting" size="small" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack spacing={2.5}>
              {APPROACH.map((line, idx) => (
                <Stack key={line} direction="row" spacing={2} alignItems="flex-start">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "secondary.main", fontWeight: 800, minWidth: 28 }}
                  >
                    {idx + 1}
                  </Typography>
                  <Typography variant="body1">{line}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <CtaStrip
        title="Want a content calendar mockup?"
        subtitle="We'll build a sample month of content for one of your channels, free."
        ctaLabel="Get a sample calendar"
      />
    </Box>
  );
}
