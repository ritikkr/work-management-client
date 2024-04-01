import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { addNewBoard, getAllBoards } from '../../hooks/getBoardData'
import { Form } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBoard } from '../../features/BoardSlice'

const AddBoardCard = ({setShowTempCard}) => {

    const [boardTitle, setBoardTitle] = useState('New Board')
    const dispatch = useDispatch();

    const handleSaveBtnClick = () => {
            dispatch(addBoard({title: boardTitle}))
            setShowTempCard(false);

    }
    const handleCancelBtnClick = () => {
        setShowTempCard(false)
    }
  

  return (
    <Box sx={{ minWidth: 275, }}>
    <Card
      variant="outlined"
      sx={{ backgroundColor:'#fff', position: "relative", p: 1, }}
    >
       
      <CardContent>
        <TextField  value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} size='small'/>

      </CardContent> 
      <CardActions>
        <Button variant='contained' onClick={handleSaveBtnClick}>Save</Button>
        <Button onClick={handleCancelBtnClick}>Cancel</Button>

      </CardActions>
    </Card>
  </Box>
  )
}

export default AddBoardCard
