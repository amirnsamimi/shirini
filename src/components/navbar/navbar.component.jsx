import { Phone } from "@mui/icons-material";
import { PrimaryButton } from "../globals/buttons";
import { primaryRed } from "../../style/colors";

const Navbar = () => {

    return <div className="grid grid-cols-12 "> 
    <div className="col-span-5 flex gap-2">
    <PrimaryButton text="Menu" />
    <PrimaryButton text={<Phone fontSize="small"  />}/>
    </div>
    <div className="col-span-2">
        <img src="/assets/logo/logo.svg" alt="Tim horton" />
    </div>
    <div className="col-span-5 flex justify-end gap-2">
    <PrimaryButton text="Login" />
    <PrimaryButton text="Sign Up" border={`1px solid ${primaryRed}`} bgColor={`${primaryRed}`} color="white" />
    </div>
    </div>



}

export default Navbar;