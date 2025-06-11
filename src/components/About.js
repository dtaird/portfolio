import * as React from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function About() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Fab onClick={handleClickOpen} color="primary" sx={{position: "fixed", bottom: (theme) => theme.spacing(2), right: (theme) => theme.spacing(2)}}>
          <MapsUgcIcon />
      </Fab>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"About me"}</DialogTitle>
        <DialogContent>
        <Card sx={{ maxWidth: '400px' , padding: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt="tair" src="https://media.licdn.com/dms/image/v2/D4E03AQHPSQ3Wh4FvOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684067355275?e=2147483647&v=beta&t=4-KNxH5Yyp9MkYfBuvbuQC34rNa9J2KEQAPLGIxeQQQ" sx={{ width: 100, height: 100 }} />
              <div>
                <Typography variant="h5">Tair Dulatuly</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Aspiring Developer
                </Typography>
              </div>
            </Stack>
            <CardContent>
              <Typography variant="body2">
                Skilled in python (flask, selenium, beautiful soup, sqlalchemy), javascipt (react, next, material-ui), solidity.
              </Typography>
              <Typography variant="body2" sx={{color:'#787878', marginTop: '10px'}}>
                Nazarbayev Intellectual Schools
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} startIcon={<LinkedInIcon />}  href='https://www.linkedin.com/in/dtair'>
                View Profile
              </Button>
            </CardContent>
          </Card>

          <Box component="section" sx={{margin:'10px auto', textAlign: 'center'}}>
            
          <DialogContentText id="alert-dialog-slide-description" sx={{marginBottom:'10px'}}>
            I am always up for a chat! feel free to reach out!
          </DialogContentText>

          <Button  sx={{marginBottom:'10px'}} variant="outlined" startIcon={<EmailIcon />} href='mailto:tairdulatuly@outlook.com'>
            tairdulatuly@outlook.com
          </Button><br />
          <Button variant="outlined" endIcon={<PhoneIcon />} href='tel:+77018881922'>
            +7 (701) 888 19-22
          </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}