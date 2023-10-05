import { Box, TextField, Button, FormControl, FormLabel, Typography } from '@mui/material';
import photo from '../../assets/AboutPic.jpg';
import { useState } from 'react';



const About = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    // Handle form submission here
  };

  return (
    <>
      <div className='aboutme'>
        <Box
          sx={{
            marginTop: 1,
            width: 300,
            height: 400,
          }}
        >
          <img src={require('../../assets/AboutPic.jpg')} alt="Me" />
        </Box>
        <Box
          sx={{
            backgroundColor: '#947769',
          }}
        >
          <h3 style={{ color: '#2C4745' }}>Marine Corps Veteran</h3>
          <h4>2010-2014</h4>
          <p>Served with 3d Combat Engineer Battalion in support of Operation Enduring Freedom with 2 combat deployments.</p>
          <h3>Foreman</h3>
          <h4>2014-2022</h4>
          <p>Ran excavation and landscaping crews for Four Seasons Excavating.</p>
        </Box>
        <h3>Contact Me</h3>
        <Box sx={{
          width: 500,
          backgroundColor: '#947769'
        }}>
          {formSubmitted ? (
            <Box sx={{
              height: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Typography>Thank you!</Typography>
            </Box>
          ) : (
            <FormControl style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={(e) => setFormName(e.target.value)}
                className='form-input'
              />
              <FormLabel>Email</FormLabel>
              <TextField
                onChange={(e) => setFormEmail(e.target.value)}
                className='form-input'
              />
              <FormLabel>Message</FormLabel>
              <TextField
                onChange={(e) => setFormMessage(e.target.value)}
                className='form-input'
              />

              <Button type="submit" style={{ color: '#2C4745' }} onClick={handleSubmit}>Submit</Button>
            </FormControl>
          )}
        </Box>
      </div>
    </>
  )
}

export default About;