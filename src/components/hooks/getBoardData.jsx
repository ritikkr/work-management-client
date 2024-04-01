import { boards } from "../utils/mockData";

export function getAllBoards() {
  const boards = JSON.parse(localStorage.getItem("boards"));
  return boards;
}

export function getStories(boardId) {
  const boards = getAllBoards();
  return boards.filter((board) => board.id === Number(boardId))[0];
}

export function saveAllBoards() {
    console.log(localStorage.getItem("boards") );
    if(localStorage.getItem("boards") === null){
        localStorage.setItem("boards", JSON.stringify(boards));
    }
  
}

export function addNewBoard(title){
    console.log(title);
  const boards = getAllBoards();
  const newBoard =  {
    id: Math.floor( Math.random() * 100),
    title: title,
    created: new Date().toLocaleDateString(),
    stories: {
      start: [],
      inprogress: [],
      completed: [],
    },
  }
  boards.push(newBoard);
  localStorage.setItem("boards", JSON.stringify(boards));
  

}