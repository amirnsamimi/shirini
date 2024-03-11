import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../layouts/Home/home";

export const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element=<Root /> >
    <Route index element=<Home/> />
</Route>


))