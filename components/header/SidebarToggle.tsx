import React from 'react';
import { Button } from '@mui/material';
import { FaCaretRight } from 'react-icons/fa'; // Import FaCaretRight icon

interface SidebarToggleProps {
  toggleSidebar: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ toggleSidebar }) => {
  return (
    <Button onClick={toggleSidebar} startIcon={<FaCaretRight />}>Dashboard</Button>
  );
};

export default SidebarToggle;
