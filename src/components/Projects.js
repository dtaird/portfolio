import { useTranslation } from "react-i18next";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

export default function Projects() {
  const { t } = useTranslation();

  const itemData = [
    {
      link: "https://github.com/dtaird/portfolio",
      img: "https://github.com/dtaird/portfolio/raw/master/public/screenshot.png",
      title: "portfolio-site",
      desc: t("projects.portfolio-desc"),
      tags: ["React.js", "MaterialUI"]
    },
    {
      link: "https://ecolifestyle-web.vercel.app",
      img: "https://github.com/dtaird/ecolifestyle-web/raw/main/screenshot.png",
      title: "ecolifestyle-web",
      desc: t("projects.ecolifestyle-desc"),
      tags: ["Python", "Flask", "SQLAlchemy", "Authentication", "Blog", "CMS"]
    },
    {
      link: "https://activitygenerator-web.vercel.app",
      img: "https://github.com/dtaird/activitygenerator-web/raw/main/screenshot.png",
      title: "activitygenerator-web",
      desc: t("projects.activitygenerator-desc"),
      tags: ["Python", "Flask", "Bored API"]
    },
    {
      link: "https://paletegenerator-web.vercel.app",
      img: "https://github.com/dtaird/paletegenerator-web/raw/main/screenshot.png",
      title: "paletegenerator-web",
      desc: t("projects.paletegenerator-desc"),
      tags: ["Python", "Flask", "ColorThief"]
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
                  <div style={{ marginTop: 8 }}>
                    {item.tags && item.tags.map((tag) => (
                      <Chip
                        color="primary"
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ marginRight: 0.5, marginBottom: 0.5 }}
                      />
                    ))}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
