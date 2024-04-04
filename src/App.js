import { useState } from "react";
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

  const [open, setOpen] = useState(false);

  return (
    <div className="App ">
      <header>
        <AppBar toggleDrawer={toggleDrawer} />
      </header>
      <ProductPage />
      <SimilarProducts />
      <Drawerr toggleDrawer={toggleDrawer} open={open} />
    </div>
  );
}

export default App;
