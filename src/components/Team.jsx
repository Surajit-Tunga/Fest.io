import Chair from "./team/Chair";
import Conv from "./team/Conv";
import Market from "./team/Market";
import Media from "./team/Media";
import Web from "./team/web";
import Voll from "./team/Voll";


const CoreTeam = () => {
  return (
    <section className="mt-20 text-white py-10 px-6">
       <div className=" py-12 px-6 md:px-20">
           <h1 className="text-3xl md:text-4xl font-extrabold mb-6 border-l-4 border-orange-500 pl-5">
               Meet Our <span className="text-orange-500">Core Team</span>
        </h1>
        <p className="text-5xl mx-10">
          Lorem, ipsum dolor.
        </p>
        <p className="mx-10 mt-4 text-orange-50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, temporibus!
        </p>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <Chair/>
        <Conv/>
        <Market/>
        <Media/>
        <Web/>
        <Voll/>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 p-2 rounded-xl shadow-md hover:shadow-orange-500/30 transition"
            >
              <h3 className="text-2xl font-semibold mb-1 text-orange-300">{member.name}</h3>
              <p className="text-gray-400 mb-4">{member.role}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default CoreTeam;
