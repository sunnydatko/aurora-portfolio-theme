"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { from_name: string; reply_to: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const validate = (fields: Fields): Errors => {
  const errors: Errors = {};
  if (!fields.from_name.trim()) {
    errors.from_name = "Name is required.";
  } else if (fields.from_name.trim().length < 2) {
    errors.from_name = "Name must be at least 2 characters.";
  }
  if (!fields.reply_to.trim()) {
    errors.reply_to = "Email is required.";
  } else if (!EMAIL_REGEX.test(fields.reply_to.trim())) {
    errors.reply_to = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
};

const EMPTY: Fields = { from_name: "", reply_to: "", message: "" };

type SnackState = { open: boolean; severity: "success" | "error"; text: string };

export default function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [snack, setSnack] = useState<SnackState>({ open: false, severity: "success", text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name as keyof Fields]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ from_name: true, reply_to: true, message: true });
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      // TODO: wire up email service
      // Example with EmailJS:
      //   await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...fields }, PUBLIC_KEY);
      //
      // Example with a custom API route:
      //   await fetch("/api/contact", { method: "POST", body: JSON.stringify(fields) });

      setSnack({ open: true, severity: "success", text: "Your message was sent." });
      setFields(EMPTY);
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error("Contact form error:", err);
      setSnack({ open: true, severity: "error", text: "Something went wrong. Please try again." });
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.09)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container sx={{ maxWidth: "760px !important" }}>
        <Box className="reveal" sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "primary.light",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: { xs: 12.5, md: 14 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            + Let's Connect
          </Typography>
          <Typography variant="h3">Contact Me</Typography>
        </Box>

        <form onSubmit={handleSubmit} noValidate className="reveal" style={{ transitionDelay: "0.1s" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              margin: "0 auto",
              width: { xs: "100%", sm: "90%", md: "70%" },
            }}
          >
            <TextField
              label="Name"
              name="from_name"
              value={fields.from_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.from_name}
              helperText={errors.from_name}
            />
            <TextField
              label="Email"
              name="reply_to"
              type="email"
              value={fields.reply_to}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.reply_to}
              helperText={errors.reply_to}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Button
              size="large"
              type="submit"
              sx={{
                alignSelf: "center",
                mt: 1,
                width: { xs: "100%", md: "300px" },
                py: 1.4,
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snack.severity}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          sx={{ width: "100%" }}
        >
          {snack.text}
        </Alert>
      </Snackbar>
    </Box>
  );
}
