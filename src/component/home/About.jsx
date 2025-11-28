import React from "react";

const About = () => {
  const profileImage =
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150086/3_kdz0zl.png"; 

  return (
    <section className="w-full min-h-screen bg-[#e6d0b6] flex justify-center px-4 py-10">
      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-[1600px] bg-white text-[#7b5b4a]">

        {/* GRID LINES */}
        {/* Top horizontal line (under ABOUT ME) */}
        <div className="absolute left-0 right-0 top-[92px] h-px bg-[#c5ad93]" />

        {/* Center vertical line */}
        <div className="absolute inset-y-[92px] left-1/2 w-px bg-[#c5ad93]" />

        {/* Right thin vertical lines */}
        <div className="absolute inset-y-0 right-[10%] w-px bg-[#c5ad93] hidden md:block" />
        <div className="absolute inset-y-0 right-[6%] w-px bg-[#c5ad93] hidden md:block" />

        {/* Bottom horizontal line */}
        <div className="absolute left-0 right-0 bottom-[72px] h-px bg-[#c5ad93]" />

        {/* HEADER */}
        <div className="pt-10 pb-6">
          <h2 className="text-center md:text-left md:pl-24 tracking-[0.35em] text-lg md:text-xl uppercase">
            About Me
          </h2>
        </div>

        {/* CONTENT AREA */}
        <div className="relative mt-8 mb-20 px-4 md:px-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">

            {/* LEFT: IMAGE */}
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-md bg-[#2d2d2d]">
                <img
                  src={profileImage}
                  alt="Rehaan Tuli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT: TEXT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl tracking-[0.25em] mb-4">
                  Rehaan Tuli
                </h3>
                <p className="tracking-[0.25em] text-xs md:text-sm leading-relaxed">
                  Parsons School of Design |<br />
                  BFA Interior Design<br />
                  2022–2026
                </p>
              </div>

              <div className="space-y-3">
                <p className="tracking-[0.35em] text-xs md:text-sm">
                  SKILLS:
                </p>
                <p className="tracking-[0.25em] text-xs md:text-sm leading-relaxed">
                  AutoCAD | SketchUp |<br />
                  Vray | Photoshop,<br />
                  InDesign | Revit
                </p>
              </div>

              <p className="tracking-[0.25em] text-xs md:text-sm mt-4">
                English &amp; Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
