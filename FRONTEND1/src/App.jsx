import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import User from "./Components/User";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "users-list",
          element: <UserList />,
        },
        {
          path: "user",
          element: <User />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routerObj} />;
}

export default App;


