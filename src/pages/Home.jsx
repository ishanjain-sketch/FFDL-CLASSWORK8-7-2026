import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import CtaStrip from "../components/CtaStrip";

const HIGHLIGHTS = [
  {
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 34 }} color="secondary" />,
    title: "Fast Delivery",
    text: "We ship reliable, production-ready work on time, every time.",
  },
  {
    icon: <DesignServicesOutlinedIcon sx={{ fontSize: 34 }} color="secondary" />,
    title: "Thoughtful Design",
    text: "Every detail is considered, from layout to the smallest interaction.",
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 34 }} color="secondary" />,
    title: "Real Support",
    text: "A dedicated team is on hand whenever you need us.",
  },
];

const STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "98%", label: "Client retention" },
  { value: "4.9/5", label: "Average rating" },
  { value: "12", label: "Countries served" },
];

export default function Home() {
  return (
    <Box>
      <Helmet>
        <title>YourBrand — Digital Marketing & Product Studio</title>
        <meta
          name="description"
          content="We help teams design, build, and ship digital products and campaigns that feel effortless and drive measurable growth."
        />
      </Helmet>

      <Banner
        title="Build something people love"
        subtitle="We help teams design, build, and ship products that feel effortless."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />

      {/* Stats bar */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
        <Grid container spacing={3}>
          {STATS.map((stat, idx) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{ color: "primary.dark", fontWeight: 800 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Highlights */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h4" component="h2" align="center" sx={{ mb: 1 }}>
          Why work with us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 560, mx: "auto" }}
        >
          A small team, a clear process, and results you can measure.
        </Typography>

        <Grid container spacing={3}>
          {HIGHLIGHTS.map((item, idx) => (
            <Grid item xs={12} md={4} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card variant="outlined" sx={{ height: "100%", p: 1 }}>
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

      <Testimonials />

      <CtaStrip />
    </Box>
  );
}