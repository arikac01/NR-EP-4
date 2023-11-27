import Rescards from "./Rescards";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    //local state variable
    const [ListOfRes, setListOfRes] = useState(resList);
    return (
        <div className="body">
            <div>
                <button className="filter" onClick={() => {
                    const filteredList = ListOfRes.filter((res)=>res.info.avgRating > 4);
                    setListOfRes(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                 ListOfRes.map((restaurant) => (<Rescards key={restaurant.info.id} resData={restaurant}/>))   
                }
            </div>
        </div>

    )
}
export default Body; 