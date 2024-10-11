import "./App.css";
import Menu from "./Menu";
import Middle from "./Middle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import End from "./End";

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/component2",
        element: <Middle />,
      },
      {
        path: "component3",
        element: <End/>,
      },
    ],
  },
]);



function App() {
  return <>
  <RouterProvider router={router1}/>
  </>
}
export default App;
