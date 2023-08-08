import React from 'react';
import { Grid, Paper, useMediaQuery, useTheme, Typography, Box  } from '@mui/material';
import ServiceCard from './ServiceCard';
import { useRouter } from 'next/router';
import Carousel from './Carousel/Carousel';
import Page1 from './Carousel/P1';
import Page2 from './Carousel/P2';
import Page3 from './Carousel/P3';
import Page4 from './Carousel/P4';

const services = [
  {
    name: 'Profile',
    description: 'Manage your profile information, including personal details, contact information, and preferences. Update your profile picture, update your bio, and customize your account settings.',
    icon: '/icons/profile.svg',
    path: '/services/profile',
    frenchname: 'Profil',
    frenchdescription: 'Gérez vos informations de profil, y compris les détails personnels, les informations de contact et les préférences. Mettez à jour votre photo de profil, mettez à jour votre bio et personnalisez les paramètres de votre compte.'
  },
  {
    name: 'Ticket Request',
    description: 'Submit a request for assistance or support from our team. Provide detailed information about your issue, attach relevant files, and track the progress of your ticket.',
    icon: '/icons/ticket-request.svg',
    path: '/services/ticket-request',
    frenchname: 'Demande de ticket',
    frenchdescription: 'Soumettez une demande d\'assistance ou de support de notre équipe. Fournissez des informations détaillées sur votre problème, joignez des fichiers pertinents et suivez l\'évolution de votre ticket.'
  },
  {
    name: 'FAQ',
    description: 'Explore frequently asked questions and find answers to common queries about our products, services, and policies. Get quick and helpful information without contacting support.',
    icon: '/icons/faq.svg',
    path: '/services/faq',
    frenchname: 'FAQ',
    frenchdescription: 'Explorez les questions fréquemment posées et trouvez des réponses aux questions courantes sur nos produits, services et politiques. Obtenez des informations rapides et utiles sans contacter le support.'
  },
  {
    name: 'Documents',
    description: 'Access important documents and files, such as user manuals, guidelines, policies, and other relevant resources. Download, upload, and share files securely.',
    icon: '/icons/documents.svg',
    path: '/services/documents',
    frenchname: 'Documents',
    frenchdescription: 'Accédez à des documents et des fichiers importants, tels que des manuels d\'utilisation, des directives, des politiques et d\'autres ressources pertinentes. Téléchargez, téléversez et partagez des fichiers en toute sécurité.'
  },
  {
    name: 'Ticket Status',
    description: 'Check the status of your submitted tickets and get real-time updates on the progress and resolution of your requests. View assigned agents, response times, and resolution details.',
    icon: '/icons/ticket-status.svg',
    path: '/services/ticket-status',
    frenchname: 'État du ticket',
    frenchdescription: 'Vérifiez l\'état de vos tickets soumis et obtenez des mises à jour en temps réel sur l\'évolution et la résolution de vos demandes. Consultez les agents assignés, les délais de réponse et les détails de résolution.'
  },
  {
    name: 'People',
    description: 'Manage user profiles and contacts. Add, edit, and remove user accounts. Organize contacts and maintain an up-to-date directory of users.',
    icon: '/icons/people.svg',
    path: '/services/people',
    frenchname: 'Personnes',
    frenchdescription: 'Gérez les profils et les contacts des utilisateurs. Ajoutez, modifiez et supprimez des comptes d\'utilisateur. Organisez les contacts et maintenez un annuaire à jour des utilisateurs.'
  },
  {
    name: 'Tasks',
    description: 'Manage your tasks and to-do lists. Create tasks, set due dates, assign priorities, and track their progress. Stay organized and ensure timely completion of your tasks.',
    icon: '/icons/tasks.svg',
    path: '/services/tasks',
    frenchname: 'Tâches',
    frenchdescription: 'Gérez vos tâches et listes de choses à faire. Créez des tâches, fixez des dates d\'échéance, attribuez des priorités et suivez leur progression. Restez organisé et assurez-vous de terminer vos tâches en temps voulu.'
  },
  {
    name: 'Analytics',
    description: 'Track and analyze data and metrics to gain valuable insights into user behavior, performance, and business trends. Generate reports and visualize data for better decision-making.',
    icon: '/icons/analytics.svg',
    path: '/services/analytics',
    frenchname: 'Analytiques',
    frenchdescription: 'Suivez et analysez des données et des métriques pour obtenir des informations précieuses sur le comportement des utilisateurs, les performances et les tendances commerciales. Générez des rapports et visualisez des données pour une meilleure prise de décision.'
  },
  {
    name: 'Admin',
    description: 'Access administrative functions and perform tasks related to system management, user roles, and configuration settings. Configure system settings, manage user permissions, and maintain system security.',
    icon: '/icons/admin.svg',
    path: '/services/admin',
    frenchname: 'Administration',
    frenchdescription: 'Accédez aux fonctions administratives et effectuez des tâches liées à la gestion du système, aux rôles des utilisateurs et aux paramètres de configuration. Configurez les paramètres du système, gérez les autorisations des utilisateurs et maintenez la sécurité du système.'
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
        gap: '0.5rem', // This ensures there's a consistent gap around each card
        justifyContent: 'center' // This centers the cards in the Paper
      }} 
      elevation={3}
    >

      {/* Insert here */}
      <Carousel>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
      </Carousel>

      <Box sx={{
          backgroundColor: '#f5f5f5', // Custom header background color
          padding: '1rem',
          width: '100%', // Header spans the entire length of the page
          marginBottom: '1rem',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        >
      </Box>


      {services.map((service, index) => (
        <Grid item xs={gridColumns} key={index}>
          <ServiceCard
          name={locale === 'en' ? service.name : service.frenchname}
          description={locale === 'en' ? service.description : service.frenchdescription}
          icon={service.icon}
          path={locale === 'en' ? service.path : `/fr${service.path}`} // route to corresponding /en or /fr page
    />
        </Grid>
      ))}
    </Paper>
  );
};

export default HomePaper;
