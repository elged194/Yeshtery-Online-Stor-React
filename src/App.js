import { useState } from "react";
import "./App.css";
import AppBar from "./components/App Bar/AppBar";
import Drawerr from "./components/Drawer/Drawerr";
import ProductPage from "./components/Product Page/Product Page";
import SimilarProducts from "./components/Similar Products/Similar Products";
import Snackbar from "./components/Snackbar Toast/Snackbar";
import Footer from "./components/footer";

function App() {
  // ------------------------------------ Open Drawerr ------------------------------------
  const [open, setOpen] = useState(false); //  Drawerr Open  for Edit Item

  //  Drawerr Open  for Edit Item
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // ---------------------------------- Add To Cart ----------------------------------------------
  // array of products
  const Products = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022134/samples/Cart/Group_575_2x_ip8qqj.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 10.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",

      img1: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022134/samples/Cart/Group_575_2x_ip8qqj.png",
      img2: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_583_2x_f7cfz6.png",
      img3: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022135/samples/Cart/Group_589_2x_udgubi.png",
      img4: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_597_2x_sjmkzz.png",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_583_2x_f7cfz6.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 12.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",

      img1: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_583_2x_f7cfz6.png",
      img2: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022134/samples/Cart/Group_575_2x_ip8qqj.png",
      img3: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022135/samples/Cart/Group_589_2x_udgubi.png",
      img4: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_597_2x_sjmkzz.png",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022135/samples/Cart/Group_589_2x_udgubi.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 9.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",

      img1: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022135/samples/Cart/Group_589_2x_udgubi.png",
      img2: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022134/samples/Cart/Group_575_2x_ip8qqj.png",
      img3: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_583_2x_f7cfz6.png",
      img4: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_597_2x_sjmkzz.png",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_597_2x_sjmkzz.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 11.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",

      img1: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_597_2x_sjmkzz.png",
      img2: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022134/samples/Cart/Group_575_2x_ip8qqj.png",
      img3: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_583_2x_f7cfz6.png",
      img4: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022135/samples/Cart/Group_589_2x_udgubi.png",
    },
  ];

  const [myCart, setmyCart] = useState([]); //  cart is empty initially

  let quantity = myCart.length; //  Quantity of items in cart

  //  Add to cart
  const addToCart = (index, id) => {
    // if (myCart.filter((item) => item.id )!== id) {
    //   myCart.push(Products[index]);
    // }

    
    if ( myCart === "" || myCart[index].id !== id ) {
      console.log(true);
     myCart.push(Products[index]);

    }else{
      return console.log(false);
    }
  };

  // --------------------------------- product to show img ---------------------------------
  const [imagesProduct, setimagesProduct] = useState(Products[0]); //  set the product to show

  const [activeImg, setActiveImage] = useState(imagesProduct.img); //  set the image to show

  //  Add to Product Show
  const AddToProductShow = (index) => {
    setimagesProduct(Products[index]); // set the product to show

    setActiveImage(Products[index].img); // set the image to show
  };

  // ------------------------------------ Remove Item from Cart --------------------------
  //  Remove Item from Cart
  const removeItem = (id) => {
    setmyCart(myCart.filter((item) => item.id !== id));
  };

  // ------------------------------------ Show SnackBar -----------------------------------
  const [show, setshow] = useState(""); //  Show SnackBar => Add to Cart

  //  Show SnackBar => Add to Cart
  const showSnackbar = () => {
    setshow("show");

    setTimeout(() => {
      setshow("");
    }, 3000);
  };
  // ----------------------------------------------------------------------------

  return (
    <div className="App ">
      <header>
        <AppBar
          toggleDrawer={toggleDrawer} // Function Open The Drawerr
          myCart={myCart} //  My Cart Items
          quantity={quantity} // Quantity Of Items In Cart
        />
      </header>

      <ProductPage
        imagesProduct={imagesProduct} //  Images Of Product
        activeImg={activeImg} //  Active Image
        setActiveImage={setActiveImage} //  Function For Set Active Image
      />

      <SimilarProducts
        Products={Products} //  All Products Items
        addToCart={addToCart} // Function For Add items To Cart
        showSnackbar={showSnackbar} //  Function For Showing SnackBar After Adding In Cart
        myCart={myCart} //   My Cart Items From Above
        AddToProductShow={AddToProductShow} //  Function For Showing SnackBar After Adding In Cart
      />

      <Drawerr
        toggleDrawer={toggleDrawer} //  Function Close The Drawerr
        open={open} // State of Drawerr
        myCart={myCart} //   My Cart Items From Above
        removeItem={removeItem} //  Function For Remov Item From Cart
        quantity={quantity} // Quantity Of Items In Cart
      />

      <Snackbar
        showSnackbar={showSnackbar} //  Function For Showing SnackBar After Adding In Cart
        show={show} // State of SnackBar
      />

      <Footer />
    </div>
  );
}

export default App;
