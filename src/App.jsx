import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Homepage, ReservationPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/reservation",
    element: <ReservationPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
