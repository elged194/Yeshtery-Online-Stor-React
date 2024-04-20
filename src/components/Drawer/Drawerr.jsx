import { Box, Divider, Drawer, List, Typography } from "@mui/material";
import "./Drawer.css";
import { DeleteTwoTone } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const Drawerr = ({
  toggleDrawer,
  open,
  myCart,
  removeItem,
  quantityItemPlus,
  quantityItemMinus,
}) => {
  let subTotal = 0; // Sub Totale

  const DrawerList = (
    <Box
      sx={{ width: 350, m: "5px 15px" }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <div className="close">
        <i onClick={toggleDrawer(false)} className="fa-solid fa-xmark"></i>
      </div>
      <Typography
        variant="h5"
        sx={{
          color: "#542E90",
          fontWeight: "bold",
          textAlign: "center",
          pt: "10px",
        }}
      >
        My Cart
      </Typography>

      <Divider />

      <p className=" fw-bold ms-3">Cart Summary</p>

      <List>
        {myCart.map((e) => {
          const totaleItems = Number(e.quantity) * Number(e.total);
          subTotal += Number(totaleItems);

          return (
            <div className="card cart p-1 mb-3 shadow">
              <img src={e.img} alt="" style={{ width: "85px" }} />

              <div className="card-body p-0 ps-2">
                <div className="d-flex justify-content-between align-items-center p-1">
                  <h5>{e.title}</h5>
                  <h5 style={{ color: "#542E90", fontWeight: "bold" }}>
                    {totaleItems.toFixed(2)} $
                  </h5>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="">
                    <button
                      className="prev-quantity-cart"
                      onClick={() => quantityItemMinus(e)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>

                    <span style={{ padding: "5px 10px", fontWeight: "bold" }}>
                      {e.quantity}
                    </span>

                    <button
                      className="prev-quantity-cart"
                      onClick={() => quantityItemPlus(e)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>

                  <IconButton onClick={() => removeItem(e.id)}>
                    <DeleteTwoTone sx={{ fontSize: "25px" }} />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}

        <div className="sub-totale">
          <h5>Total: {subTotal.toFixed(2)} $</h5>
          <div>
            <button>Review Cart</button>
            <button style={{ backgroundColor: "#542E90", color: "#fff" }}>
              Compelete Checkout
            </button>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Drawerr;
