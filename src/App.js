import {  useState } from "react";
import "./App.css";
import AppBar from "./components/App Bar/AppBar";
import Drawerr from "./components/Drawer/Drawerr";
import ProductPage from "./components/Product Page/Product Page";
import SimilarProducts from "./components/Similar Products/Similar Products";

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
      total: 9.999 + "LE",
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_583_2x_f7cfz6.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 9.999 + "LE",
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022135/samples/Cart/Group_589_2x_udgubi.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 9.999 + "LE",
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712022132/samples/Cart/Group_597_2x_sjmkzz.png",
      discripshn: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      total: 9.999 + "LE",
      logo: "https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712066431/samples/Cart/Group_346_hjqn4z.png",
    },
  ];


  const [myCart] = useState([]);
  // --------------------------------------------------------------------------------------

  const newArr = (index) => {
    return myCart.push(Products[index]);
  };

  // ----------------------------------------------------------------------------

  const [open, setOpen] = useState(false);

  return (
    <div className="App ">
      <header>
        <AppBar toggleDrawer={toggleDrawer} myCart={myCart} />
      </header>

      <ProductPage />

      <SimilarProducts Products={Products} newArr={newArr} />

      <Drawerr toggleDrawer={toggleDrawer} open={open} myCart={myCart} />
    </div>
  );
}

export default App;
