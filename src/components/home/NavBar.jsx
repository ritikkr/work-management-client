import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import NewspaperIcon from '@mui/icons-material/Newspaper';
export default function NavBar(){
    return(
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1}}>

            <Box sx={{ml: 2,}}>
                <Link to="/" >
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Typography>MyWorkManager</Typography>
                    <NewspaperIcon fontSize="large"/>
                    </Stack>
                </Link>
            </Box>
            <Box sx={{mr: 2, gap: '20px', display: 'flex'}} id="navbar">
                <NavLink to="/login" ><Button >Get Started</Button></NavLink>
                <NavLink to="https://github.com/ritikkr"  target="_blank"><Button >Developer</Button></NavLink>
            </Box>
            
        </Box>
    )
}