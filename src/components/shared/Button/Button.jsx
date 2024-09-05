const Button = ({ children, customClass, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`${customClass} bg-blue-500 text-white text-base-200 hover:bg-blue-600 transition duration-300 md:py-2 py-1.5 md:px-5 px-4 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
