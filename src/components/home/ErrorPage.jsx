import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
       <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} >
            <Typography> OOPS! Landed on wrong page.......</Typography>
            <Link to="/"><Button variant="contained">Take me to Home</Button></Link>
       </Box>
    )
}