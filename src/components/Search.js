// import { useState } from "react";
// import Body from "./Body";
// const Search = () => {
//     //local state variable
//     const [SearchText, setSearchText] = useState("");
//     return (
//         <div className="searchbox">
//             <input type="text" id="searchbox" 
//                 placeholder="Enter your Search" value={SearchText} 
//                 onChange={(e) => { setSearchText(e.target.value) }} 
//             />
//             <button id="searchbtn">
//                 <img id="searchlogo" src={searchlogo} 
//                     onClick={() => {
//                     //filtering the rescards
//                     console.log({SearchText});
//                     const searchFilter = ListOfRes.filter(
//                         (res) => res.data.name.includes(SearchText)
//                     );
//                 }}/>
//             </button>
//         </div>
//     );
// }
// export default Search;