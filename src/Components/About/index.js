import { Box } from '@mui/material';
import photo from '../../assets/AboutPic.jpg';


const About = () => {
  return (
    <>
      <h1>This is the About Me page!</h1>
      <Box
      sx={{
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
    </>
  )
}

export default About;