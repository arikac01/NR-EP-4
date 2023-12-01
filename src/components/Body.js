import Rescards from "./Rescards";
import { useEffect, useState } from "react";
//import Search from "./Search";
import Shimmer from "./Shimmer";
import searchlogo from "/Assets/search.png"

const Body = () => {
    //local state variable
    const [ListOfRes, setListOfRes] = useState([]);

    const [FilteredList, setFilteredList] = useState([]);

    const [SearchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // //conditional Rendering
    // if (ListOfRes.length === 0) {
    //     return <Shimmer/>;
    // }



    return ListOfRes.length === 0 ? (
        <Shimmer />) : (
        <div className="body">
            <div className="bodyHeader">
                <div className="searchbox">
                    <input type="text" id="searchbox"
                        placeholder="Enter your Search" value={SearchText}
                        onChange={(e) => { setSearchText(e.target.value); }}
                    />
                    <button id="searchbtn"
                        onClick={() => {
                            //filtering the rescards
                            console.log(SearchText);
                            const searchFilter = ListOfRes.filter(
                                (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                            );
                            setFilteredList(searchFilter);
                        }}
                    >
                        <img id="searchlogo" src={searchlogo} />
                    </button>
                </div>
                <button className="filter" onClick={() => {
                    const filteredList = ListOfRes.filter((res) => res.info.avgRating > 4);
                    setFilteredList(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    FilteredList.map((restaurant) => (<Rescards key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
        </div>

    )
}
export default Body; 