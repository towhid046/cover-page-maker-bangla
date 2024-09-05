import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <p className="text-center py-2.5 bg-gray-800  text-gray-400 text-[14px]">
        All Right Reserved by &copy;{" "}
        <Link className="text-gray-500 hover:text-blue-400 transition duration-300" target="_blank" to="https://towhidmorol.vercel.app">
          Towhid Morol
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
