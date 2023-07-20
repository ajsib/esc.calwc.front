import { Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;

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

  const navigateToPage = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const services = [

    {
      name: 'Home',
      icon: '/icons/home.svg',
      path: '/home',
      frenchname: 'Accueil',
    },

    {
      name: 'Profile',
      icon: '/icons/profile.svg',
      path: '/services/profile',
      frenchname: 'Profil',
    },
    {
      name: 'Ticket Request',
      icon: '/icons/ticket-request.svg',
      path: '/services/ticket-request',
      frenchname: 'Demande de ticket',
    },
    {
      name: 'Calendar',
      icon: '/icons/calendar.svg',
      path: '/services/calendar',
      frenchname: 'Calendrier',
    },
    {
      name: 'FAQ',
      icon: '/icons/faq.svg',
      path: '/services/faq',
      frenchname: 'FAQ',
    },
    {
      name: 'Documents',
      icon: '/icons/documents.svg',
      path: '/services/documents',
      frenchname: 'Documents',
    },
    {
      name: 'Ticket Status',
      icon: '/icons/ticket-status.svg',
      path: '/services/ticket-status',
      frenchname: 'État du ticket',
    },
    {
      name: 'People',
      icon: '/icons/people.svg',
      path: '/services/people',
      frenchname: 'Personnes',
    },
    {
      name: 'Tasks',
      icon: '/icons/tasks.svg',
      path: '/services/tasks',
      frenchname: 'Tâches',
    },
    {
      name: 'Analytics',
      icon: '/icons/analytics.svg',
      path: '/services/analytics',
      frenchname: 'Analytiques',
    },
    {
      name: 'Notifications',
      icon: '/icons/notifications.svg',
      path: '/services/notifications',
      frenchname: 'Notifications',
    },
    {
      name: 'Messaging',
      icon: '/icons/messaging.svg',
      path: '/services/messaging',
      frenchname: 'Messagerie',
    },
    {
      name: 'Admin',
      icon: '/icons/admin.svg',
      path: '/services/admin',
      frenchname: 'Administration',
    },


  ];
  
  

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
          {services.map((service, index) => (
            <ListItem button key={index} onClick={() => navigateToPage(service.path)}>
              <img src={service.icon} alt={service.name} width={24} height={24} style={{ marginRight: '8px' }} />
              <ListItemText primary={locale === 'en' ? service.name : service.frenchname} />
            </ListItem>
          ))}
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
          width: '30px',
          border: '1px solid black', // Add a black border
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navbar;
