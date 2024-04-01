import { Box, Button, ClickAwayListener, Divider, IconButton, Menu, MenuItem, Paper, Stack, TextField, Typography } from "@mui/material";
import StoryCard from "./StoryCard";
import { ControlPointDuplicate, Delete, Edit, MoreVert } from "@mui/icons-material";
import { getRandomColor } from "../../utils/RandomColorGenerator";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addStory, deleteList, duplicateList, modifyList } from "../../features/BoardSlice";
import { Droppable } from "react-beautiful-dnd";

export default function StoryList({stories, title, boardId}){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isEdit, setIsEdit] = useState(false)
    const [ListTitle, setListTitle] = useState(title)
    const inputRef = useRef(null)

    const open = Boolean(anchorEl);
    const dispatch = useDispatch()


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleDelete = () => {
      dispatch(deleteList({id: boardId, title: title}))
      setAnchorEl(null);

    }

    const handleDuplicate = () => {
      dispatch(duplicateList({id: boardId, title: title}))
      setAnchorEl(null);

    }

    const handleEdit = () => {
        setIsEdit(true)
        handleClose()
      setAnchorEl(null);

    
    }

    const handleListEdit = () => {
      console.log("click away called");
      dispatch(modifyList({id: boardId, newTitle: ListTitle, oldTitle: title}))
      setIsEdit(false)
      setAnchorEl(null);
    }

    const handleAddNewStory = () => {
      dispatch(addStory({id: boardId, title: title}))
    }

    return (
        <Droppable droppableId={ListTitle} >
          {
            (provided, snapshot) => (
<Paper
        elevation={3}
        sx={{ width: 300, height: 500, background: snapshot.isDraggingOver ? "lightblue" : "#efefef", p:1,  position:'relative' }}
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <Box sx={{mb: 2}}>
         {!isEdit && <Typography variant="h5" textAlign={"center"}>
            {ListTitle.toUpperCase()}
          </Typography>}
          {isEdit && <ClickAwayListener onClickAway={handleListEdit} >
              <TextField autoFocus id="input"  value={ListTitle} onChange={(e) => setListTitle(e.target.value)}/>
            </ClickAwayListener>}
          <Divider />
        </Box>
        
        <Box sx={{height: 400, overflowY: 'auto'}}>
          {stories.map((item, index) => (
           <StoryCard index={index} item={item} key={item.id} title={title} boardId={boardId} />
           
          ))}
         {provided.placeholder}
        </Box>
        <Button variant="contained" fullWidth onClick={handleAddNewStory}>Add Story</Button>
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
          <MenuItem onClick={handleEdit}>
            <Stack direction={"row"} spacing={1}>
              <Edit fontSize="small" sx={{ color: "blue" }} />
              <Typography fontWeight={"bold"}>Edit</Typography>
            </Stack>
          </MenuItem>
          <MenuItem onClick={handleDuplicate}>
            {" "}
            <Stack direction={"row"} spacing={2}>
              <ControlPointDuplicate fontSize="small" sx={{ color: "green" }} />
              <Typography fontWeight={"bold"}>Duplicate</Typography>
            </Stack>
          </MenuItem>
          <MenuItem onClick={handleDelete}>
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
        
      </Droppable>
    )
}