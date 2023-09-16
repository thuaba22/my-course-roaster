import PropTypes from "prop-types";
import CartElement from "../CartElement/CartElement";

const Cart = ({
  selectCourses,
  totalCredits,
  remainingCredits,
  totalPrice,
}) => {
  return (
    <div className="bg-white p-4 ml-6 h-[100%] rounded-xl">
      <h5 className="text-[#2F80ED] text-xs font-bold mb-4">
        Credit Hour Remaining: {remainingCredits}hr
      </h5>
      <hr />
      <h3 className="text-[#1C1B1B] text-xl font-bold mt-4 mb-5">
        Course Name
      </h3>
      {selectCourses.map((course, idx) => (
        <CartElement key={idx} course={course} index={idx}></CartElement>
      ))}
      <hr />
      <p className="text-[#1C1B1BCC] font-medium text-sm mt-4 mb-4">
        Total Credit Hour : {totalCredits}
      </p>
      <hr />
      <p className="text-[#1C1B1BCC] font-medium text-sm mt-4 mb-4">
        Total Price : {totalPrice}$
      </p>
    </div>
  );
};
Cart.propTypes = {
  selectCourses: PropTypes.array,
  totalCredits: PropTypes.number,
  remainingCredits: PropTypes.number,
  totalPrice: PropTypes.number,
};
export default Cart;
