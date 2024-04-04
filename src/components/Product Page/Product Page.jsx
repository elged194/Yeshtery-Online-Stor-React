import React, { useState } from "react";
import "./Product Page.css";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);
  return (
    <div className="product container">
      <div className="product-img">
        <img src={activeImg} alt="" className="activ-img" />

        <div className="img-items">
          <img
            src={images.img1}
            alt=""
            className=""
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className=""
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className=""
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className=""
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="about-prod">
        <div style={{height:"50px"}}>
          <img
            src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png"
            alt=""
          />
        </div>

        <p className="fw-bold">
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </p>

        <div className="star">
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>

          <span><b className="mr-2">4.9 Of 5</b> 22 Rates</span>
        </div>

        <div className="total">
          {" "}
          <h3  >9.999 LE</h3>
           <p className="opacity-25 fw-bold">9.999 LE</p>
          <p className="off-total">30% off</p>
        </div>

        <div className="size">
          <h6>Size</h6>
          <ul>
            <li>Small</li>
            <li>Meidum</li>
            <li>Large</li>
            <li>X Large</li>
            <li>XX Large</li>
          </ul>

        </div>

        <div className="color">
          <h6>Color</h6>

          <img
            src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712085451/samples/Cart/Group_356_ruieeh.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712085451/samples/Cart/Group_354_dor5ta.png"
            alt=""
          />
        </div>

        <div className="quantity">
          <h6>Quantity</h6>
          <div className="">
            <button
              className="prev-quantity"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>

            <span style={{ padding: "5px 10px", fontWeight: "bold" }}>
              {amount}
            </span>

            <button
              className="prev-quantity"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="btn-quantity">
          <button style={{backgroundColor:"#542E90" , color:"#fff"}}>Add to Cart</button>
          <button style={{backgroundColor:"#FFF200" , }}>Pickup From Store</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
