import React from "react";

const Banner = () => {
  return (
    <section className="w-full min-h-screen bg-[#e6d0b6] flex items-center justify-center px-4 py-10">
      {/* Wrapper - FULL WIDTH */}
      <div className="relative w-full max-w-[1600px] h-[80vh] md:h-[90vh] bg-white text-[#6c5c4c]">

        {/* LINES */}
        {/* Vertical center line */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-[#c5ad93]" />
        {/* Vertical line on right */}
        <div className="absolute inset-y-0 right-[22%] w-px bg-[#c5ad93]" />
        {/* Top horizontal line */}
        <div className="absolute inset-x-0 top-[22%] h-px bg-[#c5ad93]" />
        {/* Middle horizontal line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#c5ad93]" />

        {/* CONTENT */}
        <div className="relative w-full h-full flex">
          {/* Left empty area (same as reference) */}
          <div className="hidden md:block flex-1"></div>

          {/* Right content block */}
          <div className="flex-[0.9] flex flex-col justify-between md:pr-16 pr-6 py-10">

            {/* PORTFOLIO text */}
            <div className="flex-1 flex items-center justify-center md:justify-start">
              <div className="text-4xl md:text-6xl tracking-[0.25em] leading-[1.4]">
                <div className="text-center md:text-left">POR</div>
                <div className="text-center md:text-left">TFO</div>
                <div className="text-center md:text-left">LIO</div>
              </div>
            </div>

            {/* Bottom right details */}
            <div className=" justify-between items-end text-xs md:text-sm tracking-[0.35em]">

              {/* YEAR (vertical on desktop) */}
              <div className="flex md:flex-col gap-10 md:gap-2 md:items-center">
                <span className="md:[writing-mode:vertical-rl] md:rotate-180">
                  2 0 2 3 - 2 0 2 5
                </span>
              </div>

              {/* NAME block */}
              <div className="text-right space-y-1 md:space-y-2">
                <div className="">REHAAN</div>
                <div className="">TULI</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
