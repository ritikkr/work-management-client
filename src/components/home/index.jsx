import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Home(){
    return (
        <Box>
            <NavBar />
            <Box>
               <Outlet />
            </Box>
        </Box>
    )
}