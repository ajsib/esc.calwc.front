import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const services = [
  {
    name: 'Profile',
    description: 'Manage your profile information, including personal details, contact information, and preferences. Update your profile picture, update your bio, and customize your account settings.',
    icon: '/icons/profile.svg',
    path: '/services/profile',
    frenchname: 'Profil',
  },
  {
    name: 'Ticket Request',
    description: 'Submit a request for assistance or support from our team. Provide detailed information about your issue, attach relevant files, and track the progress of your ticket.',
    icon: '/icons/ticket-request.svg',
    path: '/services/ticket-request',
    frenchname: 'Demande de ticket',
  },
  {
    name: 'Calendar',
    description: 'View and manage your schedule, appointments, and events. Create and edit events, set reminders, and synchronize with your favorite calendar applications.',
    icon: '/icons/calendar.svg',
    path: '/services/calendar',
    frenchname: 'Calendrier',
  },
  {
    name: 'FAQ',
    description: 'Explore frequently asked questions and find answers to common queries about our products, services, and policies. Get quick and helpful information without contacting support.',
    icon: '/icons/faq.svg',
    path: '/services/faq',
    frenchname: 'FAQ',
  },
  {
    name: 'Documents',
    description: 'Access important documents and files, such as user manuals, guidelines, policies, and other relevant resources. Download, upload, and share files securely.',
    icon: '/icons/documents.svg',
    path: '/services/documents',
    frenchname: 'Documents',
  },
  {
    name: 'Ticket Status',
    description: 'Check the status of your submitted tickets and get real-time updates on the progress and resolution of your requests. View assigned agents, response times, and resolution details.',
    icon: '/icons/ticket-status.svg',
    path: '/services/ticket-status',
    frenchname: 'État du ticket',
  },
  {
    name: 'People',
    description: 'Manage user profiles and contacts. Add, edit, and remove user accounts. Organize contacts and maintain an up-to-date directory of users.',
    icon: '/icons/people.svg',
    path: '/services/people',
    frenchname: 'Personnes',
  },
  {
    name: 'Tasks',
    description: 'Manage your tasks and to-do lists. Create tasks, set due dates, assign priorities, and track their progress. Stay organized and ensure timely completion of your tasks.',
    icon: '/icons/tasks.svg',
    path: '/services/tasks',
    frenchname: 'Tâches',
  },
  {
    name: 'Analytics',
    description: 'Track and analyze data and metrics to gain valuable insights into user behavior, performance, and business trends. Generate reports and visualize data for better decision-making.',
    icon: '/icons/analytics.svg',
    path: '/services/analytics',
    frenchname: 'Analytiques',
  },
  {
    name: 'Notifications',
    description: 'Manage your notification preferences and stay informed about important updates, announcements, and events. Customize the types of notifications you receive and how you receive them.',
    icon: '/icons/notifications.svg',
    path: '/services/notifications',
    frenchname: 'Notifications',
  },
  {
    name: 'Messaging',
    description: 'Communicate and collaborate with other users through our messaging platform. Send messages, share files, and stay connected with your colleagues and teammates.',
    icon: '/icons/messaging.svg',
    path: '/services/messaging',
    frenchname: 'Messagerie',
  },
  {
    name: 'Admin',
    description: 'Access administrative functions and perform tasks related to system management, user roles, and configuration settings. Configure system settings, manage user permissions, and maintain system security.',
    icon: '/icons/admin.svg',
    path: '/services/admin',
    frenchname: 'Administration',
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Services</h1>
      {services.map((service, index) => (
        <Link href={service.path} key={index} passHref>
          <div>
            {router.locale === 'en' ? service.name : service.frenchname}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Services;
