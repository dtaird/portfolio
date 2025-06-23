import { useTranslation } from "react-i18next";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export default function Projects() {
  const { t } = useTranslation();

  const itemData = [
    {
      link: "https://github.com/dtaird/portfolio",
      img: "https://github.com/dtaird/portfolio/raw/master/public/screenshot.png",
      title: "This site",
      desc: t("projects.portfolio-desc"),
    },
    {
      link: "https://ecolifestyle-web.vercel.app",
      img: "https://github.com/dtaird/ecolifestyle-web/raw/main/screenshot.png",
      title: "ecolifestyle-web",
      desc: t("projects.ecolifestyle-desc"),
    },
    {
      link: "https://activitygenerator-web.vercel.app",
      img: "https://github.com/dtaird/activitygenerator-web/raw/main/screenshot.png",
      title: "activitygenerator-web",
      desc: t("projects.activitygenerator-desc"),
    },
    {
      link: "https://paletegenerator-web.vercel.app",
      img: "https://github.com/dtaird/paletegenerator-web/raw/main/screenshot.png",
      title: "paletegenerator-web",
      desc: t("projects.paletegenerator-desc"),
    },
    {
      link: "https://github.com/dtaird/nbascraper-scraping",
      img: "https://github.com/dtaird/nbascraper-scraping/raw/main/program.png",
      title: "nbascraper-scraping",
      desc: t("projects.nbascraper-desc"),
    },
    {
      link: "https://github.com/dtaird/breakout-game",
      img: "https://github.com/dtaird/breakout-game/raw/main/screenshot.png",
      title: "breakout-game",
      desc: t("projects.breakout-desc"),
    },
    {
      link: "https://github.com/dtaird/spaceinvaders-game",
      img: "https://github.com/dtaird/spaceinvaders-game/raw/main/screenshot.png",
      title: "spaceinvaders-game",
      desc: t("projects.spaceinvaders-desc"),
    },
    {
      link: "https://github.com/dtaird/disappearingwriting-gui",
      img: "https://github.com/dtaird/disappearingwriting-gui/raw/main/screenshot.png",
      title: "disappearingwriting-gui",
      desc: t("projects.disappearingwriting-desc"),
    },
    {
      link: "https://github.com/dtaird/imagewatermarker-gui",
      img: "https://github.com/dtaird/imagewatermarker-gui/raw/main/screenshot.png",
      title: "imagewatermarker-gui",
      desc: t("projects.imagewatermarker-desc"),
    },
    {
      link: "https://github.com/dtaird/typingspeed-gui",
      img: "https://github.com/dtaird/typingspeed-gui/raw/main/screenshot.png",
      title: "typingspeed-gui",
      desc: t("projects.typingspeed-desc"),
    },
  ];

  return (
    <Container>
      <Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 8 }}>
        {itemData.map((item) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} sx={{ margin: "10px 0px" }}>
            <Card
              sx={{
                maxWidth: 500,
                margin: "0 auto",
                boxShadow: "1px 1px 20px rgb(162, 110, 182)",
                borderRadius: "30px",
              }}
            >
              <CardActionArea component={"a"} href={item.link}>
                <CardMedia
                  component="img"
                  height="270"
                  image={item.img}
                  alt="item"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
