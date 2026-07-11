import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Banner from "../components/Banner";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your actual API / email service
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <Box>
      <Banner
        title="Contact Us"
        subtitle="Have a question or a project in mind? We'd love to hear from you."
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Get in touch
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Fill out the form and our team will get back to you within
              one business day.
            </Typography>

            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnOutlinedIcon color="primary" />
                <Typography variant="body2">
                  123 Market Street, Suite 400, San Francisco, CA
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailOutlinedIcon color="primary" />
                <Typography variant="body2">hello@yourbrand.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneOutlinedIcon color="primary" />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={2.5}>
                {submitted && (
                  <Alert severity="success" onClose={() => setSubmitted(false)}>
                    Thanks! Your message has been sent — we'll be in touch soon.
                  </Alert>
                )}
                <TextField
                  label="Full name"
                  required
                  fullWidth
                  value={form.name}
                  onChange={handleChange("name")}
                />
                <TextField
                  label="Email address"
                  type="email"
                  required
                  fullWidth
                  value={form.email}
                  onChange={handleChange("email")}
                />
                <TextField
                  label="Message"
                  required
                  fullWidth
                  multiline
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ alignSelf: "flex-start" }}
                >
                  Send message
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
