import Header from './components/Header'
import About from "./components/About"
import Projects from "./components/Projects"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(162, 110, 182)'
    },
  },
  typography: {
    fontFamily: 'Jost, Roboto',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Header />

      <Box component="section" id='home' sx={{ width: "70%", height:'600px', margin:'0 auto', textAlign: 'center', paddingTop: '120px' }}>
        <Typography variant="h2" gutterBottom>
          Hi, I am <span style={{color: '#6f6fab'}}>Tair Dulatuly</span>!
        </Typography>
        <Typography variant="h5" gutterBottom>
          I am into <span style={{color: '#6f6fab'}}>web developing</span>, and also into different things. Here, you can check out on what i am working on.
        </Typography>
        <Button size='medium' variant="outlined" color="primary" startIcon={<ArrowDropDownIcon />} href='#projects'>
                My projects
        </Button>
      </Box>

      <Box component="section" id='projects'>
        <Divider sx={{width:'80%', margin: '0 auto'}}>
              <Stack direction="row" spacing={2}>
                <Button size='large' variant="outlined" color="primary" startIcon={<LinkedInIcon />}  href='https://www.linkedin.com/in/dtair'>
                  LINKEDIN
                </Button>
                <Button size='large' variant="outlined" color="primary" endIcon={<GitHubIcon />} href='https://github.com/dtaird'>
                  GITHUB
                </Button>
              </Stack>
        </Divider>

        <Typography variant="h3" gutterBottom sx={{textAlign:'center', margin: '50px'}}>
          My projects.
        </Typography>
        <Projects />
      </Box>

      <Box component="footer" id='footer' sx={{height: '100px', margin:'0 auto', textAlign: 'center', backgroundColor: '#1f1f1f', marginTop:'100px' }}>
        <Typography variant="body1" gutterBottom sx={{ fontSize: '15px', lineHeight: '100px' }}>
          © {new Date().getFullYear()} Tair Dulatuly. All Rights Reserved.
        </Typography>
      </Box>
      <About/>
    </ThemeProvider>
  );
}