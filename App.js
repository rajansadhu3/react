import React from "react";
import ReactDOM from "react-dom/client";

/* 
Header 
  - Logo
  - Nav Items
Body 
  - Search 
  - Resturant Container
      - Resturant Cards
Footer
  - Copyright
  - Links
  - Address
  - Contact 
*/
const resObj = {
  info: {
    id: "240796",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e44a6fc6-ceda-4aef-a615-87567f818a95_240796.jpg",
    locality: "Gandhinagar",
    areaName: "Gandhinagar",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas", "garlic"],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "5.7K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 4.8,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "4.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-04-19 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "1.3K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/pizza-hut-gandhinagar-rest240796",
    type: "WEBLINK",
  },
};

const Header = () => {
  return (
    <div className="header flex justify-space-between align-centre">
      <div className="logo">
        <img
          alt="logo"
          width={100}
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
        />
      </div>
      <div className="navItems list-items">
        <ul className="no-list-style flex">
          <li>
            <a className="text-decor-none" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              About Us
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              Our Profile
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              Our Services
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              Cartss
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <span className="copyright">© 2025 Swiggy Limited</span>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type="text" />
      <button type="submit">Search</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <ResturantContainer />
    </div>
  );
};

const Resturant = (props) => {
  //console.log(props);
  const { resData } = props;
  return (
    <div className="resturantCard">
      <div className="topImage">
        <img
          height={60}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b5dea3ed-788d-4679-9d54-07e09f25a1d9_765053.JPG"
        />
      </div>
      <div className="bottomContent">
        <h2>Resturnat Name: {resData.info.name}</h2>
        <h3>Location : {resData.info.areaName}</h3>
        <p>Cusines: {resData.info.cuisines.join(", ")}</p>
        <p>Ratings: {resData.info.avgRating}</p>
      </div>
    </div>
  );
};
const ResturantContainer = () => {
  return (
    <div className="resContainer">
      <Resturant resData={resObj} />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
