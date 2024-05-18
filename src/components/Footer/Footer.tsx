import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-24 bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm text-gray-600">&copy; 2024 Ordena tu ideas</p>
        <p className="text-sm text-gray-600">Síguenos en nuestras redes</p>
        <div className="flex space-x-2 my-2">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaFacebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTiktok className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
