import React from "react";


const About= () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 shadow-lg">
        {/* Left Side */}
        <div className="bg-[#E7E1D7] text-black p-8 flex flex-col justify-between">
        

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT ME</h1>
            <h2 className="text-lg font-semibold mb-4">Your Title Here</h2>
            <p className="text-sm leading-relaxed mb-4">
              Et aleni officiis fugaandae. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tempora amet aut fugiat rem ipsum
              voluptatem accusamus eligendi expedita.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Tatur most. Excepturi optio, quae voluptas sequi, quibusdam
              adipisci quos maiores aut natus voluptates? Dicta officia
              aspernatur explicabo repellat dolorum.
            </p>
            <p className="text-sm leading-relaxed">
              Nemo mollitia quas, a enim nam, voluptates nihil illum aliquid
              ratione minus.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative bg-white flex items-center justify-center p-8">
         
          {/* Image with arched frame */}
          <div className="relative w-full max-w-sm">
            <div className="overflow-hidden rounded-[50%_50%_0_0/60%_60%_0_0] h-[400px] border-4 border-gray-200">
              <img
                src={'https://res.cloudinary.com/dp5koojwa/image/upload/v1756962557/main-sample.png'}
                alt="About Me"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
