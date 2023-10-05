// import { Header } from "@mantine/core";
import { AppBar, Box, Button, Toolbar, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

const HeaderComponent = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#70735C' }}>
        <Toolbar>
          <ButtonGroup variant="text" aria-label="text button group">
            <Link to='/'>
              <Button variant="contained" style={{ background: '#53582C', marginRight: '10px' }}>Home</Button>
            </Link>
            <Link to='/about'>
              <Button variant="contained" style={{ background: '#53582C' }}>About Me</Button>
            </Link>
            <Link to='https://github.com/j-davitt' 
            style={{ marginLeft: '10px', marginTop: '5px', textDecoration: 'none', color: '#53582C' }}>
              <GitHubIcon />
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default HeaderComponent;