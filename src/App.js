import { useState } from "react";
import "./App.css";
import AppBar from "./components/App Bar/AppBar";
import Drawerr from "./components/Drawer/Drawerr";
import ProductPage from "./components/Product Page/Product Page";
import SimilarProducts from "./components/Similar Products/Similar Products";
import Snackbar from "./components/Snackbar Toast/Snackbar";
import Footer from "./components/footer";

function App() {
  //  State for the drawer and product page visibility
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const Products = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022134/samples/Cart/Group_575_2x_ip8qqj.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 10.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
      
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_583_2x_f7cfz6.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 12.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022135/samples/Cart/Group_589_2x_udgubi.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 9.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_597_2x_sjmkzz.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 11.99,
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
    },
  ];

  const [myCart, setmyCart] = useState([]); //  cart is empty initially

  // --------------------------------------------------------------------------------------
  let quantity = myCart.length; //  Quantity of items in cart

  const addToCart = (index, id) => {
    // if (myCart.filter((item) => item.id !== id)) {
    //   myCart.push(Products[index]);
    // }

    myCart.push(Products[index]);
  };

  const removeItem = (id) => {
    setmyCart(myCart.filter((item) => item.id !== id));
  };

  // ---------------
  const [show, setshow] = useState(""); //  Show SnackBar => Add to Cart

  const showSnackbar = () => {
    setshow("show");

    setTimeout(() => {
      setshow("");
    }, 3000);
  };

  // ----------------------------------------------------------------------------

  const [open, setOpen] = useState(false); //  Drawerr Open  for Edit Item

  return (
    <div className="App ">
      <header>
        <AppBar
          toggleDrawer={toggleDrawer} // Function Open The Drawerr
          myCart={myCart} //  My Cart Items
          quantity={quantity} // Quantity Of Items In Cart
        />
      </header>

      <ProductPage />

      <SimilarProducts
        Products={Products} //  All Products Items
        addToCart={addToCart} // Function For Add items To Cart
        showSnackbar={showSnackbar} //  Function For Showing SnackBar After Adding In Cart
        myCart={myCart}
      />

      <Drawerr
        toggleDrawer={toggleDrawer} //  Function Close The Drawerr
        open={open} // State of Drawerr
        myCart={myCart} //   My Cart Items From Above
        removeItem={removeItem} //  Function For Remov Item From Cart
        quantity={quantity}
      />

      <Snackbar showSnackbar={showSnackbar} show={show} />

      <Footer />
    </div>
  );
}

export default App;
