import { Outlet } from "react-router";

const { default: Navbar } = require("../components/navbar/navbar.component")

const Root = () => {

return <div className="p-4">
    <Navbar />
    <div>
   <Outlet />
    </div>
</div>


}
export default Root;