import styled from "@emotion/styled";
import "./AppBar.css";
import { Badge } from "@mui/material";
import { ShoppingBasketOutlined } from "@mui/icons-material";

const AppBar = ({ toggleDrawer, myCart }) => {
  


  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -4,
      top: 3,
      border: `2px solid #FFF100`,
      padding: "0 4px",
      backgroundColor: "#FFF100",
    },
  }));

  return (
    <div className="app-bar ">
      <div className="top-bar">
        <div className="logo">
          <i className="fa-solid fa-bars-staggered"></i>
          <img
            src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group769_2x_v8gbym.png"
            alt="yashtry"
          />
        </div>
        <div className="centr-top">
          Valentine’s Day Offers! Buy Two Get One Free <a href="/">Shop Now</a>
        </div>
        <div className="icon-top">
          <div>
            {" "}
            <i className="fa-solid fa-phone-volume"></i> Contact Us{" "}
          </div>
          <div>
            {" "}
            <i className="fa-solid fa-cart-shopping"></i> Track Order
          </div>
          <div>
            {" "}
            <i className="fa-solid fa-location-dot"></i> Find A Store
          </div>
        </div>
      </div>

      <div className="center-bar">
        <div className="search-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Searsh" />
        </div>

        <div className="center-img">
          <img
            src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/adidas_xt2b5n.png"
            alt="adidas"
          />
        </div>

        <div className="center-user">
          <div>
            <button onClick={toggleDrawer(true)} className="quntty-cart">
              <StyledBadge badgeContent={myCart.length} color="#FFF100">
                <ShoppingBasketOutlined />
              </StyledBadge>
              Cart
            </button>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i> Wishlist
          </div>
          <div>
            <i className="fa-regular fa-user"></i> Login
          </div>
        </div>
      </div>
      <div className="buttom-bar">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Unisex</li>
          <li>Kids</li>
          <li>Best Sellers</li>
          <li>New Arrivals</li>
          <li>Offers</li>
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
