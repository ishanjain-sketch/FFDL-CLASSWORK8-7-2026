import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import { motion } from "framer-motion";
import SubHero from "../components/SubHero";
import CtaStrip from "../components/CtaStrip";

const PILLARS = [
  {
    icon: <SearchRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Technical SEO",
    text: "Site speed, crawlability, indexation, and structured data fixed at the source.",
  },
  {
    icon: <ArticleOutlinedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Content Strategy",
    text: "Keyword-mapped content briefs built around real search intent, not guesswork.",
  },
  {
    icon: <LinkRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Authority Building",
    text: "Editorial link acquisition and digital PR that earns links you don't have to disavow.",
  },
  {
    icon: <SpeedRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Core Web Vitals",
    text: "Performance tuning so rankings aren't held back by a slow, bloated site.",
  },
];

const PROCESS = [
  { step: "Audit", detail: "Full technical, content, and backlink audit against your top competitors." },
  { step: "Roadmap", detail: "A prioritized 90-day plan ranked by traffic impact and effort." },
  { step: "Execution", detail: "On-page fixes, content production, and outreach, shipped weekly." },
  { step: "Reporting", detail: "Monthly reporting tied to rankings, traffic, and pipeline — not vanity metrics." },
];

const INCLUDED = [
  "Keyword research & competitive gap analysis",
  "On-page optimization across priority pages",
  "Technical audit & crawl-error resolution",
  "Content calendar & SEO-briefed articles",
  "Backlink outreach & digital PR",
  "Monthly performance reporting",
];

export default function SEOServices() {
  return (
    <Box>
      <Helmet>
        <title>SEO Services — YourBrand</title>
        <meta
          name="description"
          content="Technical SEO, content strategy, and link building designed to grow organic traffic and revenue, not just rankings."
        />
      </Helmet>

      <SubHero
        eyebrow="Search Engine Optimization"
        crumb="SEO Services"
        title="Rank higher. Convert more of the traffic you already earn."
        subtitle="We treat SEO as a growth channel with a P&L, not a checklist. Every recommendation is tied to traffic, leads, or revenue."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 1 }}>
          What we focus on
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 560, mx: "auto" }}
        >
          Four pillars, worked in parallel rather than one at a time.
        </Typography>

        <Grid container spacing={3}>
          {PILLARS.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
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
                      {item.title}
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

      {/* Process — order genuinely matters here, so numbering is meaningful */}
      <Box sx={{ bgcolor: "background.paper", borderTop: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h4" align="center" sx={{ mb: 5 }}>
            How an engagement runs
          </Typography>
          <Grid container spacing={3}>
            {PROCESS.map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={item.step}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <Typography
                    variant="h3"
                    sx={{ color: "secondary.main", fontWeight: 800, mb: 1 }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.step}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.detail}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              What's included
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Every SEO engagement includes the fundamentals below — scoped up
              or down depending on site size and competitive landscape.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1.5}>
              {INCLUDED.map((line) => (
                <Stack key={line} direction="row" spacing={1.5} alignItems="flex-start">
                  <CheckCircleOutlineRoundedIcon color="secondary" sx={{ fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body1">{line}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <CtaStrip
        title="Want a free SEO audit?"
        subtitle="We'll show you exactly where you're losing traffic — no obligation."
        ctaLabel="Request an audit"
      />
    </Box>
  );
}
