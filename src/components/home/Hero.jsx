import { Box, Button, Typography } from "@mui/material"
import TaskListImg from "../../assets/tasklist.svg"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 10, flexWrap: 'wrap-reverse', gap: 5}}>
        <Box>
        <Typography variant="h4">Have Lot of Work Stress 🤯 ?</Typography>
        <Typography variant="h5"> Looking for Assistant!! 🧑‍🏭</Typography>
        <Typography variant="h6">Here We are 🚀🚀🚀 </Typography>
        <Link to="/dashboard"><Button variant="contained" sx={{mt: 3}}>Take me to Dashboard</Button></Link>
        </Box>
        <Box>
            <img src={TaskListImg} alt="task image" style={{height: '100%', width: '100%',}}/>
        </Box>
        
        
    </Box>
  )
}

export default Hero
