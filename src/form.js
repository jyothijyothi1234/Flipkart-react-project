// import { Typography } from "@mui/material";
// import React, { useState } from "react";

// export default function Form() {
//   const [state, setState] = useState("");
//   const [data, setData] = useState(0);
//   const[update,setUpdate]=useState("");

  // const remove = () => {
  //   if (state.length>20) {
  //     setState("");
  //   } else if (state === 0) {
  //     setState(state);
  //   }
  // };

//   const textdelete = (e) => {
//     setState(e.target.value);
//   };

//   const deleteData=()=>{
// setState("")

//   }

//   return (
//     <div>
//       <Typography
//         sx={{
//           border: "12px solid black",
//           margin: "200px",
//           bgcolor: "green",
//           color: "red",
//         }}
//       >
//         Total Products{data}
//       </Typography>

//       <input onChange={textdelete} placeholder="enter ur products" />
//       <button onClick={() => setData(data+1)}>Add Product</button>
//       <button onClick={deleteData}> delete </button>
      
//       <Typography sx={{ border: " 2px solid  black", padding: "20px" }}>
//         {state}
//       </Typography>
//       {update}
//     </div>
//   );
// }
