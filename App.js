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

const restaurantList = [
  {
    id: 1,
    resName: "Taco Town",
    cuisine: "Mexican",
    rating: 4.5,
  },
  {
    id: 2,
    resName: "Burger Barn",
    cuisine: "American",
    rating: 4.2,
  },
  {
    id: 3,
    resName: "Sushi Central",
    cuisine: "Japanese",
    rating: 4.8,
  },
];

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

const Resturant = ({ resName, cuisine, rating }) => {
  return (
    <div className="resturantCard">
      <div className="topImage">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/7cbf96b9-d578-44e8-a3c5-cd8ce2facc22_220652.jpg" />
      </div>
      <div className="bottomContent">
        <h2>Resturnat Name: {resName}</h2>
        <h3>Location : static</h3>
        <p>Cusines:{cuisine}</p>
        <p>Ratings:{rating}</p>
      </div>
    </div>
  );
};
const ResturantContainer = () => {
  return (
    <div className="resContainer">
      {restaurantList.map((resturant) => (
        <Resturant key={resturant.id} {...resturant} />
      ))}
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
