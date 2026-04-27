import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Stats from "../pages/stats/Stats";
import Timeline from "../pages/timeline/Timeline";
import FriendDetails from "../pages/friendDetails/FriendDetails";

const getFriends = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const friendsPromise = getFriends();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
      {
        path: "/friends/:id",
        element: (
          <FriendDetails friendsPromise={friendsPromise}></FriendDetails>
        ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
