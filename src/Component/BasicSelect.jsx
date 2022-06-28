import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    
  };
 

  return (
    <> 
       <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth style={{backgroundColor : "lightgoldenrodyellow"}}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> 
     
      </FormControl>
    </Box>

<Button variant="contained" color="success" style={{marginTop : "20%" , marginRight : "20px"}}>
  Submit
</Button>

<Button variant="outlined" color="secondary" style={{marginTop : "20%"}}>
  Button 1
</Button>
    
     </>

  );
  
}
