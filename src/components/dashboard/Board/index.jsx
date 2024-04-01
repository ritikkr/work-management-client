import { Box, Button, Stack, Typography } from "@mui/material"
import BoardCard from "./BoardCard"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AddBoardCard from "./AddBoardCard";
import { getAllBoards } from "../../hooks/getBoardData";
import { useSelector } from "react-redux";



const Board = () => {
  const boards = useSelector((state) => state.board)
  const [showTempCard, setShowTempCard] = useState(false);

  const handleNewBtnClick = () => {
      setShowTempCard(true);
  }

  return (
    <Box>
         <Box sx={{ display: "flex", justifyContent: "space-between", mb:2,  }}>
        <Typography variant="h5" fontWeight={"bold"}>
          All Boards
        </Typography>
        <Button variant="contained"  onClick={handleNewBtnClick}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                
                <Typography>Add New</Typography>
                <ControlPointIcon />
                
            </Stack>
        </Button>
      </Box>
      <Box sx={{display: 'flex', gap:5, flexWrap: 'wrap'}}>
      {boards?.map((item) => (
        <Box  key={item.id} >
        <BoardCard item={item}/>
        </Box>
      ))}
      {showTempCard && <AddBoardCard setShowTempCard={setShowTempCard}/>}
      </Box>
      
        
    </Box>
  )
}

export default Board
