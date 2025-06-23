import { I18nextProvider, useTranslation } from "react-i18next";
import { useState, useMemo, useEffect } from "react";
import i18next from "./i18n";
import Projects from "./components/Projects";
import Header from "./components/Header";
import About from "./components/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function App() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState(i18next.language || "en");
  const handleLanguageChange = (lng) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
  };
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    setLanguage(savedLang || "en");
  }, []);

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setMode(savedTheme);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "rgb(162, 110, 182)",
          },
        },
        typography: {
          fontFamily: 'Jost, Roboto',
        },
      }),
    [mode]
  );

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header
          mode={mode}
          toggleMode={toggleMode}
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        <Box
          component="section"
          id="home"
          sx={{
            width: "70%",
            height: "600px",
            margin: "0 auto",
            textAlign: "center",
            paddingTop: "120px",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {t("body.welcome")}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {t("body.description")}
          </Typography>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            startIcon={<ArrowDropDownIcon />}
            href="#projects"
          >
            {t("body.viewProjects")}
          </Button>
        </Box>

        <Box component="section" id="projects">
          <Divider sx={{ width: "80%", margin: "0 auto" }}>
            <Stack direction="row" spacing={2}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/dtair"
              >
                LINKEDIN
              </Button>
              <Button
                size="large"
                variant="contained"
                color="primary"
                endIcon={<GitHubIcon />}
                href="https://github.com/dtaird"
              >
                GITHUB
              </Button>
            </Stack>
          </Divider>

          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", margin: "50px" }}
          >
            {t("projects.heading")}
          </Typography>
          <Projects />
        </Box>

        <Box
          component="footer"
          id="footer"
          sx={{
            height: "100px",
            margin: "0 auto",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: "15px", lineHeight: "100px" }}
          >
            © {new Date().getFullYear()} {t("footer.text")}
          </Typography>
        </Box>
        <About />
      </ThemeProvider>
    </I18nextProvider>
  );
}
