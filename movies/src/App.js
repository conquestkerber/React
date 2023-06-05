import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import RootLayout from "./layout/RootLayout";
import { GlobalProvider } from "./state/GlobalState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/watched", element: <Watched /> },
      { path: "/watchList", element: <WatchList /> },
      { path: "/add", element: <Add /> },
    ],
  },
]);
function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
