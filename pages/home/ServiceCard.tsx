import React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, Typography, CardMedia } from "@mui/material";
import { useRouter } from "next/router";

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

  const handleOnClick = () => {
    router.push(service.link);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleOnClick}>
        <CardMedia
          component="img"
          height="140"
          image={service.logo}
          alt={service.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ p: 1 }}>
        <Button variant="contained" color="primary" fullWidth onClick={handleOnClick}>
          Learn More
        </Button>
      </Box>
    </Card>
  );
}

export default ServiceCard;
