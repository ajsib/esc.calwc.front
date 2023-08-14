import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Divider,
} from '@mui/material';

import Step1 from './Step1'; // Import the step components
import Step2 from './Step2';
import Step3 from './Step3';

const steps = ['Select Ticket Type', 'Provide Details', 'Review and Submit'];

const TicketRequest = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return 'Unknown step';
    }
  };


  return (
    <>
      {/* Intro */}
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          paddingTop: '1rem',
          borderBottom: '2px solid #ccc', // Add a border
          marginBottom: '1rem', // Add spacing below the intro
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Experimentation Services Request 🔬
        </Typography>
        <Typography variant="h6" component="h2">
          Bridging the Present Army with the Army of the Future
        </Typography>
      </Container>
      {/* Body */}
      <Container maxWidth="lg" sx={{ paddingTop: '1rem' }}>
        <Typography variant="body1" paragraph>
          Experimentation in the army is simpler than you might think. Our expertise lies in designing and conducting experiments that compare the current military landscape to the potential future. 
        </Typography>
        {/* divider 1*/}
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" paragraph>
          <strong>ex⋅peri⋅ment</strong> • Verb
        </Typography>
        <Typography variant="body2" paragraph>
          An action taken to validate or challenge a hypothesis, or to assess the effectiveness or probability of something untested before.
        </Typography>
        
        {/*divider 2*/}
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body1" paragraph>
          In our context, we are passionate about understanding the impact of everything from new <em>technologies</em>, <em>tactics</em>, and <em>procedures</em> to <em>policies</em>. Evaluating the likely outcomes of these elements is crucial to determining whether novel concepts are worth pursuing.
        </Typography>

      {/* Add an explanation and a button */}
        <Typography variant="body1" paragraph>
          If you are interested in learning more about experimentation, click the button below:
        </Typography>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
      </Container>
      {/* Step-by-step Wizard */}
      <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step content */}
        {getStepContent(activeStep)}

        {/* Buttons */}
        <div>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          {activeStep < steps.length - 1 && (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button variant="contained" color="primary">
              Submit
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default TicketRequest;
