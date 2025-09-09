// src/components/Banner.jsx
import React from "react";


const IMAGE_URL =
  ""; // <— replace

const Banner = () => {
  return (
    <section className="relative w-full bg-white text-black overflow-hidden">
      {/* Tiny header text row */}<br/><br/><br/>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-3 text-[11px] tracking-wide text-[#666] flex items-center justify-between">
        <div className="flex gap-8">
          <span>Fashion week / Paris</span>
          <span>Style • Studio • Look</span>
        </div>
        <div className="text-right">
          <span>Tips on editorial layout &amp; pacing</span>
        </div>
      </div>

      {/* Main canvas */}
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-8 md:py-12 lg:py-16">
        {/* Left black bar */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[220px] w-4 bg-black" />

        {/* Grid: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-8">
          {/* LEFT: Title block */}
          <div className="relative">
            {/* Yellow translucent band behind text (bleeds into image area) */}
            <div className="pointer-events-none absolute -left-6 top-10 h-24 w-[65vw] lg:w-[52vw] bg-[#ffeb3b] opacity-70" />

            <h1 className="relative z-[1] leading-none tracking-tight font-extrabold text-[18vw] sm:text-[120px] lg:text-[140px]">
              PORTOFLIO
            </h1>
            <p className="relative z-[1] -mt-1 text-[18px] md:text-[22px] tracking-wide text-[#777]">
              REHAAN TULI
            </p>
          </div>

          {/* RIGHT: Image with yellow overlay slab */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={"https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/sample.jpg"}
                alt="Portrait holding coffee"
                className="h-full w-full object-cover grayscale"
              />

              {/* Yellow rectangle overlapping lower half (same tone as band) */}
              <div className="absolute bottom-[18%] left-0 h-[34%] w-full bg-[#ffeb3b] opacity-70" />
            </div>

            {/* Slim vertical caption along the image edge */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[11px] tracking-wider text-[#444] [writing-mode:vertical-rl] rotate-180">
              portfolio • creative direction • editorial
            </div>
          </div>
        </div>
      </div>

      {/* Hairline frame */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />
    </section>
  );
};

export default Banner;
