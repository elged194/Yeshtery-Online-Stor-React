import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="app-bar ">
      <div className="top-bar">
        <div className="logo">
          <i class="fa-solid fa-bars-staggered"></i>
          <img src="./Group769@2x.png" alt="yashtry" />
        </div>
        <div className="centr-top">
        Valentine’s Day Offers! Buy Two Get One Free <a href="/">Shop Now</a>
        </div>
        <div className="icon-top">
          <div>
            {" "}
            <i class="fa-solid fa-phone-volume"></i> Contact Us{" "}
          </div>
          <div>
            {" "}
            <i class="fa-solid fa-cart-shopping"></i> Track Order
          </div>
          <div>
            {" "}
            <i class="fa-solid fa-location-dot"></i> Find A Store
          </div>
        </div>
      </div>
      <div className="center-bar">
        <div className="search-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          search
          {/* <input type="search" /> */}
        </div>

        <div className="center-img">
          <img src="./adidas.png" alt="adidas" />
        </div>

        <div className="center-user">
          <div>
            <i class="fa-solid fa-basket-shopping"></i> Cart
          </div>
          <div>
            <i class="fa-regular fa-heart"></i> Wishlist
          </div>
          <div>
            <i class="fa-regular fa-user"></i> Login
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
