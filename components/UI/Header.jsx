import Burger from "@/public/hamburger.svg";

const Header = ({ serviceRef, footerRef, headerRef }) => {
  return (
    <header className="flex justify-between mt-s4" ref={headerRef}>
      <div>DEEN</div>
      <div className="hidden lg:inline-block">
        <button className="hover:underline">Home</button>
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
          className="bg-red py-s2 px-s4 rounded-lg ml-s12"
        >
          Book a call
        </a>
      </div>
      <button className="inline-block lg:hidden">
        <Burger />
      </button>
      {/* <div></div> */}
    </header>
  );
};

export default Header;
