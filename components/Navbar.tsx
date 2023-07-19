import { Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => {
    const handleMouseLeave = () => {
      setOpen(false);
    };
  
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onMouseLeave={handleMouseLeave}
      >
        <List>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={{ variant: 'h6', sx: { fontWeight: 'bold', textAlign: 'center' } }}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Page 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Page 2" />
          </ListItem>
        </List>
      </Box>
    );
  };
  

  return (
    <Box sx={{ position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 999 }}>
        <IconButton
        onMouseEnter={toggleDrawer(true)}
        onClick={toggleDrawer(!open)}
        sx={{
            bgcolor: 'background.default',
            borderRadius: '5px',
            padding: '2px',
            marginLeft: '-5px', // Move the kebab menu closer to the left end
            backgroundColor: '#e9e9e9', // Change the background color to off-white
            height: '70px',
            width: '20px'

        }}
        >
        <MoreVertIcon />
        </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
}

export default Navbar;
