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
                +00 123 456789 <br /> 555-5555-55555
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="font-bold uppercase text-sm">Social :</p>
              <p className="border-b border-gray-300 pb-2">
                www.example.com <br /> example.org
              </p>
            </div>

            {/* Address */}
            <div>
              <p className="font-bold uppercase text-sm">Address :</p>
              <p className="border-b border-gray-300 pb-2">
                Street Name, <br /> City, State, Country
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative w-full flex justify-center">
          <img
            src={"https://res.cloudinary.com/dp5koojwa/image/upload/v1756962556/samples/woman-on-a-football-field.jpg"}
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
