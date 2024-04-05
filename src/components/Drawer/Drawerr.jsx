import { Box, Divider, Drawer, List, Typography } from "@mui/material";
import "./Drawer.css";

const Drawerr = ({ toggleDrawer, open, myCart }) => {
  const DrawerList = (
    <Box
      sx={{ width: 350, m: "5px 15px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
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
          return (
            <div className="card cart p-1 mb-3">
              <img src={e.img} alt="" style={{ width: "85px" }} />

              <div className="card-body p-0 ps-2">
                <p>{e.discripshn}</p>

                <p>
                  <b>Quantity: 1</b>
                </p>

                <div className="total ">
                  <h6 style={{ color: "#542E90" }}>9.999 EL</h6>
                  <button className="remove">Remove</button>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="sub-totale">
          <h5>Total: 19.999 EL</h5>
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
