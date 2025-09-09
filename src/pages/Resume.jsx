import React from "react";


const Resume = () => {
  return (
    <section className="bg-white ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full h-full flex items-center justify-center bg-[#F5F0E9]">
          <img
            src={'https://res.cloudinary.com/dp5koojwa/image/upload/v1756962556/samples/woman-on-a-football-field.jpg'}
            alt="Profile"
            className="w-full h-auto "
          />
        </div>

        {/* Right Side - Details */}
        <div className=" p-6 md:p-10 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#C6A662]">
                BONITA
              </h1>
              <h2 className="text-lg font-semibold text-gray-800">RIZKA.D</h2>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>DESIGNER</p>
              <p>Bandung, 1997</p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Three years as a graphic designer have given me hands-on and real
            experiences in working on various visual communication designs. I am
            developing creativity, crafting designs that maintain both visual and
            brand identities, and building creative innovations when tight
            timelines are a guidance. I’ll make incredible valuable outcomes.
          </p>

          {/* Info Sections */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-800">
            {/* Education */}
            <div>
              <h3 className="font-bold mb-2">EDUCATION</h3>
              <p>
                Institut Teknologi Sepuluh Nopember <br />
                Visual and Design (GPA 3.57 of 4.0)
              </p>
            </div>

            {/* Right small box */}
            <div className="flex items-center justify-center border border-gray-400 text-xs p-2">
              <span className="text-gray-700">+62 857 9982 2320</span>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-bold mb-2">SKILLS</h3>
              <ul className="space-y-1">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>MS Office</li>
                <li>Figma</li>
                <li>CorelDraw</li>
                <li>Capcut</li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-bold mb-2">LANGUAGE</h3>
              <p>
                Indonesian – <span className="italic">Mother language</span>
              </p>
              <p>English – Conversational</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-2">CONTACT</h3>
              <p>Email: bonitaemail@gmail.com</p>
              <p>LinkedIn: linkedin.com/in/bonita</p>
              <p>Behance: behance.net/bonitadesign</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
