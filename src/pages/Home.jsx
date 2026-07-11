import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Banner from "../components/Banner";

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

export default function Home() {
  return (
    <Box>
      <Banner
        title="Build something people love"
        subtitle="We help teams design, build, and ship products that feel effortless."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
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
          {HIGHLIGHTS.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card
                variant="outlined"
                sx={{ height: "100%", p: 1, borderRadius: 3 }}
              >
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
