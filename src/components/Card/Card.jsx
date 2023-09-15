import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Card = ({ course }) => {
  const { image_url, title, details, price, credit_hours } = course;
  return (
    <div className="w-[300px] height-[400px] bg-white p-4 rounded-[12px]">
      <div className="h-[80%]">
        <img className="" src={image_url} alt="" />
        <h2 className="text-lg text-[#1C1B1B] font-semibold mt-4">{title}</h2>
        <p className="text-sm text-[#1C1B1B99] font-normal text-left mt-2 mb-4">
          {details}
        </p>
        <div className="flex justify-between">
          <div>
            <p className="flex items-center">
              <FaDollarSign />
              Price : {price}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1">
              <FaBookOpen></FaBookOpen>
              Credit : {credit_hours}hr
            </p>
          </div>
          <button></button>
        </div>
      </div>

      <button className="text-center text-white bg-[#2F80ED] w-[270px] h-[40px] rounded-lg mt-6 mb-4">
        Select
      </button>
    </div>
  );
};
Card.propTypes = {
  course: PropTypes.object.isRequired,
};
export default Card;
