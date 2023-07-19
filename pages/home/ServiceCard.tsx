import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Collapse, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

interface Service {
  name: string;
  description: string;
  logo: string;
  link: string;
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
      <CardHeader
        avatar={
          <Avatar>
            <object data={service.logo} type="image/svg+xml" width="24" height="24" />
          </Avatar>
        }
        action={
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)', // or any color of your choice
              },
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={service.name}
      />
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
