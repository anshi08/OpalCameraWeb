import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';

export default function Navbar() {
  const [show, setShow] = React.useState(true); 
  const [lastScrollY, setLastScrollY] = React.useState(0); 

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        
        setShow(false);
      } else {
        
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar 
        position="fixed" 
        className='bg_color'
        style={{
          transition: 'transform 0.3s ease-in-out',
          transform: show ? 'translateY(0)' : 'translateY(-100%)', 
          justifyContent : 'center',
          alignItems : 'center'
        }}
      >
        <Toolbar className='toolBar_margin'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,
            fontSize:'14px',color:'black'}}>
            Take $50 off any order $200 USD or more with code <span style={{'fontWeight':'bold'}}>ANY50</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}