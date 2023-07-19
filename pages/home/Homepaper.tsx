import React from 'react';
import { Grid, Paper, useMediaQuery, useTheme, Typography, Box  } from '@mui/material';
import ServiceCard from './ServiceCard';
import { useRouter } from 'next/router';

const services = [
  {
    name: 'Profile',
    description: 'Manage your profile information, including personal details, contact information, and preferences. Update your profile picture, update your bio, and customize your account settings.',
    icon: '/icons/profile.svg',
    path: '/profile'
  },
  {
    name: 'Ticket Request',
    description: 'Submit a request for assistance or support from our team. Provide detailed information about your issue, attach relevant files, and track the progress of your ticket.',
    icon: '/icons/ticket-request.svg',
    path: '/ticket-request'
  },
  {
    name: 'Calendar',
    description: 'View and manage your schedule, appointments, and events. Create and edit events, set reminders, and synchronize with your favorite calendar applications.',
    icon: '/icons/calendar.svg',
    path: '/calendar'
  },
  {
    name: 'FAQ',
    description: 'Explore frequently asked questions and find answers to common queries about our products, services, and policies. Get quick and helpful information without contacting support.',
    icon: '/icons/faq.svg',
    path: '/faq'
  },
  {
    name: 'Documents',
    description: 'Access important documents and files, such as user manuals, guidelines, policies, and other relevant resources. Download, upload, and share files securely.',
    icon: '/icons/documents.svg',
    path: '/documents'
  },
  {
    name: 'Ticket Status',
    description: 'Check the status of your submitted tickets and get real-time updates on the progress and resolution of your requests. View assigned agents, response times, and resolution details.',
    icon: '/icons/ticket-status.svg',
    path: '/ticket-status'
  },
  {
    name: 'People',
    description: 'Manage user profiles and contacts. Add, edit, and remove user accounts. Organize contacts and maintain an up-to-date directory of users.',
    icon: '/icons/people.svg',
    path: '/people'
  },
  {
    name: 'Tasks',
    description: 'Manage your tasks and to-do lists. Create tasks, set due dates, assign priorities, and track their progress. Stay organized and ensure timely completion of your tasks.',
    icon: '/icons/tasks.svg',
    path: '/tasks'
  },
  {
    name: 'Analytics',
    description: 'Track and analyze data and metrics to gain valuable insights into user behavior, performance, and business trends. Generate reports and visualize data for better decision-making.',
    icon: '/icons/analytics.svg',
    path: '/analytics'
  },
  {
    name: 'Notifications',
    description: 'Manage your notification preferences and stay informed about important updates, announcements, and events. Customize the types of notifications you receive and how you receive them.',
    icon: '/icons/notifications.svg',
    path: '/notifications'
  },
  {
    name: 'Messaging',
    description: 'Communicate and collaborate with other users through our messaging platform. Send messages, share files, and stay connected with your colleagues and teammates.',
    icon: '/icons/messaging.svg',
    path: '/messaging'
  },
  {
    name: 'Admin',
    description: 'Access administrative functions and perform tasks related to system management, user roles, and configuration settings. Configure system settings, manage user permissions, and maintain system security.',
    icon: '/icons/admin.svg',
    path: '/admin'
  }
];


const HomePaper = () => {
  const router = useRouter();
  const { locale } = router;
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  let gridColumns: number; // Assigning a type to gridColumns
  if (isExtraSmall) {
    gridColumns = 12; // 1 card per row on extra small screens
  } else if (isSmall) {
    gridColumns = 6; // 2 cards per row on small screens
  } else if (isMedium) {
    gridColumns = 4; // 3 cards per row on medium screens
  } else if (isLarge) {
    gridColumns = 3; // 4 cards per row on large screens
  }


  return (
    <Paper 
      sx={{ 
        padding: '1rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        width: '90%', // Set the width to 80% of the page
        margin: 'auto', // Center the Paper horizontally
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem', // This ensures there's a consistent gap around each card
        justifyContent: 'center' // This centers the cards in the Paper
      }} 
      elevation={3}
    >
<Box sx={{
      padding: '1rem',
      width: '100%', 
      textAlign: 'left',
      backgroundColor: '#f5f5f5',
      marginBottom: '1rem',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>

        { locale === 'en' ? 'Welcome' : 'Bienvenue'}
      </Typography>
      <Typography variant="body1" component="div" sx={{ fontWeight: 'medium', marginTop: '0.5rem' }}>
        { locale === 'en' ? 'Welcome to the Canadian Army Land Warfare Centre (CALWC) Experimentation Services Centre Portal. This Portal is currently under development and will be available soon. We are working diligently to provide you with a comprehensive platform to access a wide range of services and resources related to land warfare experimentation. Stay tuned for updates and exciting features coming your way!' 
        : 'Bienvenue au portail du Centre de services d’expérimentation du Centre de guerre terrestre de l’Armée canadienne (CGTAC). Ce portail est actuellement en cours de développement et sera bientôt disponible. Nous travaillons avec diligence pour vous fournir une plate-forme complète pour accéder à un large éventail de services et de ressources liés à l&apos;expérimentation de la guerre terrestre. Restez à l&apos;affût des mises à jour et des fonctionnalités intéressantes à venir !'}
       
      This Portal is currently under development and will be available soon. 
      We are working diligently to provide you with a comprehensive platform to access a wide range of services and resources 
      related to land warfare experimentation. Stay tuned for updates and exciting features coming your way!

      </Typography>
    </Box>

      <Box sx={{
          backgroundColor: '#f5f5f5', // Custom header background color
          padding: '1rem',
          width: '100%', // Header spans the entire length
          textAlign: 'center', // Center the text
          marginBottom: '1rem',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" component="div">
          { locale === 'en' ? 'Services' : 'Prestations de service'}
        </Typography>
      </Box>


      {services.map((service, index) => (
        <Grid item xs={gridColumns} key={index}>
          <ServiceCard
            name={service.name}
            description={service.description}
            icon={service.icon}
            path={service.path}
          />
        </Grid>
      ))}
    </Paper>
  );
};

export default HomePaper;
