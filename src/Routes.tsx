import { createHashRouter } from "react-router-dom";
import DefaultLayout from "./pages/_layouts/DefaultLayout";
import DebugScorm from "./pages/DebugScorm";
import ExampleComponents from "./pages/ExampleComponents";
import ExampleHome from "./pages/ExampleHome";



export const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: "/",
        element: <ExampleHome/>,
      },
      {
        path: "/debug-scorm",
        element: <DebugScorm/>,
      },
      {
        path: "/components",
        element: <ExampleComponents/>,
      },
    ],
    
  },
]);
