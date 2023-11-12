import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StepperCustomIcon = ({ active, completed, icon, }) => {
  return (
    <div style={{backgroundColor: "gray", margin: "3px", borderRadius: "50%", width: "8px", height: "8px", padding: "5px", justifyContent: "center", alignItems: "center",}}>
      <div style={{
        backgroundColor: active || completed ? "white" : "black",
        color: "white",
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
      }}>
      </div>
    </div>
    
  );
};

const steps = [
  {
    label: 'Faculty Details',
  },
  {
    label: 'Personal Info',
  },
  {
    label: 'Contacts Details',
  },
  {
    label: 'Summary',
  },
  {
    label: 'Education',
  },
  {
    label: 'Work Experience',
  },
  {
    label: 'Projects',
  },

];

export default function CustomVerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper 
        activeStep={activeStep} 
        orientation="vertical"
        >
        {steps.map((step, index) => (
          <Step key={step.label} style={{color: "black"}}>
            <StepLabel
              optional={
                index === (steps.length - 1) ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              StepIconComponent={StepperCustomIcon}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    
  );
}
