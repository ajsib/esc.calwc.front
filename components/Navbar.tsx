import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type NavbarProps = {
  open: boolean;
  onClose: () => void;
  onMouseLeave: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ open, onClose, onMouseLeave }) => {
  const router = useRouter();
  const { locale } = router;
  const [isOpen, setIsOpen] = useState(open);

  // This effect will listen for changes to the 'open' prop and update the local state accordingly.
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const navigateToPage = (path: string) => {
    router.push(path);
    onClose();
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
      name: 'Admin',
      icon: '/icons/admin.svg',
      path: '/services/admin',
      frenchname: 'Administration',
    },


  ];
  
  const handleMouseLeave = () => {
    setIsOpen(false);
    onMouseLeave();
  };

  const list = () => (
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

  return (
    <Box sx={{ position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 999 }}>
      <Drawer anchor="left" open={isOpen} onClose={onClose}> {/* Use onClose here */}
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navbar;