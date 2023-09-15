import PropTypes from "prop-types";
import CartElement from "../CartElement/CartElement";

const Cart = ({ selectCourses }) => {
  return (
    <div className="bg-white p-4 ml-6 h-[100%] rounded-xl">
      <h3 className="text-[#2F80ED] text-base font-bold mb-4">
        Credit Hour Remaining: hr
      </h3>
      <hr />
      <h3 className="text-[#1C1B1B] text-xl font-bold mt-4 mb-5">
        Course Name
      </h3>
      {selectCourses.map((course, idx) => (
        <CartElement key={idx} course={course} index={idx}></CartElement>
      ))}
      <hr />
      <p className="text-[#1C1B1BCC] font-medium text-sm mt-4 mb-4">
        Total Credit Hour :
      </p>
      <hr />
      <p className="text-[#1C1B1BCC] font-medium text-sm mt-4 mb-4">
        Total Price :{" "}
      </p>
    </div>
  );
};
Cart.propTypes = {
  selectCourses: PropTypes.array,
};
export default Cart;
