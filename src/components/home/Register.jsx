import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import CoWorkerImg from "../../assets/product.svg"
import { Link } from "react-router-dom"


const Register = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 10}}>
        <Box sx={{width: '50%'}}>
        <img src={CoWorkerImg} alt="task image" style={{height: '400px', width: '400px'}} />  
        <Typography variant="h4">We Will Keep it Simple ! 🚀</Typography>
        
        </Box>
        <Box sx={{ p: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h4" sx={{mb: 2}}>Register</Typography>
            <Stack direction={"row"} spacing={2}>
            <TextField placeholder="First Name"/>
            <TextField placeholder="Last Name"/>
            </Stack>
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"} sx={{width: '100%'}}>
            <TextField placeholder="Email" fullWidth/>
            </Stack>
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"} sx={{width: '100%'}}>
            <TextField placeholder="Password" fullWidth/>
            </Stack>
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"} sx={{width: '100%'}}>
            <Button variant="contained" fullWidth>Register</Button>
            </Stack>
            <Stack direction={"row"} spacing={2} pt={2} justifyContent={"flex-start"}>
            <Link to="/login">Already have an account! Register </Link>
            </Stack>
              
        </Box>
        
        
    </Box>
  )
}

export default Register
