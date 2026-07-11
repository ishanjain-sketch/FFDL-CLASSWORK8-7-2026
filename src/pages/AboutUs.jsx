import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Banner from "../components/Banner";

const TEAM = [
  { name: "Amara Reyes", role: "Founder & CEO", initials: "AR" },
  { name: "Devon Wu", role: "Head of Design", initials: "DW" },
  { name: "Priya Nair", role: "Lead Engineer", initials: "PN" },
];

export default function AboutUs() {
  return (
    <Box>
      <Banner
        title="About"
        subtitle="We're a small, focused team building products we're proud of."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Our story
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              YourBrand started with a simple idea: great software should
              feel effortless to use and a pleasure to build. What began as
              a two-person project has grown into a team dedicated to
              solving real problems for real people.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Today we partner with businesses of every size to design,
              build, and support digital products that last.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 280,
                borderRadius: 3,
                bgcolor: "primary.light",
                opacity: 0.15,
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" align="center" sx={{ mt: { xs: 8, md: 10 }, mb: 5 }}>
          Meet the team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {TEAM.map((member) => (
            <Grid item xs={12} sm={4} key={member.name} sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  width: 84,
                  height: 84,
                  mx: "auto",
                  mb: 1.5,
                  bgcolor: "secondary.main",
                  fontSize: 24,
                }}
              >
                {member.initials}
              </Avatar>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
