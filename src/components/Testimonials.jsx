import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { motion } from "framer-motion";

const QUOTES = [
  {
    name: "Priya Sharma",
    role: "Founder, Studio Lume",
    quote:
      "They rebuilt our funnel from scratch and our conversion rate nearly doubled within two months.",
  },
  {
    name: "Daniel Okafor",
    role: "Head of Growth, Northwind",
    quote:
      "Clear communication, fast turnarounds, and design work that actually matched our brand voice.",
  },
  {
    name: "Maya Chen",
    role: "CEO, Fieldnote",
    quote:
      "The kind of team you call once and never think about switching away from. Genuinely dependable.",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ bgcolor: "primary.dark", color: "primary.contrastText", py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" sx={{ mb: 1 }}>
          What clients say
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "rgba(255,255,255,0.7)", mb: 5, maxWidth: 520, mx: "auto" }}
        >
          We measure success the same way our clients do: results, not vanity metrics.
        </Typography>

        <Grid container spacing={3}>
          {QUOTES.map((item, idx) => (
            <Grid item xs={12} md={4} key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 3,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <FormatQuoteRoundedIcon sx={{ color: "secondary.main", fontSize: 30, mb: 1 }} />
                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(255,255,255,0.9)", mb: 3, minHeight: 96 }}
                    >
                      {item.quote}
                    </Typography>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar sx={{ bgcolor: "secondary.main", color: "primary.dark", fontWeight: 700 }}>
                        {item.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          {item.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
                          {item.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
