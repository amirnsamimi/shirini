import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const SPComponent = ({text,direction = "rtl",imageSource}) => {



return <>
<Grid2 xs={12} container sx={{height:"100%",flexDirection: direction == "rtl" ? "row" : "row-reverse"}}>
<Grid2 xs={3} container sx={{writingMode:"vertical-rl", transform:"rotate(180deg)",alignItems:direction === "rtl" ? "flex-end" : "flex-start",fontSize:"3rem",textWrap:"wrap",overflow:"clip"}}>
{text}
</Grid2>
<Grid2 xs={6} container  className="relative">
    <Grid2 xs={12} container justifyContent="center" alignItems={"center"} className={`relative ${direction === "rtl" ? "bg-yellow-500" : "bg-blue-500"} `} >
        <img src={imageSource} width={"75%"} />
    </Grid2>
</Grid2>
<Grid2 xs={3} container alignItems="center" className={`relative ${direction === "rtl" ? "right-20" : "left-20"} ` } >
    <Grid2 xs={12} p={4} container alignContent={"space-between"} className="bg-white" sx={{border:`3px solid black`, height:"75%",boxShadow:"10px 10px 5px black"}}>
    <div className="flex font-bold ">
    Lorem ipsum dolor sit amet consectetur.
    </div>

    <div className="flex">
    {
        "Lorem ipsum dolor sit amet consectetur. Fringilla nec aliquam tortor tortor amet. Quis proin sit sapien sit lacus. Pellentesque nulla pharetra enim orci donec tortor. Cursus consectetur at eget id mi a. Volutpat suscipit adipiscing ipsum lacus risus amet. Fermentum sit proin praesent cras.".slice(0,100)
    }
    </div>
    <div className="flex justify-end">
    <button className={`${direction === "rtl" ? "bg-yellow-500" : "bg-blue-500"} p-2 rounded`}> 
    Discover More
    </button>
    </div>
    </Grid2>
</Grid2>
</Grid2>

</>


}

export default SPComponent;