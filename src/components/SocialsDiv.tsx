
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const Social=()=>(

    <div className="flex space-x-4 mt-4 text-2xl">
        <a
            href="https://facebook.com/Careal_cj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
        >
            <FaFacebookF />
        </a>

        <a
            href="https://instagram.com/am_cuthbert"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
        >
            <FaInstagram />
        </a>

        <a
            href="https://github.com/cuthbert9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
        >
            <FaGithub />
        </a>

        <a
            href="https://linkedin.com/in/cuthbert9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
        >
            <FaLinkedin />
        </a>
    </div>

)
export default Social