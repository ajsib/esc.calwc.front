import { Grid, Paper } from "@mui/material";
import ServiceCard from './ServiceCard'; // Make sure the path is correct

const services = [ 
    { name: 'Profile', description: 'Manage your profile information', logo: '/icons/profile.svg', link: '/profile', type: 'Profile' },
    { name: 'Ticket Request', description: 'Submit a request for assistance', logo: '/icons/ticket-request.svg', link: '/ticket-request', type: 'Services' },
    { name: 'Calendar', description: 'View and manage your schedule', logo: '/icons/calendar.svg', link: '/calendar', type: 'Services' },
    { name: 'FAQ', description: 'Frequently Asked Questions', logo: '/icons/faq.svg', link: '/faq', type: 'Services' },
    { name: 'Documents', description: 'Access important documents and files', logo: '/icons/documents.svg', link: '/documents', type: 'Services' },
    { name: 'Ticket Status', description: 'Check the status of your submitted tickets', logo: '/icons/ticket-status.svg', link: '/ticket-status', type: 'Services' },
    { name: 'People', description: 'Manage user profiles and contacts', logo: '/icons/people.svg', link: '/people', type: 'Admin' },
    { name: 'Tasks', description: 'Manage your tasks and to-do lists', logo: '/icons/tasks.svg', link: '/tasks', type: 'Services' },
    { name: 'Analytics', description: 'Track and analyze data and metrics', logo: '/icons/analytics.svg', link: '/analytics', type: 'Services' },
    { name: 'Notifications', description: 'Manage your notification preferences', logo: '/icons/notifications.svg', link: '/notifications', type: 'Profile' },
    { name: 'Messaging', description: 'Communicate and collaborate with other users', logo: '/icons/messaging.svg', link: '/messaging', type: 'Services' },
    { name: 'Admin', description: 'Access administrative functions', logo: '/icons/admin.svg', link: '/admin', type: 'Admin' }

    

  ];
  

const HomePaper = () => {
  return (
    <Paper sx={{ padding: '1rem', marginTop: '1rem', marginBottom: '1rem' }} elevation={3}>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default HomePaper;
