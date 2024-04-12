const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6 border-end border-1 border-secondary">
            <div className="logo-footer pb-3">
              <img
                src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712672451/samples/Cart/Group_1436_irgert.png"
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <br />
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
            </p>

          </div>

          <div className="col-6  ">
            <h6>Subscribe to our newsletter</h6>

            <div className="search-label">
              <input type="search" />
              <div className="send-footer">
                Subscribe
                <i class="fa-regular fa-paper-plane"></i>
              </div>
            </div>

            <div className="row p-2">
              <div className="col-6">
                <ul className="list-footer">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Track Order</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Sell With Us</li>
                  <li>Shipping And Returns</li>
                </ul>
              </div>

              <div className="col-6">
                <ul className="list-footer-2">
                  <li><i class="fa-brands fa-facebook"></i> /YESHTERY</li>
                  <li><i class="fa-brands fa-linkedin"></i> /YESHTERY</li>
                  <li><i class="fa-brands fa-instagram"></i> /YESHTERY</li>
                  <li><i class="fa-brands fa-twitter"></i> /YESHTERY</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="col-12 d-flex justify-content-between align-items-center">
          <p>© 2021 yeshtery, all rights reserved.</p>
          <div className="end-footer">
            <img src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712675567/samples/Cart/Rectangle_586_2x_alfnhb.png" alt="" />
            <img src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712675568/samples/Cart/Group_1437_2x_tavrqb.png" alt="" />
            <img src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712675573/samples/Cart/Group_1438_2x_imwiwd.png" alt="" />
          </div>

          <p>Powered By
            <img src="https://res.cloudinary.com/dyxoy6dpx/image/upload/v1712675574/samples/Cart/Group_1439_b0kkqn.png" alt="" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
