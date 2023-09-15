import PropTypes from "prop-types";

const CartElement = ({ course, index }) => {
  const { title } = course;

  return (
    <div>
      <h3 className="text-sm text-[#1C1B1B99] font-normal">
        {index + 1}. {title}
      </h3>
    </div>
  );
};
CartElement.propTypes = {
  course: PropTypes.object,
  index: PropTypes.number.isRequired,
};
export default CartElement;
