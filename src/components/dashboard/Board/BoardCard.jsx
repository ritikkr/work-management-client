import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  ClickAwayListener,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import {
  ControlPointDuplicate,
  Delete,
  Edit,
  More,
  MoreVert,
} from "@mui/icons-material";
import { getRandomColor } from "../../utils/RandomColorGenerator";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteBoard,
  duplicateBoard,
  modifyBoard,
} from "../../features/BoardSlice";

export default function BoardCard({ item }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const color = React.useMemo(() => getRandomColor(), []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const [isUserEditing, setIsUserEditing] = React.useState(false);
  const [boardTitle, setBoardTitle] = React.useState(item.title);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const handleCardClick = () => {
    if (!isUserEditing) {
      navigate(`boards/${item.id}`);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsUserEditing(true);
    setAnchorEl(null);
  };
  const handleUserInputClick = () => {
    setIsUserEditing(false);
    dispatch(modifyBoard({id: item.id, title: boardTitle}))
  }

  const handleDuplicate = (e) => {
    e.stopPropagation();
    dispatch(duplicateBoard({ id: item.id }));
    setAnchorEl(null);
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteBoard({ id: item.id }));
    setAnchorEl(null);
  };

  return (
    // <Link to={`boards/${item.id}`}>
    <Box sx={{ minWidth: 275 }} onClick={handleCardClick}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: color, position: "relative", p: 1 }}
      >
        <CardContent>
          {!isUserEditing && (
            <Box>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold" }}
                gutterBottom
              >
                {item.title}
              </Typography>

              <Typography
                sx={{ mb: 1.5, fontWeight: "bold" }}
                color="text.secondary"
              >
                {new Date(item.created).toLocaleDateString()}
              </Typography>
            </Box>
          )}
          {isUserEditing && (
            <ClickAwayListener onClickAway={handleUserInputClick}>
              <Box>
                <TextField
                  value={boardTitle}
                  onChange={(e) => {
                    setBoardTitle(e.target.value);
                  }}
                />
              </Box>
            </ClickAwayListener>
          )}
        </CardContent>
        <IconButton
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ position: "absolute", top: 0, right: 5 }}
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
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
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
      </Card>
    </Box>
    // </Link>
  );
}
