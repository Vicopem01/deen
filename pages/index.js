import Image from "next/image";
import Header from "../components/UI/Header";
import Img1 from "@/public/images/img1.png";
import Img2 from "@/public/images/img2.png";
import Img3 from "@/public/images/img3.png";
import Img4 from "@/public/images/img4.png";
import Img5 from "@/public/images/img5.png";
import Img6 from "@/public/images/img6.png";
import Truckicon from "@/public/truck.svg";
import Footer from "@/components/UI/Footer";
import { useRef } from "react";
import { SERVICES, SLICK_SETTINGS } from "@/constants";
import Slider from "react-slick";

const Landing = () => {
  const serviceRef = useRef(null);
  const footerRef = useRef(null);
  const headerRef = useRef(null);

  return (
    <>
      {/* header */}
      <Header
        serviceRef={serviceRef}
        footerRef={footerRef}
        headerRef={headerRef}
      />
      <main className="text-white" ref={headerRef}>
        <h1 className="text-4xl md:text-7xl lg:text-9xl text-center font-semibold mb-s6 mt-s18">
          Grow your business, we will take care of your
          <span className="text-blue"> Logistics and Haulage</span>
        </h1>
        <Slider {...SLICK_SETTINGS}>
          <Image src={Img1} alt="Logistics" />
          <Image src={Img2} alt="Logistics" />
          <Image src={Img3} alt="Logistics" />
          <Image src={Img4} alt="Logistics" />
          <Image src={Img5} alt="Logistics" />
          <Image src={Img6} alt="Logistics" />
        </Slider>

        {/* services */}
        <section className="flex mt-s23 lg:flex-row flex-col" ref={serviceRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-s4 lg:mt-0 mt-s4 [&>*:nth-child(4)]:lg:-translate-y-20">
            <div>
              <p className="font-bold text-lg">OUR SERVICES</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold mt-s1 mb-s2">
                <span className="text-blue">Everything</span> is ready to
                transport
              </h2>
              <p className="text-sm text-pale">
                Our global logistics expertise, advanced supply chain technology
                & customized logistics solutions will help you analyze, develop
                and implement successful supply chain management strategies from
                end-to-end
              </p>
            </div>
            {SERVICES.map((item, i) => (
              <div
                key={i}
                className="text-center bg-grey rounded-xl px-s4 py-s6"
              >
                <span className="mt-s6 inline-block mx-auto">
                  <Truckicon />
                </span>
                <h3 className="text-4xl font-semibold mb-s2 mt-s5">
                  {item.title}
                </h3>
                <p className="text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-s6 mt-s17">
          <div className="flex items-start md:items-center justify-between bg-no-repeat rounded-[20px] bg-cover bg-[url('../public/truck-bg.png')] p-s6 lg:p-s12 md:flex-row flex-col">
            <h2 className="font-semibold text-lg md:text-6xl md:w-3/5">
              Wants to deliver package and needs a logistics and haulage
              services?
            </h2>
            <a
              href="tel:+2349054450082"
              className="text-lg md:text-2xl font-semibold bg-white text-[#333333] w-fit rounded-lg py-s2.5 px-s4 mt-s4 md:mt-0"
            >
              Call us now
            </a>
          </div>
        </section>
        {/* footer */}
      </main>
      <Footer
        footerRef={footerRef}
        headerRef={headerRef}
        serviceRef={serviceRef}
      />
    </>
  );
};

export default Landing;
