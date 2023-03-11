import Burger from "@/public/hamburger.svg";
import Logo from "@/public/logo.svg";
import Cancel from "@/public/cancel.svg";
import { useState } from "react";

const Header = ({ serviceRef, footerRef, headerRef }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="z-10 flex text-white justify-between fixed top-0 left-0 px-s4 py-s3 lg:py-s5 w-full bg-bg">
      <div>
        <Logo />
      </div>
      <div className="hidden lg:inline-block">
        <button
          className="hover:underline"
          onClick={() => {
            setNavIsOpen(false);
            headerRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Home
        </button>
        <button
          className="mx-s5 hover:underline"
          onClick={() =>
            serviceRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Services
        </button>
        <button
          className="hover:underline"
          onClick={() =>
            footerRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Contact
        </button>
        <a
          href="tel:+2349054450082"
          className="bg-blue py-s2 px-s4 rounded-lg ml-s12"
        >
          Book a call
        </a>
      </div>
      {navIsOpen && (
        <MobileNav
          setNavIsOpen={setNavIsOpen}
          serviceRef={serviceRef}
          footerRef={footerRef}
          headerRef={headerRef}
        />
      )}
      <button
        className="inline-block lg:hidden"
        onClick={() => setNavIsOpen(true)}
      >
        <Burger />
      </button>
    </header>
  );
};

const MobileNav = ({ setNavIsOpen, serviceRef, footerRef, headerRef }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 w-full flex flex-col font-bold text-6xl justify-between h-screen bg-bg pt-s5 pb-s20 transition-all animate__bounceInDown">
      <button
        className="w-full flex cancel justify-end pr-s4"
        onClick={() => setNavIsOpen(false)}
      >
        <Cancel />
      </button>
      <button
        className="animate__slideInLeft"
        onClick={() => {
          setNavIsOpen(false);
          headerRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Home
      </button>
      <button
        className="my-s2"
        onClick={() => {
          setNavIsOpen(false);
          serviceRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Services
      </button>
      <button
        onClick={() => {
          setNavIsOpen(false);
          footerRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Contact
      </button>
      <a
        href="tel:+2349054450082"
        className="bg-blue py-s2 px-s1.5 mx-auto rounded-lg w-[250px]"
      >
        Book a call
      </a>
    </div>
  );
};
export default Header;
