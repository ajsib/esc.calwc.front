import { Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* Add your page links here as ListItems */}
        <ListItem button>
          <ListItemText primary="Page 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Page 2" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      onMouseEnter={toggleDrawer(true)}
      onMouseLeave={toggleDrawer(false)}
      onClick={toggleDrawer(!open)}
      sx={{ width: open ? 250 : 60, position: 'fixed', top: 0, left: 0, height: '100vh', overflowX: 'hidden', zIndex: 999 }}
    >
      <IconButton>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
}

export default Navbar;
