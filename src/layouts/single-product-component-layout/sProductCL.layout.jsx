// single product component layout in home page

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SPCText from "../../components/single-product-component/SPCText.component"
import { Box } from "@mui/material";

const SProductCL = () => {

    return <Grid2 xs={12} container sx={{height:"80dvh"}}>
    <Grid2 xs={3} container sx={{writingMode:"vertical-rl", transform:"rotate(180deg)",alignItems:"flex-end", fontSize:"4rem"}}>

    Explore Our 
    Nostalgy Sweets.
   
    </Grid2>
    <Grid2 xs={6} container  className="relative">
        <Grid2 xs={12} container justifyContent="center" alignItems={"center"} className="bg-yellow-500" >
            <img src="/assets/images/cookie.svg" width={"75%"} />
        </Grid2>
    </Grid2>
    <Grid2 xs={3} container alignItems="center" className={"relative right-20" } >
        <Grid2 xs={12}  className="bg-white" sx={{border:`3px solid black`, height:"75%",boxShadow:"10px 10px 5px black"}}>

        </Grid2>
    </Grid2>
    </Grid2>
 

}
export default SProductCL;