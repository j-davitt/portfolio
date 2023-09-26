import { Box } from '@mui/material';
import photo from '../../assets/AboutPic.jpg';


const About = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        <h3>Marine Corps Veteran</h3>
        <h4>2010-2014</h4>
        <p>Served with 3d Combat Engineer Battalion in support of OEF with 2 combat deployments.</p>
        <h3>Foreman</h3>
        <h4>2014-2022</h4>
        <p>Ran excavation and landscaping crews for Four Seasons Excavating.</p>
        <h3>Contact Me</h3>
        <Box sx={{
          width: 500,
          backgroundColor: '#947769'
        }}>
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Box>
      </div>
    </>
  )
}

export default About;