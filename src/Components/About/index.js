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
            borderRadius: '5px',
            backgroundColor: '#A2A685',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 400,
            }}
          >
            <img src={require('../../assets/costume.JPG')} alt="Me" />
          </Box>
          <Box
            sx={{
              width: '80%',
            }}
          >
            <h3>Marine Corps Veteran</h3>
            <h4>2010-2014</h4>
            <p>Served with 3d Combat Engineer Battalion in support of Operation Enduring Freedom with 2 combat deployments.</p>
          </Box>
          <Box
            sx={{
              width: '80%',
            }}
          >
            <h3>Foreman</h3>
            <h4>2014-2022</h4>
            <p>Ran excavation and landscaping crews for Four Seasons Excavating.</p>
          </Box>
        </Box>
        <h3>Contact Me</h3>
        <Box sx={{
          borderRadius: '5px',
          width: 500,
          backgroundColor: '#A2A685'
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
                defaultValue={'WORK IN PROGRESS'}
              />
              <FormLabel>Email</FormLabel>
              <TextField
                onChange={(e) => setFormEmail(e.target.value)}
                className='form-input'
                defaultValue={'WORK IN PROGRESS'}
              />
              <FormLabel>Message</FormLabel>
              <TextField
                onChange={(e) => setFormMessage(e.target.value)}
                className='form-input'
                multiline={true}
                rows={5}
                sx={{
                  width: 400,
                }}
                defaultValue={'WORK IN PROGRESS'}
              />

              <Button type="submit" style={{ color: '#53582C' }} onClick={handleSubmit}>Submit</Button>
            </FormControl>
          )}
        </Box>
      </div>
    </>
  )
}

export default About;