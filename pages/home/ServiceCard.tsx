import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, icon, path }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 140 }}>
        <object data={icon} type="image/svg+xml" height="140" />
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
      <Box sx={{ p: 1 }}>
        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = path}>
          Go to {name}
        </Button>
      </Box>
    </Card>
  );
}

export default ServiceCard;
