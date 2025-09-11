import * as React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SliderExample() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300, margin: '20px auto' }}>
      <Typography variant="h6" gutterBottom>
        Volume: {value}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        aria-label="Volume"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </Box>
  );
}
