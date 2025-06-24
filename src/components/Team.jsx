import Chair from "./team/Chair";
import Conv from "./team/Conv";
import Market from "./team/Market";
import Media from "./team/Media";
import Web from "./team/web";
import Voll from "./team/Voll";
import EventHead from "./team/EventHead";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="mt-20 text-white py-10 px-6">
       <div className=" py-12 px-6 md:px-20">
           <h1 className="text-3xl md:text-4xl font-extrabold mb-6 border-l-4 border-orange-500 pl-5" data-aos="fade-up">
               Meet Our <span className="text-orange-500">Core Team</span>
        </h1>
        <p className="text-5xl mx-10"data-aos="fade-up" data-aos-delay="200">
          Lorem, ipsum dolor.
        </p>
        <p className="mx-10 mt-4 text-orange-50"data-aos="fade-up" data-aos-delay="350">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, temporibus!
        </p>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <Chair/>
        <Conv/>
        <Market/>
        <Media/>
        <Web/>
        <EventHead/>
        <Voll/>
      </div>
    </section>
  );
};

export default CoreTeam;
