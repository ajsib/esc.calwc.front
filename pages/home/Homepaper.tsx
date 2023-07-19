import React from "react";
import { Grid, Paper } from "@mui/material";
import ServiceCard from './ServiceCard'; // Make sure the path is correct
import { useMediaQuery, useTheme } from '@mui/material';

const HomePaper = () => {
  return (
    <Grid 
      container 
      spacing={2} 
      justifyContent="center" 
      style={{ maxWidth: "85%", margin: "auto" }}
    >
      <Grid item xs={12}>
        <Paper sx={{ padding: '1rem', marginTop: '1rem', marginBottom: '1rem' }} elevation={3}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Profile'
              description='Manage your profile information, including personal details, contact information, and preferences. Update your profile picture, update your bio, and customize your account settings.'
              icon='/icons/profile.svg'
              path='/profile'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Ticket Request'
              description='Submit a request for assistance or support from our team. Provide detailed information about your issue, attach relevant files, and track the progress of your ticket.'
              icon='/icons/ticket-request.svg'
              path='/ticket-request'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Calendar'
              description='View and manage your schedule, appointments, and events. Create and edit events, set reminders, and synchronize with your favorite calendar applications.'
              icon='/icons/calendar.svg'
              path='/calendar'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='FAQ'
              description='Explore frequently asked questions and find answers to common queries about our products, services, and policies. Get quick and helpful information without contacting support.'
              icon='/icons/faq.svg'
              path='/faq'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Documents'
              description='Access important documents and files, such as user manuals, guidelines, policies, and other relevant resources. Download, upload, and share files securely.'
              icon='/icons/documents.svg'
              path='/documents'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Ticket Status'
              description='Check the status of your submitted tickets and get real-time updates on the progress and resolution of your requests. View assigned agents, response times, and resolution details.'
              icon='/icons/ticket-status.svg'
              path='/ticket-status'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='People'
              description='Manage user profiles and contacts. Add, edit, and remove user accounts. Organize contacts and maintain an up-to-date directory of users.'
              icon='/icons/people.svg'
              path='/people'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Tasks'
              description='Manage your tasks and to-do lists. Create tasks, set due dates, assign priorities, and track their progress. Stay organized and ensure timely completion of your tasks.'
              icon='/icons/tasks.svg'
              path='/tasks'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Analytics'
              description='Track and analyze data and metrics to gain valuable insights into user behavior, performance, and business trends. Generate reports and visualize data for better decision-making.'
              icon='/icons/analytics.svg'
              path='/analytics'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Notifications'
              description='Manage your notification preferences and stay informed about important updates, announcements, and events. Customize the types of notifications you receive and how you receive them.'
              icon='/icons/notifications.svg'
              path='/notifications'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Messaging'
              description='Communicate and collaborate with other users through our messaging platform. Send messages, share files, and stay connected with your colleagues and teammates.'
              icon='/icons/messaging.svg'
              path='/messaging'
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              name='Admin'
              description='Access administrative functions and perform tasks related to system management, user roles, and configuration settings. Configure system settings, manage user permissions, and maintain system security.'
              icon='/icons/admin.svg'
              path='/admin'
            />
          </Grid>


          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePaper;
