// src/pages/Interior.jsx
import React from "react";

const Interior = () => {
  // PAGE 1 IMAGES
  const echoesImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/4_owaxck.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/6_ju2lm2.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/5_jg4sxv.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150085/7_ckqwgn.png",
  ];

  // PAGE 2 IMAGES
  const collageImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150084/9_kjethx.png",
  ];

  const planImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150084/10_h2okka.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150085/11_sat5x0.png",
  ];

  const modelImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150086/12_muqok6.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150088/13_mgolmi.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150087/14_wdvo7i.png",
  ];

  // PAGE 3 IMAGES
  const page3Images = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150090/17_mbdxlh.png", // exploded
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/18_w2shfa.png", // tall facade
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150088/19_folgcq.png", // GF
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/20_oe4maj.png", // FF
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/21_udwnof.png", // study lounge
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150091/22_iufgkk.png", // meeting room
  ];

  return (
    <section className="w-full min-h-screen bg-[#e6d0b6] flex justify-center items-stretch py-6 sm:py-10">
      <div className="relative w-full max-w-10xl bg-white border px-4 sm:px-8 pt-8 pb-16 overflow-hidden">
        {/* GLOBAL GUIDELINE LINES */}
        <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed border-[#c5a98b]" />
        <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-28 sm:top-24 border-t border-dashed border-[#c5a98b]" />

        {/* ============ PAGE 1 BLOCK ============ */}
        <div className="relative z-10">
          {/* Number + Title */}
          <div className="flex items-start gap-4 sm:gap-8">
            <div className="pt-1 sm:pt-2">
              <span className="text-4xl sm:text-5xl font-light tracking-[0.2em] text-[#B17A5C]">
                01
              </span>
            </div>

            <div className="flex-1">
              <h1 className="text-xl sm:text-3xl md:text-4xl tracking-[0.35em] text-[#B17A5C] uppercase text-left">
                Echoes: An Urban Development Archive
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="mt-8 sm:mt-10 text-[11px] sm:text-sm md:text-base leading-relaxed max-w-5xl text-[#5F4A3B]">
            Echoes is a digital archive dedicated to documenting the evolution
            of urban development across diverse landscapes. This project aims to
            create an immersive space where history, architecture, and human
            connection intersect, allowing users to explore how cities have
            grown and transformed over time. More than just a collection of
            documents, photographs, and maps, this project fosters engagement by
            presenting urban history as a dynamic narrative—one shaped by
            cultural shifts, architectural innovation, and societal change.
          </p>

          {/* Image Row */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {echoesImages.map((src, idx) => (
              <div
                key={idx}
                className="aspect-[3/5] w-full overflow-hidden bg-[#D6C4AF] shadow-sm"
              >
                <img
                  src={src}
                  alt={`Echoes archive ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SEPARATOR LINE */}
        <div className="mt-16 border-t border-dashed border-[#c5a98b]" />

        {/* ============ PAGE 2 BLOCK ============ */}
        <div className="relative z-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* LEFT COLUMN – COLLAGE + TEXT */}
            <div>
              <div className="grid grid-cols-1 gap-3 mb-4">
                {collageImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden bg-[#D6C4AF]"
                  >
                    <img
                      src={src}
                      alt={`Collage image ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[10px] sm:text-xs md:text-[11px] leading-relaxed text-[#5F4A3B]">
                To cultivate a modern archive that is both dynamic and
                accessible, I carefully considered the integration of digital
                and physical elements. Interactive displays, intuitive
                navigation, and seamless archival organization served as the
                foundation of my design, creating an engaging space that
                preserves urban history while inspiring exploration and
                discovery.
              </p>

              <div className="mt-6 rounded-[40px] overflow-hidden aspect-[4/2.3] bg-[#D6C4AF]">
                <img
                  src={modelImages[0]}
                  alt="Physical model – TV room"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-[9px] sm:text-[10px] text-center text-[#5F4A3B]">
                Physical Model Image (TV room)
              </p>
            </div>

            {/* MIDDLE COLUMN – FIRST FLOOR PLAN + MODEL */}
            <div className="flex flex-col h-full">
              <div className="w-full bg-[#D6C4AF] overflow-hidden">
                <img
                  src={planImages[0]}
                  alt="First floor plan"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="mt-3 text-[10px] sm:text-xs md:text-[11px] leading-relaxed text-[#5F4A3B]">
                The first floor integrates residential spaces with archival
                access, offering three- and two-bedroom units near storage
                rooms. Communal restrooms and a laundry room enhance
                convenience, while shared spaces for relaxation and recreation
                encourage social interaction. This thoughtful design balances
                functionality, individual comfort, and a strong sense of
                community.
              </p>

              <div className="mt-auto pt-6">
                <div className="rounded-[40px] overflow-hidden aspect-[4/2.3] bg-[#D6C4AF]">
                  <img
                    src={modelImages[1]}
                    alt="Physical model – hallway"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-[9px] sm:text-[10px] text-center text-[#5F4A3B]">
                  Physical Model Image (First floor hallway)
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN – GROUND FLOOR PLAN + MODEL */}
            <div className="flex flex-col h-full">
              <div className="w-full bg-[#D6C4AF] overflow-hidden">
                <img
                  src={planImages[1]}
                  alt="Ground floor plan"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="mt-3 text-[10px] sm:text-xs md:text-[11px] leading-relaxed text-[#5F4A3B]">
                The ground floor is designed to streamline archival flow,
                enhancing engagement and learning. It features meeting rooms,
                experience rooms, and study areas for research and education. A
                cafeteria provides space for relaxation and informal
                gatherings, while an archival storage room ensures easy access
                to essential files. An exhibition zone hosts dynamic displays,
                fostering creativity and raising awareness.
              </p>

              <div className="mt-auto pt-6">
                <div className="rounded-[40px] overflow-hidden aspect-[4/2.3] bg-[#D6C4AF]">
                  <img
                    src={modelImages[2]}
                    alt="Physical model – cafeteria"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-[9px] sm:text-[10px] text-center text-[#5F4A3B]">
                  Physical Model Image (Cafeteria)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEPARATOR LINE FOR PAGE 3 */}
        <div className="mt-16 border-t border-dashed border-[#c5a98b]" />

        {/* ============ PAGE 3 BLOCK (FINAL) ============ */}
<div className="relative z-10 mt-10 space-y-10">

  {/* TOP ROW – 3 IMAGES */}
  <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr_1.4fr] gap-10 lg:gap-14 items-start">
    {/* LEFT – Exploded view */}
    <div className="w-full bg-[#D6C4AF] overflow-hidden">
      <img
        src={page3Images[0]}
        alt="Exploded view"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* MIDDLE – Tall green façade image */}
    <div className="flex justify-center">
      <div className="w-[220px] lg:w-[250px] aspect-[1/2.3] rounded-[120px] overflow-hidden bg-[#D6C4AF]">
        <img
          src={page3Images[1]}
          alt="Façade with tree"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT – GF + FF stacked */}
    <div className="space-y-6">
      <div>
        <div className="text-xs tracking-[0.2em] text-center text-[#5F4A3B] mb-1">
          GF
        </div>
        <div className="w-full bg-[#D6C4AF] overflow-hidden">
          <img
            src={page3Images[2]}
            alt="Ground floor section"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div>
        <div className="text-xs tracking-[0.2em] text-center text-[#5F4A3B] mb-1">
          FF
        </div>
        <div className="w-full bg-[#D6C4AF] overflow-hidden">
          <img
            src={page3Images[3]}
            alt="First floor section"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>

  {/* SECOND ROW – TEXT + TWO MODEL IMAGES */}
  <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.3fr_1.3fr] gap-10 lg:gap-14 items-start">
    {/* LEFT – Text under exploded view */}
    <div>
      <p className="text-[10px] sm:text-xs md:text-[11px] leading-relaxed text-[#5F4A3B]">
        The first floor was selected for this exploded view to emphasize the
        seamless integration of housing and archival storage, providing a
        visually dynamic and insightful representation of the architectural
        layout and functionality.
      </p>
    </div>

    {/* MIDDLE – Study lounge model */}
    <div>
      <div className="rounded-[40px] overflow-hidden aspect-[4/2.2] bg-[#D6C4AF]">
        <img
          src={page3Images[4]}
          alt="Physical model – study lounge"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-2 text-[9px] sm:text-[10px] text-center text-[#5F4A3B]">
        Physical Model Image (Study Lounge)
      </p>
    </div>

    {/* RIGHT – Meeting room model */}
    <div>
      <div className="rounded-[40px] overflow-hidden aspect-[4/2.2] bg-[#D6C4AF]">
        <img
          src={page3Images[5]}
          alt="Physical model – meeting room"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-2 text-[9px] sm:text-[10px] text-center text-[#5F4A3B]">
        Physical Model Image (Meeting room)
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Interior;
