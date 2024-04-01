import { Delete, Edit } from "@mui/icons-material";
import {
  ClickAwayListener,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStory, editStory } from "../../features/BoardSlice";
import { Draggable } from "react-beautiful-dnd";

export default function StoryCard({ index, item, title, boardId }) {
  const [isEdit, setIsEdit] = useState(false);
  const [storyTitle, setStoryTitle] = useState(item.title);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    dispatch(deleteStory({ id: boardId, title: title, storyId: item.id }));
  };

  const handleEditClickAway = () => {
    setIsEdit(false)
    dispatch(editStory({ id: boardId, title: title, storyId: item.id, newStoryTitle: storyTitle }));
    
  }

  return (
    <Draggable draggableId={item.id} index={index} >
      {(provided) => (
 <Paper
 key={item.id}
 sx={{
   mb: 1,
   minHeight: 50,
   border: "1px solid black",
   textAlign: "center",
   position: "relative",
 }}
 onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
 onMouseLeave={() => setIsHovered(false)}
 ref={provided.innerRef}
 {...provided.draggableProps}
 {...provided.dragHandleProps}

>
 {!isEdit && <Typography>{storyTitle}</Typography>}
 {isEdit && (
   <ClickAwayListener onClickAway={handleEditClickAway}>
     <TextField
       value={storyTitle}
       fullWidth
       onChange={(e) => setStoryTitle(e.target.value)}
     />
   </ClickAwayListener>
 )}
 {isHovered && ( // Conditionally render buttons only when hovered
   <>
     <IconButton
       sx={{ position: "absolute", top: -5, right: 20 }}
       onClick={handleEdit}
     >
       <Edit sx={{ color: "blue", fontSize: "18px" }} />
     </IconButton>
     <IconButton
       sx={{ position: "absolute", top: -5, right: 0 }}
       onClick={handleDelete}
     >
       <Delete sx={{ color: "red", fontSize: "18px" }} />
     </IconButton>
   </>
 )}
</Paper>
      )}
    </Draggable>
   
  );
}
