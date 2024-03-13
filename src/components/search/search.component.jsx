import { SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";

const Search = () => {
  const [data, setData] = useState([
    "lorem",
    "ipsum",
    "zaman",
    "sajjad",
    "mohammad",
    "arash",
    "yousefi",
    "gholamhosseini",
    "safari.eng",
    "amir",
    "samimi",
    "981379",
    "sugui",
    "namae",
    "eidteoon-mobarak",
  ]);

  const [filteredData,setFilteredData] = useState([]);
console.log(filteredData.length)
  const handlechange = (e) => {
      setFilteredData(data.filter(f => f.toLowerCase().includes(e.target.value)))
  }

  return<><div className={"p-10 flex items-center gap-2"} >
  <div style={{padding:"3px"}} className="border border-solid border-black rounded-full padding:"><SearchOutlined /></div>
    <input style={{border:"1px solid black",borderRadius:"15px",width:"100%",padding:"5px 20px"}} placeholder="search here" name="search" onChange={handlechange} />
    </div>
    <div className="grid grid-cols-3 gap-4 ">
    {filteredData.length < 1 ? <div className="col-span-3 flex justify-center">Nothing Found</div> : filteredData.map(i=><div className="col-span-1" style={{minWidth:"100px",minHeight:"100px",backgroundColor:"white",border:"2px solid black",boxShadow:"10px 10px 5px black"}}> {i}</div>)}
  </div>
  </>
};

export default Search;
