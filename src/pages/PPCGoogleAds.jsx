import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import { motion } from "framer-motion";
import SubHero from "../components/SubHero";
import CtaStrip from "../components/CtaStrip";

const SERVICES = [
  {
    icon: <AdsClickRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Google Search Ads",
    text: "Intent-driven campaigns built around keywords that convert, not just click.",
  },
  {
    icon: <TrendingUpRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Performance Max",
    text: "Full-funnel automation tuned with first-party data and clear guardrails.",
  },
  {
    icon: <TuneRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Remarketing",
    text: "Bring back warm visitors across Search, Display, and YouTube.",
  },
  {
    icon: <PaidRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Shopping & PMax for eCommerce",
    text: "Feed optimization and bidding strategy built for margin, not just ROAS.",
  },
];

const PROCESS_TABLE = [
  { phase: "Week 1", focus: "Account audit, tracking setup, and competitor benchmarking" },
  { phase: "Week 2", focus: "Campaign build: structure, keywords, ad copy, and landing pages" },
  { phase: "Week 3–4", focus: "Launch, initial optimization, and bid strategy calibration" },
  { phase: "Ongoing", focus: "Weekly optimization, A/B testing, and monthly ROI reporting" },
];

export default function PPCGoogleAds() {
  return (
    <Box>
      <Helmet>
        <title>PPC & Google Ads Management — YourBrand</title>
        <meta
          name="description"
          content="Google Search, Shopping, Performance Max, and remarketing campaigns managed for measurable return on ad spend."
        />
      </Helmet>

      <SubHero
        eyebrow="Paid Advertising"
        crumb="PPC / Google Ads"
        title="Every dollar tied back to a conversion, not a click."
        subtitle="We manage Google Ads like an investment portfolio — with clear targets, weekly optimization, and transparent reporting."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 1 }}>
          What we manage
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 560, mx: "auto" }}
        >
          From first click to final conversion, across every relevant Google surface.
        </Typography>

        <Grid container spacing={3}>
          {SERVICES.map((item, idx) => (
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

      {/* Onboarding timeline — genuinely sequential, so a table fits */}
      <Box sx={{ bgcolor: "background.paper", borderTop: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h4" align="center" sx={{ mb: 4 }}>
            Getting a campaign live
          </Typography>
          <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "background.default" }}>
                  <TableCell sx={{ fontWeight: 700 }}>Timeline</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>What happens</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {PROCESS_TABLE.map((row) => (
                  <TableRow key={row.phase}>
                    <TableCell sx={{ fontWeight: 600, color: "primary.dark", whiteSpace: "nowrap" }}>
                      {row.phase}
                    </TableCell>
                    <TableCell>{row.focus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ color: "secondary.main", fontWeight: 800 }}>
              4.8x
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Average return on ad spend across active accounts
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ color: "secondary.main", fontWeight: 800 }}>
              32%
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Average reduction in cost-per-acquisition within 90 days
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ color: "secondary.main", fontWeight: 800 }}>
              $2.1M+
            </Typography>
            <Typography variant="body1" color="text.secondary">
              In monthly ad spend actively managed
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <CtaStrip
        title="Curious what your ad account is leaving on the table?"
        subtitle="We'll run a free account audit and show you where budget is being wasted."
        ctaLabel="Get a free audit"
      />
    </Box>
  );
}
