import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import styles from "/index.css";
import logo from "/Assets/applogo.png";
import about from "/Assets/about-filled-svgrepo-com.png";
import home from "/Assets/home-svgrepo-com.png";
import contact from "/Assets/gui-contacts-svgrepo-com.png";
import cart from "/Assets/cart-svgrepo-com.png";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="App Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><img className="navLogo" src={home}/></li>
                    <li><img className="navLogo" src={contact}/></li>
                    <li><img className="navLogo" src={about}/></li>
                    <li><img className="navLogo" src={cart}/></li>
                </ul>
            </div>
        </div>
    )
};

const resList = [{
    "info": {
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "r4ufflqojich0r29efvc",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental"
        ],
        "avgRating": 4.3,
        "feeDetails": {
            "restaurantId": "65797",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "371281",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 04:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "18973",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian"
        ],
        "avgRating": 4.1,
        "feeDetails": {
            "restaurantId": "18973",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4100
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4100
        },
        "parentId": "2120",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 0.6,
            "serviceability": "SERVICEABLE",
            "slaString": "16 mins",
            "lastMileTravelString": "0.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 02:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "10576",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 3.8,
        "feeDetails": {
            "restaurantId": "10576",
            "fees": [
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "721",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 04:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "17313",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Madiwala",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
        ],
        "avgRating": 3.9,
        "feeDetails": {
            "restaurantId": "17313",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4300
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4300
        },
        "parentId": "547",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 02:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-madiwala-btm-layout-bangalore-17313",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "50467",
        "name": "Bakingo",
        "cloudinaryImageId": "wle5xrryznnyrdoxlchz",
        "locality": "1st Block",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Bakery",
            "Desserts",
            "Beverages",
            "Snacks"
        ],
        "avgRating": 4.2,
        "feeDetails": {
            "restaurantId": "50467",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4300
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4300
        },
        "parentId": "3818",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 01:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "23678",
        "name": "McDonald's",
        "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
            "restaurantId": "23678",
            "fees": [
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 03:15:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.2,
        "feeDetails": {
            "restaurantId": "5934",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 05:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "425",
        "name": "Hotel Empire",
        "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹450 for two",
        "cuisines": [
            "North Indian",
            "Kebabs",
            "Biryani"
        ],
        "avgRating": 4.2,
        "feeDetails": {
            "restaurantId": "425",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "475",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 03:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "293023",
        "name": "Istah - The Mediterranean Way",
        "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Mediterranean",
            "Snacks",
            "Biryani",
            "Grill",
            "Kebabs",
            "Arabian",
            "Lebanese",
            "Beverages",
            "Desserts",
            "Italian",
            "Turkish"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "293023",
            "fees": [
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "3518",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 02:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    "description": "OnlyOnSwiggy"
                }
            ],
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "OnlyOnSwiggy",
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ ₹139"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-6th-block-koramangala-bangalore-293023",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "444178",
        "name": "Magnolia Bakery",
        "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
        "locality": "JK Plaza",
        "areaName": "Indiranagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Bakery",
            "Desserts",
            "Ice Cream"
        ],
        "avgRating": 4.6,
        "feeDetails": {
            "restaurantId": "444178",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 7700
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 7700
        },
        "parentId": "267303",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 00:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/magnolia-bakery-jk-plaza-indiranagar-bangalore-444178",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "5167",
        "name": "Theobroma",
        "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
        "locality": "2nd stage",
        "areaName": "Indiranagar",
        "costForTwo": "₹800 for two",
        "cuisines": [
            "Bakery",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.6,
        "feeDetails": {
            "restaurantId": "5167",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 7700
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 7700
        },
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-19 23:55:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/theobroma-2nd-stage-indiranagar-bangalore-5167",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "108424",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
        "locality": "5TH Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
            "restaurantId": "108424",
            "fees": [
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 30,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 00:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "42060",
        "name": "Sharief Bhai",
        "cloudinaryImageId": "mmavnrootu7ypscic1qm",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Arabian",
            "Kebabs",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
            "restaurantId": "42060",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4100
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4100
        },
        "parentId": "5734",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 03:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/sharief-bhai-koramangala-bangalore-42060",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "381853",
        "name": "ITC Master Chef Creations",
        "cloudinaryImageId": "b15a2367ff3d6f0bf92d1def3c1e5c59",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹650 for two",
        "cuisines": [
            "North Indian",
            "Biryani",
            "Indian",
            "Punjabi",
            "Chaat",
            "Kebabs",
            "Tandoor",
            "Mughlai",
            "Desserts",
            "Snacks"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "381853",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4100
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4100
        },
        "parentId": "11992",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-19 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ],
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/itc-master-chef-creations-koramangala-bangalore-381853",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "209557",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "JNC College Road",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
            "restaurantId": "209557",
            "fees": [
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "2",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 01:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-jnc-college-road-koramangala-bangalore-209557",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "390621",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
        "locality": "KODICHIKKANAHALLI",
        "areaName": "Bommanahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
            "restaurantId": "390621",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 7000
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 7000
        },
        "parentId": "2233",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 03:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-kodichikkanahalli-bommanahalli-bangalore-390621",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "27811",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "wbjc2dzgqskcxgfzk4fc",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "feeDetails": {
            "restaurantId": "27811",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "2093",
        "avgRatingString": "4.8",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 13,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "13 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-19 23:55:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/natural-ice-cream-koramangala-bangalore-27811",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "19563",
        "name": "The Bowl Company",
        "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
        "locality": "Jakkasandra",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Pan-Asian",
            "Continental",
            "North Indian",
            "Desserts",
            "American",
            "Asian",
            "Beverages",
            "Biryani",
            "Chinese",
            "European",
            "Grill",
            "Hyderabadi",
            "Indian",
            "Italian",
            "Kebabs",
            "Lucknowi",
            "Mediterranean",
            "Mexican",
            "Mughlai",
            "Oriental",
            "Pastas",
            "Punjabi",
            "Raja"
        ],
        "avgRating": 4.4,
        "feeDetails": {
            "restaurantId": "19563",
            "fees": [
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "4317",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-20 03:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    "description": "OnlyOnSwiggy"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "OnlyOnSwiggy",
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ ₹139"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/the-bowl-company-jakkasandra-koramangala-bangalore-19563",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "52989",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
        "locality": "Jakkasandra",
        "areaName": "Hsr Layout 5th Sector",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
        "feeDetails": {
            "restaurantId": "52989",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 4300
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 4300
        },
        "parentId": "1803",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-19 23:59:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/behrouz-biryani-jakkasandra-hsr-layout-5th-sector-bangalore-52989",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "52954",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Jakkasandra",
        "areaName": "Hsr Layout 5th Sector",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
            "restaurantId": "52954",
            "fees": [
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "BASE_DISTANCE",
                    "fee": 3600
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 3600
        },
        "parentId": "21809",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-19 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-jakkasandra-hsr-layout-5th-sector-bangalore-52954",
        "type": "WEBLINK"
    }
}
]
   
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
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="restaurant logo" />
            <h3 className="res-name" >{name}</h3>
            <h5 className="res-details">{cuisines.join(", ")}</h5>
            <h5 className="res-details">{avgRating} stars</h5><h5 className="res-details">{resData.info.sla.deliveryTime} minutes</h5>
            <p className="res-details">{costForTwo}</p>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div><input className="search" type="search" placeholder="Search"/></div>
            <div className="res-container">
                {
                 resList.map((restaurant) => (<Rescards key={restaurant.info.id} resData={restaurant}/>))   
                }
            </div>
        </div>

    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);