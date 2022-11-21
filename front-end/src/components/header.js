import {Box, Typography, Divider, List, ListItem, Toolbar, AppBar,IconButton, ListItemButton, ListItemText, Button} from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Header(props) {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" sx={{backgroundColor: '#0b421a'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="start"
            sx={{ mr: 2}}
          >
            
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'block' } }}
          >
            Hello BeyondMD!
          </Typography>
          <Box sx={{ display: { xs: 'flex', sm: 'block' } }}>
            
              <Button sx={{ color: '#fff' }} href="https://github.com/Luis-Ramirez21x/BeyondMD-2">
                GitHub
                <GitHubIcon/>
              </Button>
              <Button sx={{ color: '#fff' }} href="https://www.linkedin.com/in/luis-ramirez-web-devloper/">
                LinkedIn
                <LinkedInIcon/>
              </Button>
          
          </Box>
        </Toolbar>
      </AppBar>
 

    </Box>
  );
}


