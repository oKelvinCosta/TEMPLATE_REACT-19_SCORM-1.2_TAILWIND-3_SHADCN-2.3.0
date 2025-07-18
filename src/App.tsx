import { router } from "@/Routes";
import { RouterProvider } from "react-router-dom";
import { ScormProvider } from "@/contexts/ScormContext";

export default function App() {

  return (
    <ScormProvider>
      <RouterProvider router={router} />
    </ScormProvider>
  );
}
