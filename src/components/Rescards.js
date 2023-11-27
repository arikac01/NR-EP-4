import {RES_LOGO_URL} from "../utils/constants";

const Rescards = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;
    return (
        <div className="rescards">
            <img className="res-logo" src={RES_LOGO_URL + cloudinaryImageId} alt="restaurant logo" />
            <h3 className="res-name" >{name}</h3>
            <h5 className="res-details">{cuisines.join(", ")}</h5>
            <h5 className="res-details">{avgRating} stars</h5><h5 className="res-details">{resData.info.sla.deliveryTime} minutes</h5>
            <p className="res-details">{costForTwo}</p>
        </div>
    )
}
export default Rescards;