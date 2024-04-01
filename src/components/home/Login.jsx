import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material"
import CoWorkerImg from "../../assets/coworker.svg"
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 10}}>
        <Box sx={{width: '50%'}}>
        <img src={CoWorkerImg} alt="task image" style={{height: '400px', width: '400px'}} />  
        <Typography variant="h4">We Will Keep it Secure ! 🚀</Typography>
        
        </Box>
        {/* <Paper> */}
        <Box sx={{ p: 1, alignItems: 'center', justifyContent: 'center', width: 500,  display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h4" sx={{mb: 2}}>Login</Typography>
           
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"} sx={{width: '100%'}}>
            <TextField placeholder="Email" fullWidth/>
            </Stack>
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"} sx={{width: '100%'}}>
            <TextField placeholder="Password" fullWidth/>
            </Stack>
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"} sx={{width: '100%'}}>
            <Button variant="contained" fullWidth>Login</Button>
            </Stack>
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"}>
            <Link to="/register" >Don't have an account! Register </Link>
            </Stack>
        </Box>
        {/* </Paper> */}
        
    </Box>
  )
}

export default Login
