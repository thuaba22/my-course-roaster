const Cart = () => {
  return (
    <div className="bg-white p-4 ml-6 h-[355px] rounded-xl">
      <h3 className="text-[#2F80ED] text-base font-bold mb-4">
        Credit Hour Remaining: hr
      </h3>
      <hr />
      <h3 className="text-[#1C1B1B] text-xl font-bold mt-4 mb-5">
        Course Name
      </h3>
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

export default Cart;