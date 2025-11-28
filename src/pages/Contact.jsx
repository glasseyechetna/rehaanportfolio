import React from "react";


const Contact = () => {
  return (
    <section className="bg-[#F3F3F3] ">
      <div className=" bg-white  rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            CONTACT US
          </h2>

          <div className="space-y-6 text-gray-800">
            {/* Phone */}
            <div>
              <p className="font-bold uppercase text-sm">Phone :</p>
              <p className="border-b border-gray-300 pb-2">
                929-727-7000
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="font-bold uppercase text-sm">Social :</p>
              <p className="border-b border-gray-300 pb-2">
               rehaantuli2@gmail.com 
               
              </p>
            </div>

            {/* Address */}
            <div>
              <p className="font-bold uppercase text-sm">Address :</p>
              <p className="border-b border-gray-300 pb-2">
               480 2nd Ave,  <br /> New York, NY
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative w-full flex justify-center">
          <img
            src={"https://res.cloudinary.com/dp5koojwa/image/upload/v1764150086/3_kdz0zl.png"}
            alt="Contact"
            className="w-80 h-auto object-cover shadow-md"
          />
          {/* Overlay text */}
          <span className="absolute bottom-6 right-6 text-red-600 text-4xl italic font-bold">
            Iconic
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
