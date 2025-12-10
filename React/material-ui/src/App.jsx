import './App.css'
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// import RationgDemo from './RatingDemo';
import FormDemo from './FormDemo';

import Navbar from './Navbar';

function App() {

  return (
    <>
      <Navbar />
      {/* <Button variant="contained" onClick={() => alert('hi')} >Contained</Button>
      <Button variant="text">Text</Button>
      <Button color='success' variant="outlined">Outlined</Button>
      <Button color='error' variant="contained">Error</Button>
      <Button 
        color='secondary' 
        variant="contained"
        size='small'
      >
        Secondary
      </Button>
      <IconButton aria-label='delete'>
        <DeleteIcon />
      </IconButton> */}
      {/* <RationgDemo /> */}
      <FormDemo />
    </>
  )
}

export default App
