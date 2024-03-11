import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/navbar.component";
import Root from "./layouts/root";
import { RouterProvider } from "react-router";
import { router } from "./router/routing";

function App() {



  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
