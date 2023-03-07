import Twitter from "@/public/twitter.svg";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import Mail from "@/public/mail.svg";
import Phone from "@/public/phone.svg";
import Logo from "@/public/logo-white.svg";

const Footer = ({ footerRef, headerRef, serviceRef }) => {
  return (
    <footer className="bg-red pt-s9 pb-s7" ref={footerRef}>
      <div className="w-[85%] mx-auto">
        <div className="footer-grid mx-auto">
          <div>
            <p>
              <Logo />
            </p>
            <p className="text-white-200 my-s2">
              We offer you the best Logistics and Haulage services for all your
              goods
            </p>
            <p className="text-white-200 font-semibold">RC NO. 3802810</p>
          </div>
          <div>
            <p className="font-semibold text-lg text-white mb-s2">Company</p>
            <button
              className="block text-white-100 flex items-center"
              onClick={() =>
                headerRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Home
            </button>
            <button
              className="block text-white-100 flex items-center my-s2"
              onClick={() =>
                serviceRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Services
            </button>
            <button className="block text-white-100 flex items-center">
              Contact
            </button>
          </div>
          <div>
            <p className="font-semibold text-lg text-white mb-s2">Follow Us</p>
            <a className="block text-white-100 flex items-center gap-2">
              <Twitter />
              DEEN logistics
            </a>
            <a className="block text-white-100 flex items-center my-s2 gap-2">
              <Instagram />
              DEEN logistics
            </a>
            <a className="block text-white-100 flex items-center gap-2">
              <Facebook />
              DEEN logistics
            </a>
          </div>
          <div>
            <p className="font-semibold text-lg text-white mb-s2">Reach Us</p>
            <a
              className="block text-white-100 flex items-center gap-2"
              href="tel:+2349054450082"
            >
              <Phone />
              09054450082
            </a>
            <a
              className="block text-white-100 flex items-center my-s2 gap-2"
              href="tel:+2348133178613"
            >
              <Phone />
              08133178613
            </a>
            <a
              className="block text-white-100 flex items-center gap-2"
              href="mailto:dlog.hauls@gmail.com"
            >
              <Mail />
              dlog.hauls@gmail.com
            </a>
          </div>
        </div>
        <p className="text-white-200 text-center mt-s13">
          Copyright © 2023 Deen Logistics and Haulage Services. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
