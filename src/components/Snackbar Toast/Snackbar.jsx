import "./Snackbar.css";

const Snackbar = ({  show}) => {

  return (
    <div>

      <div id="snackbar" className={`${show}`}>
        Done Add to Your Shop Cart..
      </div>
    </div>
  );
};

export default Snackbar;
