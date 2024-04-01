import { createSlice, current, nanoid } from "@reduxjs/toolkit";
import { boards } from "../utils/mockData";

const getInitialState = () => {
  console.log("Fetching values", JSON.parse(localStorage.getItem("boards")));
  return JSON.parse(localStorage.getItem("boards"));
};

const initialState = getInitialState();

export const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const newBoard = {
        id: nanoid(),
        title: action.payload.title,
        created: new Date().toLocaleDateString(),
        stories: {
          start: [],
          inprogress: [],
          completed: [],
        },
      };
      state.push(newBoard);
      localStorage.setItem("boards", JSON.stringify(state));
    },
    deleteBoard: (state, action) => {
      console.log(current(state));

      const newState = state.filter((board) => board.id !== action.payload.id);
      localStorage.setItem("boards", JSON.stringify(newState));

      return newState;
    },
    duplicateBoard: (state, action) => {
      // console.log(JSON.parse(JSON.stringify(state)));
      const allBoards = JSON.parse(JSON.stringify(state));
      const newBoard = allBoards.filter(
        (board) => board.id === action.payload.id
      )[0];
      newBoard.id = Math.floor(Math.random() * 1000);
      state.push(newBoard);
      localStorage.setItem("boards", JSON.stringify(state));
    },
    modifyBoard: (state, action) => {
      const board = state.filter((board) => board.id === action.payload.id)[0];
      board.title = action.payload.title;
      localStorage.setItem("boards", JSON.stringify(state));
    },

    addList: (state, action) => {
      const board = state.filter((board) => board.id === action.payload.id)[0];
      const title = action.payload.title + nanoid().slice(0, 3);
      board.stories = { ...board.stories, [title]: [] };
      localStorage.setItem("boards", JSON.stringify(state));
    },

    deleteList: (state, action) => {
      const board = state.filter((board) => board.id === action.payload.id)[0];
      delete board.stories[action.payload.title];

      localStorage.setItem("boards", JSON.stringify(state));
    },

    modifyList: (state, action) => {
      console.log("thansk for edit", action.payload);
      const {id, oldTitle, newTitle} = action.payload;
      console.log(id, oldTitle, newTitle);
      if(oldTitle === newTitle)return;
      const board = state.filter((board) => board.id === action.payload.id)[0];
      console.log(current(board.stories));
     
      const newStories = {};

      for (const key in board.stories) {
        if (key === oldTitle) {
          newStories[newTitle] = board.stories[key];
        } else {
          newStories[key] = board.stories[key];
        }
      }
        console.log(newStories);
      
      board.stories = newStories

     console.log(current(state));
      localStorage.setItem("boards", JSON.stringify(state));
    },

    duplicateList: (state, action) => {
      console.log(action.payload);
      const board = state.filter((board) => board.id === action.payload.id)[0];
      const title = action.payload.title + nanoid().slice(0, 3);
      console.log(board.stories[action.payload.title]);
      board.stories = {
        ...board.stories,
        [title]: board.stories[action.payload.title],
      };

      localStorage.setItem("boards", JSON.stringify(state));
    },

    addStory: (state, action) => {
      const board = state.filter((board) => board.id === action.payload.id)[0];
      const title = action.payload.title;
      const newStory = {
        id: nanoid(),
        title: "New Story",
        created: new Date().toLocaleTimeString(),
      };
      board.stories[title].push(newStory);
      localStorage.setItem("boards", JSON.stringify(state));
    },

    deleteStory: (state, action) => {
      console.log("action", action.payload);
      const board = state.filter((board) => board.id === action.payload.id)[0];
      const title = action.payload.title;
      const newBoard = current(board).stories[title].filter((story) => {
        return story.id !== action.payload.storyId;
      });

      board.stories[title] = newBoard;
      localStorage.setItem("boards", JSON.stringify(state));
    },
    editStory: (state, action) => {
      const board = state.filter((board) => board.id === action.payload.id)[0];
      const title = action.payload.title;
      const story = board.stories[title].filter((story) => {
        return story.id === action.payload.storyId;
      })[0];

      story.title = action.payload.newStoryTitle;

      const exlcudeStory = board.stories[title].filter((story) => {
        return story.id !== action.payload.storyId;
      });

      exlcudeStory.push(story);
      board.stories[title] = exlcudeStory;

      localStorage.setItem("boards", JSON.stringify(state));
    },

    moveStory: (state, action) => {

        const {sourceStoryTitle, destinationStoryTitle, sourceIndex, destinationIndex, boardId} = action.payload;
        console.log(sourceStoryTitle, destinationStoryTitle, sourceIndex, destinationIndex, boardId); 
        const board = state.filter((board) => board.id === boardId)[0]
        console.log(current(board));
        const sourceStories = board.stories[sourceStoryTitle]
        const destinationStories = board.stories[destinationStoryTitle]
        console.log(current(sourceStories));
        console.log(current(destinationStories));
        destinationStories.splice(destinationIndex, 0, sourceStories[sourceIndex] )
        sourceStories.splice(sourceIndex, 1)

        localStorage.setItem("boards", JSON.stringify(state));

    
    }
  },
});

export const {
  addBoard,
  deleteBoard,
  modifyBoard,
  duplicateBoard,
  addList,
  deleteList,
  duplicateList,
  modifyList,
  addStory,
  deleteStory,
  editStory,
  moveStory
} = BoardSlice.actions;
export default BoardSlice.reducer;
