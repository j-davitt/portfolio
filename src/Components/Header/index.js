// import { Header } from "@mantine/core";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/'>
            <Button variant="contained">Home</Button>
          </Link>
          <Link to='/about'>
            <Button variant="contained">About Me</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>



  )
}

export default HeaderComponent;