import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-green-900">
      <div className="max-w-7xl mx-auto py-10 space-y-6 text-white text-center items-center">
        <h2 className="font-bold text-5xl">
          Keen<span className="font-normal text-5xl">Keeper</span>
        </h2>
        <p className="font-normal">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div>
          <p>Social Links</p>
          <div>
            <button>
              <a href="">
                <FaInstagram></FaInstagram>
              </a>
            </button>
            <button>
              <a href="">
                <FaFacebook></FaFacebook>
              </a>
            </button>
            <button>
              <a href="">
                <FaXTwitter></FaXTwitter>
              </a>
            </button>
          </div>
          <hr className="mt-5" />
        </div>
        <div className="flex justify-between">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex justify-around gap-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
