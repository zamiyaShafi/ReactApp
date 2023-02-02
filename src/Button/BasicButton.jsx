import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    // brfore adding button you need to start with stack tag ...here by default direction would be column
    <Stack spacing={2} direction="row">
        {/* 3 varients of button */}
        
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      {/* disabling the button */}
      <Button variant="contained" disabled>
        Disabled
      </Button>
      {/* disabling the elevation button */}
      <Button variant="contained" disableElevation>
      Disable elevation
    </Button>
    {/* adding custom color */}
    <Button sx={{backgroundColor:"blue"}}>Secondary</Button>
    {/* adding buit in color */}
    <Button color="secondary">Secondary</Button>
    
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button>
{/* button size adding*/}
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
      
    </Stack>
  );
}