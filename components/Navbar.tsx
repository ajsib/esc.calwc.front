import { Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Typography } from '@mui/material';

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
        sx={{ bgcolor: 'background.default', borderRadius: '50%', padding: '10px' }} // Changed the styles for kebab menu
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
