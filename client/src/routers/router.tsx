import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import PostList from "../pages/admin/PostList";
import UserList from "../pages/admin/UserList";
import Profile from "../pages/Profile";
import UserPostList from "../pages/users/PostList";
import AuthMiddleware from "./middleware/AuthMiddleware";

const router = createBrowserRouter([
  {
    path: "profile",
    element: <AuthMiddleware roles={["ADMIN", "USER"]} />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
  {
    path: "admin",
    element: <AuthMiddleware roles={["ADMIN"]} />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "posts",
        element: <PostList />,
      },
      {
        path: "users",
        element: <UserList />,
      },
    ],
  },
  {
    path: "user",
    element: <AuthMiddleware roles={["USER"]} />,
    children: [
      {
        path: "posts",
        element: <UserPostList />,
      },
    ],
  },
]);

export default router;
