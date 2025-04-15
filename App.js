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
  const { name, location, cusines, ratings } = props;
  return (
    <div className="resturantCard">
      <div className="topImage">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/7cbf96b9-d578-44e8-a3c5-cd8ce2facc22_220652.jpg" />
      </div>
      <div className="bottomContent">
        <h2>Resturnat Name: {name}</h2>
        <h3>Location : {location}</h3>
        <p>{cusines}</p>
        <p>Ratings: {ratings}</p>
      </div>
    </div>
  );
};
const ResturantContainer = () => {
  return (
    <div className="resContainer">
      <Resturant
        name="KFC"
        location="Gandhinagar"
        cusines="Pizza, Birayani, food"
        ratings="4.1"
      />
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
