import React from 'react'
import { Box, Divider, IconButton, Menu, MenuItem, Paper, Stack, Typography } from "@mui/material";
import { ControlPointDuplicate, Delete, Edit, MoreVert } from "@mui/icons-material";
import StoryCard from "./StoryCard";

const NewStoryList = ({title, stories}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Paper
    elevation={3}
    sx={{ width: 300, height: 500, background: '#efefef', p:1,  position:'relative' }}
  >
    <Box sx={{mb: 2}}>
      <Typography variant="h5" textAlign={"center"}>
        {title.toUpperCase()}
      </Typography>
      <Divider />
    </Box>
    
    <Box>
      {stories.map((item) => (
       <StoryCard item={item} key={item.id}/>
       
      ))}
    </Box>
    <IconButton
      id="demo-positioned-button"
      aria-controls={open ? "demo-positioned-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
      sx={{ position: "absolute", top: 3, right: 10 }}
    >
      <MoreVert />
    </IconButton>
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={handleClose}>
        <Stack direction={"row"} spacing={1}>
          <Edit fontSize="small" sx={{ color: "blue" }} />
          <Typography fontWeight={"bold"}>Edit</Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        {" "}
        <Stack direction={"row"} spacing={2}>
          <ControlPointDuplicate fontSize="small" sx={{ color: "green" }} />
          <Typography fontWeight={"bold"}>Duplicate</Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        {" "}
        <Stack direction={"row"} spacing={2}>
          <Delete fontSize="small" sx={{ color: "red" }} />
          <Typography fontWeight={"bold"}>Delete</Typography>
        </Stack>
      </MenuItem>
    </Menu>
  </Paper>
  )
}

export default NewStoryList
