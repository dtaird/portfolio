import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function Projects() {
  return (
      <Container>
      <Grid container spacing={2} columns={{ xs: 2, sm: 8, md: 8 }}>
            {itemData.map((item) => (
            <Grid size={{ xs: 2, sm: 4, md: 4 }} sx={{margin: '10px 0px'}}>
                <Card sx={{ maxWidth: 500, margin: '0 auto', boxShadow: '1px 1px 20px rgb(162, 110, 182)', borderRadius:'30px'}}>
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
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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

const itemData = [
  {
    link: 'https://github.com/dtaird/ecolifestyle-web',
    img: 'https://github.com/dtaird/ecolifestyle-web/raw/main/screenshot.png',
    title: 'ecolifestyle-web',
    desc: 'EcoLifestyle provides people with the necessary knowledge to adopt an ecological mindset that will benefit the ecosystem and preserve natural resources for future generations. The site has many responsive pages, animation, databases, account protection (password encryption by hashing), blog posts, comments on these posts'
  },
  {
    link: 'https://github.com/dtaird/activitygenerator-web',
    img: 'https://github.com/dtaird/activitygenerator-web/raw/main/screenshot.png',
    title: 'activitygenerator-web',
    desc: 'Flask web application that uses the Bored API to suggest activities to users who are feeling bored. It presents a simple user interface that allows users to specify the type of activity they are interested in, as well as the number of participants they want to involve.'
  },
  {
    link: 'https://github.com/dtaird/nbascraper-scraping',
    img: 'https://github.com/dtaird/nbascraper-scraping/raw/main/program.png',
    title: 'nbascraper-scraping',
    desc: 'Python script that scrapes NBA player stats from the official NBA website using Selenium and saves the data to a CSV file. The user can select various parameters for the data to be scraped such as season, season type, per mode, and sort type using the Graphical User Interface (GUI) built with Tkinter.'
  },
  {
    link: 'https://github.com/dtaird/suppliesblockchain-web',
    img: 'https://github.com/dtaird/suppliesblockchain-web/raw/main/public/img/home.png',
    title: 'suppliesblockchain-web',
    desc: 'Blockchain for creating a fully transparent supply chain, where each participant (from the manufacturer to the end consumer) can track the origin, movement and condition of goods in real time.'
  },
  {
    link: 'https://github.com/dtaird/paletegenerator-web',
    img: 'https://github.com/dtaird/paletegenerator-web/raw/main/screenshot.png',
    title: 'paletegenerator-web',
    desc: 'Simple web application built with Flask that allows users to upload an image and extract its dominant color palette using the ColorThief library.'
  },
  {
    link: 'https://github.com/dtaird/breakout-game',
    img: 'https://github.com/dtaird/breakout-game/raw/main/screenshot.png',
    title: 'breakout-game',
    desc: "Simple Brick Breaker game built using Python's turtle module. In this game, the player controls a paddle to hit a ball towards a set of bricks at the top of the screen, with the goal of breaking all the bricks to advance to the next level."
  },
  {
    link: 'https://github.com/dtaird/spaceinvaders-game',
    img: 'https://github.com/dtaird/spaceinvaders-game/raw/main/screenshot.png',
    title: 'spaceinvaders-game',
    desc: "Simple implementation of the popular game Space Invaders using Python's turtle graphics library."
  },
  {
    link: 'https://github.com/dtaird/disappearingwriting-gui',
    img: 'https://github.com/dtaird/disappearingwriting-gui/raw/main/screenshot.png',
    title: 'disappearingwriting-gui',
    desc: "Simple tkinter GUI application that counts the number of words you write in a text field within a time limit of 5 seconds. If you don't write anything in the text field within the time limit, the text will disappear."
  },
  {
    link: 'https://github.com/dtaird/imagewatermarker-gui',
    img: 'https://github.com/dtaird/imagewatermarker-gui/raw/main/screenshot.png',
    title: 'imagewatermarker-gui',
    desc: "Simple GUI application built with Python's tkinter and PIL libraries that allows a user to choose an image and watermark it. "
  },
  {
    link: 'https://github.com/dtaird/typingspeed-gui',
    img: 'https://github.com/dtaird/typingspeed-gui/raw/main/screenshot.png',
    title: 'typingspeed-gui',
    desc: 'Simple Python application that allows users to measure their typing speed by tracking the number of characters they type per minute.'
  },
  {
    link: 'https://github.com/dtaird/portfolio',
    img: 'https://github.com/dtaird/portfolio/raw/master/public/screenshot.png',
    title: 'This site',
    desc: 'Portfolio website, showcasing projects of Tair Dulatuly built on react by using material-ui as styling.'
  },
];