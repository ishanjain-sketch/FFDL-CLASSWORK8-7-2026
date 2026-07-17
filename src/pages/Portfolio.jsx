import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { motion } from "framer-motion";
import SubHero from "../components/SubHero";
import CtaStrip from "../components/CtaStrip";

const CASE_STUDIES = [
  {
    client: "Fieldnote",
    industry: "B2B SaaS",
    tag: "SEO + Content",
    summary:
      "Rebuilt the content engine and fixed technical debt holding back a stagnant blog.",
    metrics: [
      { label: "Organic traffic", before: "8.2K/mo", after: "31K/mo" },
      { label: "Ranking keywords", before: "410", after: "2,150" },
      { label: "MQLs from organic", before: "12/mo", after: "68/mo" },
    ],
  },
  {
    client: "Northwind Outdoors",
    industry: "eCommerce",
    tag: "PPC + Shopping",
    summary:
      "Restructured a bloated Google Ads account and rebuilt the product feed for margin.",
    metrics: [
      { label: "ROAS", before: "1.9x", after: "4.8x" },
      { label: "Cost per acquisition", before: "$62", after: "$27" },
      { label: "Monthly ad revenue", before: "$41K", after: "$156K" },
    ],
  },
  {
    client: "Studio Lume",
    industry: "Retail",
    tag: "Web Design",
    summary:
      "Replatformed a slow WordPress site to a fast, conversion-focused custom build.",
    metrics: [
      { label: "Page load time", before: "5.4s", after: "1.1s" },
      { label: "Conversion rate", before: "1.3%", after: "3.7%" },
      { label: "Mobile bounce rate", before: "68%", after: "34%" },
    ],
  },
  {
    client: "Fieldnote",
    industry: "B2B SaaS",
    tag: "Social Media",
    summary:
      "Launched a LinkedIn thought-leadership program from a standing start.",
    metrics: [
      { label: "Follower growth", before: "1,200", after: "14,800" },
      { label: "Engagement rate", before: "0.8%", after: "5.2%" },
      { label: "Inbound demo requests", before: "2/mo", after: "19/mo" },
    ],
  },
];

export default function Portfolio() {
  return (
    <Box>
      <Helmet>
        <title>Case Studies & Portfolio — YourBrand</title>
        <meta
          name="description"
          content="Real client projects with measurable before-and-after results across SEO, PPC, web design, and social media."
        />
      </Helmet>

      <SubHero
        eyebrow="Our Work"
        crumb="Case Studies"
        title="Real projects. Real numbers. No cherry-picked screenshots."
        subtitle="Every case study below shows the metric before we started and where it stands today."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {CASE_STUDIES.map((study, idx) => (
            <Grid item xs={12} md={6} key={`${study.client}-${study.tag}`}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card variant="outlined" sx={{ height: "100%", borderRadius: 3 }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      sx={{ mb: 2 }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {study.client}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {study.industry}
                        </Typography>
                      </Box>
                      <Chip
                        label={study.tag}
                        size="small"
                        sx={{ bgcolor: "secondary.main", color: "primary.dark", fontWeight: 700 }}
                      />
                    </Stack>

                    <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
                      {study.summary}
                    </Typography>

                    <Divider sx={{ mb: 2.5 }} />

                    <Stack spacing={2}>
                      {study.metrics.map((m) => (
                        <Stack
                          key={m.label}
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
                            {m.label}
                          </Typography>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body2" sx={{ color: "text.disabled" }}>
                              {m.before}
                            </Typography>
                            <ArrowRightAltRoundedIcon sx={{ fontSize: 18, color: "secondary.main" }} />
                            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.dark" }}>
                              {m.after}
                            </Typography>
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <CtaStrip
        title="Want results like these?"
        subtitle="Tell us about your goals and we'll map out what a realistic timeline looks like."
        ctaLabel="Start a project"
      />
    </Box>
  );
}
