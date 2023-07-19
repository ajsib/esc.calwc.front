import { Grid, Paper } from "@mui/material";
import ServiceCard from './ServiceCard'; // Make sure the path is correct

const services = [
    { name: 'Profile', description: 'Manage your profile information, including personal details, contact information, and preferences. Update your profile picture, update your bio, and customize your account settings.', logo: '/icons/profile.svg', link: '/profile' },
    { name: 'Ticket Request', description: 'Submit a request for assistance or support from our team. Provide detailed information about your issue, attach relevant files, and track the progress of your ticket.', logo: '/icons/ticket-request.svg', link: '/ticket-request' },
    { name: 'Calendar', description: 'View and manage your schedule, appointments, and events. Create and edit events, set reminders, and synchronize with your favorite calendar applications.', logo: '/icons/calendar.svg', link: '/calendar' },
    { name: 'FAQ', description: 'Explore frequently asked questions and find answers to common queries about our products, services, and policies. Get quick and helpful information without contacting support.', logo: '/icons/faq.svg', link: '/faq' },
    { name: 'Documents', description: 'Access important documents and files, such as user manuals, guidelines, policies, and other relevant resources. Download, upload, and share files securely.', logo: '/icons/documents.svg', link: '/documents' },
    { name: 'Ticket Status', description: 'Check the status of your submitted tickets and get real-time updates on the progress and resolution of your requests. View assigned agents, response times, and resolution details.', logo: '/icons/ticket-status.svg', link: '/ticket-status' },
    { name: 'People', description: 'Manage user profiles and contacts. Add, edit, and remove user accounts. Organize contacts and maintain an up-to-date directory of users.', logo: '/icons/people.svg', link: '/people' },
    { name: 'Tasks', description: 'Manage your tasks and to-do lists. Create tasks, set due dates, assign priorities, and track their progress. Stay organized and ensure timely completion of your tasks.', logo: '/icons/tasks.svg', link: '/tasks' },
    { name: 'Analytics', description: 'Track and analyze data and metrics to gain valuable insights into user behavior, performance, and business trends. Generate reports and visualize data for better decision-making.', logo: '/icons/analytics.svg', link: '/analytics' },
    { name: 'Notifications', description: 'Manage your notification preferences and stay informed about important updates, announcements, and events. Customize the types of notifications you receive and how you receive them.', logo: '/icons/notifications.svg', link: '/notifications' },
    { name: 'Messaging', description: 'Communicate and collaborate with other users through our messaging platform. Send messages, share files, and stay connected with your colleagues and teammates.', logo: '/icons/messaging.svg', link: '/messaging' },
    { name: 'Admin', description: 'Access administrative functions and perform tasks related to system management, user roles, and configuration settings. Configure system settings, manage user permissions, and maintain system security.', logo: '/icons/admin.svg', link: '/admin' }
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
