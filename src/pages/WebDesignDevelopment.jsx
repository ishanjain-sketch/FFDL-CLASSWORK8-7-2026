import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import { motion } from "framer-motion";
import SubHero from "../components/SubHero";
import CtaStrip from "../components/CtaStrip";

const OFFERINGS = [
  {
    icon: <DesignServicesOutlinedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "UX/UI Design",
    text: "Wireframes through high-fidelity design, grounded in how your users actually browse and buy.",
  },
  {
    icon: <CodeRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Development",
    text: "Modern, maintainable builds on React, Next.js, or your CMS of choice.",
  },
  {
    icon: <SpeedRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Performance Optimization",
    text: "Core Web Vitals, image pipelines, and caching tuned for fast load on any connection.",
  },
  {
    icon: <DevicesRoundedIcon sx={{ fontSize: 30 }} color="secondary" />,
    title: "Responsive by Default",
    text: "Every build tested across breakpoints — no separate 'mobile version' as an afterthought.",
  },
];

const STACK = ["React", "Next.js", "WordPress", "Shopify", "Webflow", "Tailwind CSS"];

const PROCESS = [
  { step: "Discovery", detail: "Understand your goals, users, and technical constraints." },
  { step: "Design", detail: "Wireframes, then high-fidelity mockups with revision rounds." },
  { step: "Build", detail: "Component-based development with staging previews at each milestone." },
  { step: "Launch & Support", detail: "QA, performance pass, launch, and a support window after go-live." },
];

export default function WebDesignDevelopment() {
  return (
    <Box>
      <Helmet>
        <title>Web Design & Development — YourBrand</title>
        <meta
          name="description"
          content="Custom website design and development, built for speed, conversion, and easy content management."
        />
      </Helmet>

      <SubHero
        eyebrow="Web Design & Development"
        crumb="Web Design & Development"
        title="A website that loads fast, looks intentional, and converts."
        subtitle="Design and engineering under one roof, so nothing gets lost between a mockup and a working site."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" align="center" sx={{ mb: 1 }}>
          What we build
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 560, mx: "auto" }}
        >
          From marketing sites to full product builds, designed and shipped by the same team.
        </Typography>

        <Grid container spacing={3}>
          {OFFERINGS.map((item, idx) => (
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

      <Box sx={{ bgcolor: "background.paper", borderTop: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h4" align="center" sx={{ mb: 5 }}>
            How a build runs
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
                  <Typography variant="h3" sx={{ color: "secondary.main", fontWeight: 800, mb: 1 }}>
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
        <Typography variant="h4" sx={{ mb: 2 }}>
          Tools we work with
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 560 }}>
          We pick the stack based on your team's needs, not the other way around.
        </Typography>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          {STACK.map((tool) => (
            <Box
              key={tool}
              sx={{
                px: 2.5,
                py: 1,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {tool}
            </Box>
          ))}
        </Stack>
      </Container>

      <CtaStrip
        title="Have an outdated site holding you back?"
        subtitle="We'll review it and tell you exactly what's costing you conversions."
        ctaLabel="Get a free site review"
      />
    </Box>
  );
}
