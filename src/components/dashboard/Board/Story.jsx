import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import StoryList from "./StoryList";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useDispatch, useSelector } from "react-redux";
import NewStoryList from "./NewStoryList";
import { addList, moveStory } from "../../features/BoardSlice";
import { DragDropContext } from "react-beautiful-dnd";

const Story = () => {
  const { boardId } = useParams();
  const [isAddNew, setIsAddNew] = useState(false);

  const dispath = useDispatch();
  const storyData = useSelector((state) => state.board).filter(
    (board) => board.id === boardId
  )[0];

  const handleAddNew = () => {
    dispath(addList({ id: boardId, title: "New List" }));
    const element = document.getElementById("main");
    element.scrollTo({
      top: element.clientHeight / 2,
      left: element.clientWidth / 2,
      behavior: "smooth",
    });
  };

  const handleDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;
    console.log(source, destination);
    if (!destination) return null;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    dispath(
      moveStory({
        sourceStoryTitle: source.droppableId,
        destinationStoryTitle: destination.droppableId,
        sourceIndex: source.index,
        destinationIndex: destination.index,
        boardId: boardId
        
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box id="main">
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h5" fontWeight={"bold"}>
            {storyData.title}
          </Typography>
          <Button variant="contained" onClick={handleAddNew}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Typography>Add New</Typography>
              <ControlPointIcon />
            </Stack>
          </Button>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
        >
          {console.log("Obj St", storyData.stories)}
          {Object.entries(storyData.stories).map((obj, index) => (
            <StoryList
              key={obj[0]}
              title={obj[0]}
              stories={obj[1]}
              boardId={boardId}
            />
          ))}
        </Box>
      </Box>
    </DragDropContext>
  );
};

export default Story;
