import Burger from "@/public/hamburger.svg";

const Header = () => {
  return (
    <header className="flex justify-between mt-s4">
      <div>DEEN</div>
      <div className="hidden lg:inline-block">
        <a href="/#" className="hover:underline">
          Home
        </a>
        <a href="#services" className="mx-s5 hover:underline">
          Services
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
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
