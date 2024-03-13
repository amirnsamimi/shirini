// single product component layout in home page

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SPComponent from "../../components/single-product-component/SPComponent.component"
import { Box } from "@mui/material";

const SProductCL = () => {

    return <Grid2 xs={12} container sx={{height:"60dvh",rowGap:"5rem"}}>
    <SPComponent direction="rtl" text="Explore Our 
Nostalgy Sweets." />
    <SPComponent direction="ltr" text="Explore Our 
Nostalgy Sweets." />
    <SPComponent direction="ltr" text="Explore Our 
Nostalgy Sweets." />
    <SPComponent direction="rtl" text="Explore Our 
Nostalgy Sweets." />

    </Grid2>
 

}
export default SProductCL;