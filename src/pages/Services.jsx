import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import Banner from "../components/Banner";

const SERVICES = [
  {
    icon: <WebOutlinedIcon sx={{ fontSize: 32 }} color="secondary" />,
    title: "Web Development",
    text: "Fast, accessible, responsive websites and web apps built to scale.",
    points: ["Custom React apps", "Performance tuning", "SEO-friendly builds"],
  },
  {
    icon: <PhoneIphoneOutlinedIcon sx={{ fontSize: 32 }} color="secondary" />,
    title: "Mobile Apps",
    text: "Native-feeling mobile experiences for iOS and Android.",
    points: ["Cross-platform builds", "Offline-first design", "App store support"],
  },
  {
    icon: <BarChartOutlinedIcon sx={{ fontSize: 32 }} color="secondary" />,
    title: "Product Strategy",
    text: "Research and roadmapping to make sure you build the right thing.",
    points: ["User research", "Roadmap planning", "Analytics setup"],
  },
];

export default function Services() {
  return (
    <Box>
      <Banner
        title="Our Services"
        subtitle="Everything you need to design, build, and grow your product."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {SERVICES.map((service) => (
            <Grid item xs={12} md={4} key={service.title}>
              <Card
                variant="outlined"
                sx={{ height: "100%", borderRadius: 3, p: 1 }}
              >
                <CardContent>
                  <Box sx={{ mb: 1.5 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.text}
                  </Typography>
                  <List dense disablePadding>
                    {service.points.map((point) => (
                      <ListItem key={point} disableGutters disablePadding sx={{ py: 0.4 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleOutlineIcon
                            sx={{ fontSize: 18 }}
                            color="primary"
                          />
                        </ListItemIcon>
                        <ListItemText primary={point} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}