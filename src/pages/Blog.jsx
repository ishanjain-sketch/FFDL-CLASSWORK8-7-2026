import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { motion } from "framer-motion";
import SubHero from "../components/SubHero";
import CtaStrip from "../components/CtaStrip";

const ARTICLES = [
  {
    title: "How to Build an SEO Content Calendar That Actually Ships",
    excerpt:
      "A practical framework for planning content around search intent instead of arbitrary posting frequency.",
    tag: "SEO",
    readTime: "7 min read",
    date: "Jul 2, 2026",
  },
  {
    title: "Google Ads Account Structure: A Practical Guide for 2026",
    excerpt:
      "The campaign and ad group structure we use on every new PPC account, and why it scales cleanly.",
    tag: "PPC",
    readTime: "9 min read",
    date: "Jun 24, 2026",
  },
  {
    title: "What Core Web Vitals Actually Mean for Your Rankings",
    excerpt:
      "Cutting through the noise on LCP, INP, and CLS — and which one to fix first.",
    tag: "Web Dev",
    readTime: "6 min read",
    date: "Jun 15, 2026",
  },
  {
    title: "Short-Form Video Isn't Optional Anymore — Here's a Starting Framework",
    excerpt:
      "A simple content system for brands publishing their first month of reels and TikToks.",
    tag: "Social Media",
    readTime: "5 min read",
    date: "Jun 5, 2026",
  },
  {
    title: "Reading a Google Ads Report Like an Analyst, Not a Marketer",
    excerpt:
      "The five numbers that actually tell you whether a campaign is working.",
    tag: "PPC",
    readTime: "8 min read",
    date: "May 28, 2026",
  },
  {
    title: "Technical SEO Audit Checklist (The One We Use Internally)",
    excerpt:
      "Every item we check before writing a single word of new content for a client.",
    tag: "SEO",
    readTime: "10 min read",
    date: "May 19, 2026",
  },
];

const TAG_COLORS = {
  SEO: "#F5A300",
  PPC: "#3A4876",
  "Web Dev": "#0EA5A5",
  "Social Media": "#D94F70",
};

export default function Blog() {
  return (
    <Box>
      <Helmet>
        <title>Blog & Resources — YourBrand</title>
        <meta
          name="description"
          content="SEO, PPC, web development, and social media guides from the team running these strategies for clients daily."
        />
      </Helmet>

      <SubHero
        eyebrow="Resources"
        crumb="Blog"
        title="Guides and breakdowns from work we actually ship."
        subtitle="No recycled listicles — every article comes from a real campaign, audit, or build."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {ARTICLES.map((article, idx) => (
            <Grid item xs={12} sm={6} md={4} key={article.title}>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                style={{ height: "100%" }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "transform .2s ease, box-shadow .2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 28px -12px rgba(20,33,61,0.22)",
                    },
                  }}
                >
                  <CardActionArea sx={{ height: "100%", alignItems: "stretch" }}>
                    <CardContent sx={{ p: 3 }}>
                      <Chip
                        label={article.tag}
                        size="small"
                        sx={{
                          mb: 1.5,
                          bgcolor: `${TAG_COLORS[article.tag]}1A`,
                          color: TAG_COLORS[article.tag],
                          fontWeight: 700,
                        }}
                      />
                      <Typography variant="h6" sx={{ mb: 1, lineHeight: 1.3 }}>
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
                        {article.excerpt}
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Typography variant="caption" color="text.disabled">
                          {article.date}
                        </Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <AccessTimeRoundedIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                          <Typography variant="caption" color="text.disabled">
                            {article.readTime}
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <CtaStrip
        title="Want strategy like this applied to your brand?"
        subtitle="These guides are the exact playbooks we run for clients."
        ctaLabel="Talk to our team"
      />
    </Box>
  );
}
