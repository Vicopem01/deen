import Image from "next/image";
import Header from "../components/UI/Header";
import Truck from "@/public/truck.png";
import Truckicon from "@/public/truck.svg";
import Footer from "@/components/UI/Footer";
import { useRef } from "react";

const Landing = () => {
  const serviceRef = useRef(null);
  const footerRef = useRef(null);
  const headerRef = useRef(null);

  const SERVICES = [
    {
      title: "Logistics",
      desc: "We help you manage your logistics matter with easy and efficiency.",
    },
    {
      title: "Haulage",
      desc: "We help you manage your haulage matter with easy and efficiency.",
    },
    {
      title: "Errand",
      desc: "We help you run errands matter with easy and efficiency.",
    },
    {
      title: "Sales & Supply",
      desc: "We help you manage your sales and supply matter with easy and efficiency.",
    },
  ];

  return (
    <>
      <main className="text-white">
        {/* header */}
        <Header
          serviceRef={serviceRef}
          footerRef={footerRef}
          headerRef={headerRef}
        />
        <h1 className="text-4xl md:text-7xl lg:text-9xl text-center font-semibold mb-s6 mt-s11">
          Grow your business, we will take care of your
          <span className="text-blue"> Logistics and Haulage</span>
        </h1>
        <Image src={Truck} alt="Logistics" />
        {/* services */}
        <section className="flex mt-s23 lg:flex-row flex-col" ref={serviceRef}>
          <div className="lg:w-2/6 w-full">
            <p className="font-bold text-lg">OUR SERVICES</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold mt-s1 mb-s3">
              <span className="text-blue">Everything</span> is ready to transport
            </h2>
            <p className="text-sm text-pale">
              Our global logistics expertise, advanced supply chain technology &
              customized logistics solutions will help you analyze, develop and
              implement successful supply chain management strategies from
              end-to-end
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-4/6 lg:ml-s4 w-full lg:mt-0 mt-s4">
            {SERVICES.map((item, i) => (
              <div
                key={i}
                className="text-center flex flex-col items-center bg-grey rounded-xl p-s4"
              >
                <span className="mt-s10">
                  <Truckicon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
