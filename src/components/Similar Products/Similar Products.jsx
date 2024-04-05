import "./Similar Products.css";

const SimilarProducts = ({  newArr }) => {

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

  return (
    <section className="container Similar-Products">
      <div className="title-Products">
        <h2>Similar Products</h2>
        <p>You may like these products also</p>
      </div>

      <div className="row">
        {Products.map((e) => {
          return (
            <div
              className="card mb-4 p-0 "
              style={{ width: "18rem" }}
              key={e.id}
              onClick={newArr}
            >
              <img src={e.img} alt="" />
              <div className="card-body">
                <p className="card-text p-0" style={{ fontSize: "16px" }}>
                  {e.discripshn}
                </p>

                <div className="total">
                  <dir>
                    <h5>{e.total}</h5>
                    <p>
                      <span className="opacity-50 fw-bold">9.999 LE</span>{" "}
                      <b className="off-total opacity-100">30% </b>
                    </p>
                  </dir>
                  <img src={e.logo} style={{ width: "auto" }} alt="" />
                </div>

                <div className="star">
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>

                  <span className="ml-3">
                    <b>4.2 Of 5</b>
                  </span>
                </div>

                <p>
                  Pickup From: <b>Genena Mall</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SimilarProducts;
