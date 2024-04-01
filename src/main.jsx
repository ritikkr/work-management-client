import ReactDOM from "react-dom/client";

import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Home from "./components/home";
import ErrorPage from "./components/home/ErrorPage";
import NavBar from "./components/home/NavBar";
import Hero from "./components/home/Hero";
import Login from "./components/home/Login";
import Register from "./components/home/Register";
import Dashboard from "./components/dashboard";
import Board from "./components/dashboard/Board";
import Story from "./components/dashboard/Board/Story";

import { Provider } from "react-redux";
import { store } from "./components/store/store";
import { boards } from "./components/utils/mockData";
import { DragDropContext } from "react-beautiful-dnd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Board />,
      },
      { path: "boards", element: <Board /> },
      {
        path: "boards/:boardId",
        element: <Story />,
      },
    ],
  },
]);

if (localStorage.getItem("boards") === null) {
  console.log("got null");
  localStorage.setItem("boards", JSON.stringify(boards));
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

      <RouterProvider router={router}></RouterProvider>
  </Provider>
);
