import {Box, Typography, Divider, List, ListItem, Toolbar, AppBar,IconButton, ListItemButton, ListItemText, Button} from "@mui/material"



const navItems = ['Github', 'LinkedIn'];

export default function Header(props) {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
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
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
 

    </Box>
  );
}


