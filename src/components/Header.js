import * as React from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({
  mode,
  toggleMode,
  language,
  onLanguageChange,
}) {
  const { t } = useTranslation();

  const pages = [
    { id: "home", label: "header.home" },
    { id: "projects", label: "header.projects" },
  ];

  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(40px)",
        boxShadow: "1px 1px 15px rgb(162, 110, 182)",
        borderRadius: "0px 0px 20px 20px",
        width: "90%",
        margin: "0 auto",
        bgcolor: "rgba(0, 0, 0, 0.4)",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TAIR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={"a"}
                  href={"#" + page.id}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {t(page.label)}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Select
                  value={language}
                  onChange={handleChange}
                  size="small"
                  variant="standard"
                  sx={{ borderBottom: "1px solid white", minWidth: 100 }}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="ru">Русский</MenuItem>
                </Select>
              </MenuItem>
              <MenuItem>
                <Checkbox
                  checked={mode === "dark"}
                  onChange={toggleMode}
                  icon={<LightModeIcon />}
                  checkedIcon={<DarkModeIcon />}
                />
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TAIR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Checkbox
              sx={{ my: 2 }}
              checked={mode === "dark"}
              onChange={toggleMode}
              icon={<LightModeIcon />}
              checkedIcon={<DarkModeIcon />}
            />
            <Select
              value={language}
              onChange={handleChange}
              size="small"
              variant="standard"
              sx={{
                color: "white",
                borderBottom: "1px solid white",
                minWidth: 100,
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ru">Русский</MenuItem>
            </Select>
            {pages.map((page) => (
              <Button
                href={"#" + page.id}
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {t(page.label)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
