import React, { useState } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, Typography, CardMedia, Collapse, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Service {
  name: string;
  description: string;
  logo: string;
  link: string;
  type: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOnClick = () => {
    router.push(service.link);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <object data={service.logo} type="image/svg+xml" height="140" style={{ width: '100%' }} />
      <IconButton
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        sx={{ position: 'absolute', right: 0, top: 0 }}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{service.description}</Typography>
        </CardContent>
      </Collapse>
      <Box sx={{ p: 1 }}>
        <Button variant="contained" color="primary" fullWidth onClick={handleOnClick}>
          Go to {service.name}
        </Button>
      </Box>
    </Card>
  );
}

export default ServiceCard;
