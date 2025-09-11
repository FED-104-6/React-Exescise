import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function TextFieldsExample() {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        margin: '20px auto',
      }}
    >
    
    <TextField
        label="Name"
        variant="outlined"  
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
            backgroundColor: "#999",
            borderRadius: 5 
        }}
    />

      
    <TextField
        label="Address"
        type="text"
        variant="standard"
        value={address}             
        onChange={(e) => setAddress(e.target.value)}
        style={{
            color: "#4da6ff",
            borderbotton: "#4da6ff"  
        }}
    />
    </Box>
  );
}
