import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
       <div className=" pt-12 px-6 md:px-20">
           <h1 className="text-3xl md:text-4xl font-extrabold mb-6 border-l-4 border-orange-500 pl-4" data-aos="fade-up">
               About <span className="text-orange-500">Fest.io</span>
           </h1>

           <p className=" text-orange-100 text-base text-justify md:text-lg leading-relaxed max-w-4xl" data-aos="fade-up" data-aos-delay="300" >
               Fest.io is a vibrant celebration of innovation, creativity, and technology. Our mission is to bring together brilliant minds from across disciplines to collaborate, compete, and create unforgettable experiences. Whether you're a tech enthusiast, an artist, or simply a curious learner, Fest.io offers a platform to showcase talent, learn new skills, and connect with a passionate community.
              <br /><br />
              Join us for thrilling competitions, inspiring talks, hands-on workshops, and immersive exhibitions. At Fest.io, we don’t just celebrate ideas — we ignite them.
           </p>
      </div>


  )
}

export default About
