
// ------------------------------------------------ 
// ------------- UI and Stylin's ------------------ 
// ------------------------------------------------ 

import { Box, CssBaseline, Button, Grid, Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// ----------------------------------------------- 
// -------------- Import ------------------------- 
// ------------ Link Category Files--------------- 
// ----------------------------------------------- 

// Importing the link category files
import DAOhausV3 from './assets/DAOhausv3';
import PublicHaus from './assets/publicHaus';
import Development from './assets/develop';
import Media from './assets/media';
import HausToken from './assets/hausToken';
import Contracts from './assets/contracts';
import DAOhausV2 from './assets/DAOhausv2';
import Ecosystem from './assets/ecosystem';


// ------------------------------------------------ 
// ------------------- Main App-------------------- 
// ------------------------------------------------ 

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
       <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: 4 }}>
          {/* First Box with Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: 'transparent', width: '90%', marginBottom: 2 }}>
              <img 
                src="/DH3bloom.png" 
                alt="DAOhaus Logo" 
                style={{ 
                  maxWidth: '100%',
                  objectFit: 'contain',
                }} 
              />
            </Box>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{ 
                backgroundColor: 'transparent', 
                width: '90%', 
                maxWidth: '600px',
                marginBottom: 5,
                margin: 'auto',
                padding: 2,
                elevation: 24
              }}
            >
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                fontSize: {
                  xs: '1.1rem',  // Smaller font size for extra small screens
                  sm: '1.3rem', // Slightly larger for small screens
                  md: '1.5rem', // Default H5 size for medium screens and up
                },
              color: '#fbd745' 
              }}
            >
              The protocol for purpose-driven governance
            </Typography>
          </Paper>
        </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
            {[
              { title: 'DAOhaus V3', links: DAOhausV3 },
              { title: 'Public HAUS', links: PublicHaus },
              { title: 'Development', links: Development },
              { title: 'Media', links: Media },
              { title: '$HAUS Token', links: HausToken },
              { title: 'Contract Deploys', links: Contracts },
              { title: 'DAOhaus V2', links: DAOhausV2 },
              { title: 'Ecosystem', links: Ecosystem },
            ].map((category, index) => (
        <Grid item xs={12} key={index}>
          <Typography 
            variant="h3" 
            align="center"
            sx={{ 
              fontSize: {
                xs: '1.75rem',  // Smaller font size for extra small screens
                sm: '2.0rem', // Slightly larger for small screens
                md: '2.5rem',    // Default H3 size for medium screens and up
              },
              color: '#d96b55',
              marginBottom: 2,
              '&:hover': {
                color: '#559be2' 
          }
        }}
      >
        {category.title}
      </Typography>
              {category.links.map((link, linkIndex) => (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                  <Button
                  key={linkIndex}
                  variant="contained"
                  href={link.url}
                  sx={{
                    width: '70%',
                    height: '60px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    boxShadow: '5px 5px 5px grey',
                    borderRadius: 0,
                    border: '1px solid white',
                    '&:hover': {
                      backgroundColor: 'black',
                      borderColor: '#fbd745',
                      border: '1px solid',
                      color: '#fbd745',
                      boxShadow: '5px 5px 5px grey',
                    },
                  }}
                >
                {/* Left-justify the icon */}
                  <Box 
                  sx={{ 
                    fontSize: {
                      xs: '20px',
                      sm: '25px',
                      md: '30px',
                    },
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                    }}
                >
                  {link.icon}
                  </Box>
                      {/* Center the text */}
                  <Box 
                    sx={{ 
                      fontSize: {
                      xs: '16px',
                      sm: '18px',
                      md: '24px',
                    },
                      width: '100%',
                      textAlign: 'center',
                      display: 'block'
                    }}
                 >
                  {link.title}
                </Box>
              </Button>
            </Box>                 
           ))}
         </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: 4 }}>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: 'transparent', width: '100%', marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/3dDiaPers1.png" 
                alt="logo perspective" 
                style={{ 
                  maxWidth: '100%',
                  objectFit: 'cover',
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// WrappedApp function that wraps App with ThemeProvider
function WrappedApp() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

// Exporting WrappedApp as default
export default WrappedApp;
