// src/pages/Interior.jsx
import React from "react";

const Interior = () => {
  // PAGE 1 – Echoes IMAGES
  const echoesImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/4_owaxck.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/6_ju2lm2.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/5_jg4sxv.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150085/7_ckqwgn.png",
  ];

  // PAGE 2 – Echoes collage
  const echoesCollageImages = [
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

  // PAGE 3 – Echoes IMAGES
  const page3Images = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150090/17_mbdxlh.png", // exploded
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/18_w2shfa.png", // tall facade
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150088/19_folgcq.png", // GF
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/20_oe4maj.png", // FF
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/21_udwnof.png", // study lounge
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150091/22_iufgkk.png", // meeting room
  ];

  // ========== NEXURA IMAGES ==========

  // PAGE 1 – Nexura: Modern Wellness (4 images)
  const nexuraIntroImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/24_m3hgkd.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/25_qqp7rs.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150080/26_cv9qso.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150084/27_x0r9o6.png",
  ];

  // PAGE 2 – Zoning / Sensory / Renders / Plan (6 images)
  const nexuraPage2Images = {
    zoning:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150084/29_ofqyni.png",
    sensory:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150086/30_sa4ywd.png",
    waitingRoom:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150087/31_f4z9jw.png",
    chamber:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150088/32_xr2fhk.png",
    floorPlan:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150087/33_urjbsc.png",
    lounge:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150088/34_xbgvsg.png",
  };

  // PAGE 3 – Sections / Lighting / Logo / Brand (9 images)
  const nexuraPage3Images = {
    sectionBB:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150092/36_hmwhtf.png",
    sectionAA:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/37_umvl8i.png",
    lightingPlan:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150090/39_bx4yga.png",
    studyLounge:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150090/40_uie53f.png",
    podRoom:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150089/38_uopf7f.png",
    logoFrame:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150090/41_m548u7.png",
    tshirt:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150091/42_pohtvv.png",
    venn:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150091/43_ea8uiy.png",
    benefitsStack:
      "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150091/44_rucvkm.png",
  };

  // ========== HAVEN HOUSE IMAGES ==========

  /* ---------- PAGE 1: Haven House Collage IMAGES ---------- */
  const havenHouseCollageImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150093/46_ri86eq.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150093/47_m9ufik.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150094/48_rmlezi.png",
  ];

  /* ---------- PAGE 2 IMAGES ---------- */
  const groundFloorPlan =
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150095/50_h6dini.png";
  const firstFloorPlan =
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150096/55_iqser8.png";
  const spatialCollageImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150095/51_cdnclf.png",
  ];

  const programMaps = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150096/52_e2zwaz.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150095/53_jddkc5.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150095/54_rhggtz.png",
  ];

  /* ---------- PAGE 3 IMAGES ---------- */
  const secondFloorPlan =
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150096/58_mucuqv.png";
  const crossSectionImage =
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150096/59_iwois2.png";
  const frontElevationImage =
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150096/57_u2cmna.png";

  // this image already has all 3 program cubes + text inside
  const programDiagramImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150096/60_tzuvjw.png",
  ];

  const sculptureImages = [
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150097/61_phctek.png",
    "https://res.cloudinary.com/dp5koojwa/image/upload/v1764150097/62_astvav.png",
  ];

  return (
    <main className="w-full bg-[#e6d0b6]">
      {/* ============ ECHOES: URBAN DEVELOPMENT ARCHIVE (3 PAGES IN ONE STRIP) ============ */}
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
              of urban development across diverse landscapes. This project aims
              to create an immersive space where history, architecture, and
              human connection intersect, allowing users to explore how cities
              have grown and transformed over time. More than just a collection
              of documents, photographs, and maps, this project fosters
              engagement by presenting urban history as a dynamic narrative—one
              shaped by cultural shifts, architectural innovation, and societal
              change.
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
                  {echoesCollageImages.map((src, idx) => (
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
                  experience rooms, and study areas for research and education.
                  A cafeteria provides space for relaxation and informal
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
                  The first floor was selected for this exploded view to
                  emphasize the seamless integration of housing and archival
                  storage, providing a visually dynamic and insightful
                  representation of the architectural layout and functionality.
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

      {/* ============ NEXURA PAGES ============ */}
      <NexuraIntroSection images={nexuraIntroImages} />
      <NexuraDetailsSection images={nexuraPage2Images} />
      <NexuraLightingSection images={nexuraPage3Images} />

      {/* ============ HAVEN HOUSE PAGES ============ */}
      {/* PAGE 1 */}
      <HavenHouseSection images={havenHouseCollageImages} />

      {/* separator between pages */}
      <div className="h-px w-full bg-[#d1bda3] my-10 sm:my-16" />

      {/* PAGE 2 */}
      <HavenHousePlansSection
        groundPlan={groundFloorPlan}
        firstPlan={firstFloorPlan}
        collageImages={spatialCollageImages}
        programMaps={programMaps}
      />

      {/* separator between pages */}
      <div className="h-px w-full bg-[#d1bda3] my-10 sm:my-16" />

      {/* PAGE 3 */}
      <HavenHouseVerticalSection
        secondPlan={secondFloorPlan}
        crossSection={crossSectionImage}
        frontElevation={frontElevationImage}
        programDiagrams={programDiagramImages}
        sculptureImages={sculptureImages}
      />
    </main>
  );
};

/* ---------------- PAGE 1: Nexura Intro ---------------- */

const NexuraIntroSection = ({ images }) => (
  <section className="w-full min-h-screen flex justify-center items-stretch py-6 sm:py-10">
    <div className="relative w-full max-w-10xl bg-white border  px-4 sm:px-8 pt-8 pb-16 overflow-hidden">
      {/* Guides */}
      <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed border-[#c5a98b]" />
      <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-24 border-t border-dashed border-[#c5a98b]" />

      <div className="relative z-10">
        {/* Page number + title */}
        <div className="flex items-start gap-4 sm:gap-8">
          <div className="pt-1 sm:pt-2">
            <span className="text-4xl sm:text-5xl font-light tracking-[0.2em] text-[#B17A5C]">
              02
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-3xl md:text-4xl tracking-[0.35em] text-[#B17A5C] uppercase text-left">
              Nexura: Modern Wellness
            </h1>
          </div>
        </div>

        {/* Body text */}
        <p className="mt-8 sm:mt-10 text-[11px] sm:text-sm md:text-base leading-relaxed max-w-5xl text-[#5F4A3B]">
          Nexura is more than a wellness destination—it’s an immersive
          experience designed to restore balance and reconnect you with
          yourself. Rooted in minimalism, it fosters effortless calm, stripping
          away distractions to enhance presence and serenity. Every detail, from
          soothing textures to tranquil aromas, creates a multisensory journey.
          Experience the invigoration of cryotherapy, the healing touch of
          massage, and the deep stillness of floatation, all seamlessly blending
          advanced techniques with holistic well-being. At Nexura, wellness is
          not an afterthought—it’s nurtured, celebrated, and elevated.
        </p>

        {/* Image strip */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-full aspect-[3/5] bg-[#D6C4AF] overflow-hidden shadow-sm"
            >
              <img
                src={src}
                alt={`Nexura mood ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- PAGE 2: Nexura Zoning / Plan ---------------- */

const NexuraDetailsSection = ({ images }) => (
  <section className="w-full min-h-screen flex justify-center items-stretch py-6 sm:py-10">
    <div className="relative w-full max-w-10xl bg-white border px-4 sm:px-8 pt-8 pb-16 overflow-hidden">
      {/* Same guides for continuity */}
      <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed border-[#c5a98b]" />
      <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-24 border-t border-dashed border-[#c5a98b]" />

      <div className="relative z-10">
        {/* Content grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT COLUMN – Zoning + Sensory */}
          <div className="space-y-8 text-[#5F4A3B] text-[11px] sm:text-xs md:text-[13px] leading-relaxed">
            {/* Zoning diagram */}
            <div className="space-y-2">
              <div className="w-full max-w-xs bg-[#D6C4AF] overflow-hidden">
                <img
                  src={images.zoning}
                  alt="Zoning diagram"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-2">
                <span className="font-semibold">Recovery</span>
                <span className="mx-1">|</span>
                <span className="font-semibold">Fitness</span>
                <span className="mx-1">|</span>
                <span className="font-semibold">Other</span>
              </p>

              <p>
                To ensure clarity and functionality, I designed the zoning
                diagram to define recovery, fitness, and other areas. Logical
                circulation and seamless transitions enhance efficiency and
                accessibility.
              </p>
            </div>

            {/* Sensory diagram */}
            <div className="space-y-2">
              <div className="w-full max-w-xs bg-[#D6C4AF] overflow-hidden">
                <img
                  src={images.sensory}
                  alt="Sensory diagram"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-1">
                Sight &nbsp;•&nbsp; Smell &nbsp;•&nbsp; Sound &nbsp;•&nbsp;
                Touch &nbsp;•&nbsp; Taste
              </p>

              <p>
                To create a holistic experience, I designed the sensory diagram
                to map sight, sound, touch, smell, and taste. This ensures a
                multi-sensory environment that enhances comfort, engagement, and
                well-being.
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN – Two renders */}
          <div className="space-y-6">
            <div className="rounded-[40px] overflow-hidden aspect-[16/9] bg-[#D6C4AF]">
              <img
                src={images.waitingRoom}
                alt="Cryotherapy / waiting area render"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-[40px] overflow-hidden aspect-[16/9] bg-[#D6C4AF]">
              <img
                src={images.chamber}
                alt="Treatment chamber render"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN – Plan + text + bottom render */}
          <div className="space-y-6 text-[#5F4A3B] text-[11px] sm:text-xs md:text-[13px] leading-relaxed">
            <div className="w-full bg-[#D6C4AF] overflow-hidden">
              <img
                src={images.floorPlan}
                alt="Nexura floor plan"
                className="w-full h-full object-cover"
              />
            </div>

            <p>
              To foster relaxation and rejuvenation, I designed the floor plan
              for Nexura to seamlessly integrate cryotherapy, virtual fitness,
              compression therapy, massage therapy, and floatation therapy. Each
              space is carefully zoned to balance privacy and accessibility,
              ensuring a fluid transition between treatments. Soft, organic
              layouts, strategic lighting, and calming materials enhance the
              atmosphere, creating a seamless blend of technology and
              tranquility. By prioritizing comfort, efficiency, and sensory
              harmony, the design transforms Nexura into a sanctuary where
              wellness feels intuitive and immersive.
            </p>

            <div className="rounded-[40px] overflow-hidden aspect-[16/9] bg-[#D6C4AF]">
              <img
                src={images.lounge}
                alt="Reception / lounge render"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- PAGE 3: Sections / Lighting / Brand ---------------- */

const NexuraLightingSection = ({ images }) => (
  <section className="w-full min-h-screen flex justify-center items-stretch py-6 sm:py-10">
    <div className="relative w-full max-w-10xl bg-white border px-4 sm:px-8 pt-8 pb-16 overflow-hidden">
      {/* Guides again for consistency */}
      <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed border-[#c5a98b]" />
      <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-24 border-t border-dashed border-[#c5a98b]" />

      <div className="relative z-10 space-y-12">
        {/* ========== FIRST ROW: LEFT STACK (3 ROWS) + RIGHT LIGHTING ========== */}
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.4fr_1.6fr] items-start">
          {/* LEFT COLUMN – section BB, section AA, then double green images */}
          <div className="space-y-6">
            {/* Section BB’ */}
            <div className="w-full  overflow-hidden aspect-[8/1]">
              <img
                src={images.sectionBB}
                alt="Section BB’"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Section AA’ */}
            <div className="w-full  overflow-hidden aspect-[8/1]">
              <img
                src={images.sectionAA}
                alt="Section AA’"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Two rounded green renders side-by-side */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="rounded-[40px] overflow-hidden aspect-[4/2.1] bg-[#D6C4AF]">
                  <img
                    src={images.studyLounge}
                    alt="Physical model – study lounge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-[9px] sm:text-[10px] text-[#5F4A3B]">
                  Physical Model Image (Study Lounge)
                </p>
              </div>

              <div>
                <div className="rounded-[40px] overflow-hidden aspect-[4/2.1] bg-[#D6C4AF]">
                  <img
                    src={images.lightingPlan}
                    alt="Physical model – float pod room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-[9px] sm:text-[10px] text-[#5F4A3B]">
                  Physical Model Image (Pod Room)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – lighting plan + paragraph */}
          <div className="space-y-4 text-[11px] sm:text-xs md:text-[13px] text-[#5F4A3B] leading-relaxed">
            <div className="w-full bg-[#111] overflow-hidden aspect-[4/3]">
              <img
                src={images.podRoom}
                alt="Lighting plan"
                className="w-full h-full object-contain"
              />
            </div>
            <p>
              The lighting plan was carefully curated to meet the specific needs
              of a wellness space like Nexura. Each area was thoughtfully
              considered to ensure the lighting enhances the overall experience
              and supports the healing process. Wellness zones such as
              cryotherapy and floatation therapy require specialized lighting—
              whether it’s soft, ambient light to promote relaxation or focused
              illumination to ensure safety and functionality. The design
              ensures that every space feels calming, intentional, and aligned
              with Nexura’s forward-thinking approach to well-being.
            </p>
          </div>
        </div>

        {/* ========== SECOND ROW: EVERYTHING IN ONE ROW (DESKTOP) ========== */}
        <div className="grid gap-8 lg:gap-10 grid-cols-1 md:grid-cols-5 items-start text-[#5F4A3B] text-[11px] sm:text-xs md:text-[13px] leading-relaxed mt-4">
          {/* LEFT – logo + long text (spans 2 columns on desktop) */}
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
            <div className="w-full sm:w-auto max-w-[180px]  overflow-hidden">
              <img
                src={images.logoFrame}
                alt="Nexura logo applications"
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              The Nexura logo was thoughtfully designed to embody the essence of
              a forward-thinking wellness brand. The arrows symbolize progress,
              movement, and personal growth—core to Nexura’s mission. The logo
              on the T-shirt was the initial draft, capturing the basic concept
              and direction. The version in the frame was refined to enhance its
              visual appeal, featuring cleaner lines and better balance. This
              final design more effectively communicates the brand’s identity
              and is versatile across both digital and physical applications.
            </p>
          </div>

          {/* MIDDLE – T-shirt */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-full max-w-[220px]  overflow-hidden flex items-center justify-center aspect-[4/5] rounded-[24px]">
              <img
                src={images.tshirt}
                alt="Nexura t-shirt mockup"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center md:text-left">
              Applied on apparel, the logo subtly reinforces brand recall and
              positions Nexura as a modern, lifestyle-driven wellness brand.
            </p>
          </div>

          
            <div className="w-full  overflow-hidden rounded-[30px] aspect-[2/3]">
              <img
                src={images.venn}
                alt="Nexura brand pillars"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full overflow-hidden rounded-[30px] aspect-[2/3]">
              <img
                src={images.benefitsStack}
                alt="Nexura wellness benefits"
                className="w-full h-full object-contain"
              />
            </div>
         
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- HAVEN HOUSE PAGE 1 ---------------- */
const HavenHouseSection = ({ images }) => (
  <section className="w-full min-h-screen flex justify-center items-stretch py-6 sm:py-10">
    <div className="relative w-full max-w-10xl bg-white border px-4 sm:px-8 pt-8 pb-16 overflow-hidden">
      {/* guide lines */}
      <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed border-[#c5a98b]" />
      <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-24 border-t border-dashed border-[#c5a98b]" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8">
          <div className="pt-1 sm:pt-2">
            <span className="text-4xl sm:text-5xl font-light tracking-[0.2em] text-[#B17A5C]">
              03
            </span>
          </div>

          <div className="flex-1">
            <h1 className="text-[1.05rem] sm:text-2xl md:text-3xl tracking-[0.25em] text-[#B17A5C] uppercase text-left">
              Haven House – A Community Hub for Refugees
            </h1>
          </div>
        </div>

        {/* Collage images */}
        <div className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-3">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-full bg-[#D6C4AF] overflow-hidden shadow-sm aspect-[3/5]"
            >
              <img
                src={src}
                alt={`Haven House collage ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- HAVEN HOUSE PAGE 2 ---------------- */
const HavenHousePlansSection = ({
  groundPlan,
  firstPlan,
  collageImages,
  programMaps,
}) => (
  <section className="w-full min-h-screen flex justify-center items-stretch pb-10 sm:pb-16">
    <div className="relative w-full max-w-10xl bg-white border  px-4 sm:px-8 pt-8 pb-16 overflow-hidden">
      {/* guide lines */}
      <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed border-[#c5a98b]" />
      <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-24 border-t border-dashed border-[#c5a98b]" />

      <div className="relative z-10">
        {/* TOP GRID */}
        <div className="mt-8 sm:mt-10 grid gap-8 md:grid-cols-3">
          {/* Ground floor */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-xs sm:text-sm tracking-[0.18em] text-[#5a4739]">
              Ground floor
            </p>
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img
                src={groundPlan}
                alt="Ground floor plan"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* collage */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {collageImages.map((src, idx) => (
              <div
                key={idx}
                className="w-full  aspect-[4/5] overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Haven reference ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* first floor */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-xs sm:text-sm tracking-[0.18em] text-[#5a4739]">
              First floor
            </p>
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img
                src={firstPlan}
                alt="First floor plan"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="mt-10 sm:mt-12 grid gap-8 md:grid-cols-3">
          {/* text left */}
          <div className="text-[0.75rem] sm:text-sm leading-relaxed text-[#4A3B33]">
            <p>
              This is the first-stop space—providing day-one essentials,
              immediate assistance, and basic resources to help refugees settle
              in. Designed to offer a sense of safety and support, this floor
              includes a universally accessible community restroom, a welcoming
              reception area, a legal aid office for urgent guidance, and a
              conference room where refugees can discuss their future plans with
              advisors. It serves as a crucial starting point, ensuring
              newcomers feel supported and informed from the moment they arrive.
            </p>
          </div>

          {/* centre – program maps + legend */}
          <div className="flex flex-col items-center gap-4">
            <div className="grid grid-cols-3 gap-3 w-full max-w-md">
              {programMaps.map((src, idx) => (
                <div
                  key={idx}
                  className="w-full  aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Program map ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:gap-6 text-[0.1rem] sm:text-xs md:text-xs text-[#4A3B33]">
              <LegendDot label="Safety" color="#F4A3A1" />
              <LegendDot label="Belonging" color="#5CC4FF" />
              <LegendDot label="Comfort" color="#E9E0C3" />
              <LegendDot label="Opportunity" color="#C4A6FF" />
              <LegendDot label="Guidance" color="#7E7A7A" />
            </div>
          </div>

          {/* right text */}
          <div className="text-[0.75rem] sm:text-sm leading-relaxed text-[#4A3B33]">
            <p>
              The first floor is designed to foster community, learning, and
              personal growth. It features a dining hall and kitchen, creating a
              welcoming space for shared meals and connection. Two classrooms
              support daily learning sessions, while a conference room provides
              a dedicated space for meetings and discussions. Additionally,
              multiple seating arrangements ensure that refugees have a
              comfortable environment to relax, collaborate, and focus on
              rebuilding their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- HAVEN HOUSE PAGE 3 (VERTICAL) ---------------- */
const HavenHouseVerticalSection = ({
  secondPlan,
  crossSection,
  frontElevation,
  programDiagrams,
  sculptureImages,
}) => {
  const programImage = programDiagrams[0]; // tall stacked diagram

  return (
    <section className="w-full flex justify-center items-stretch pb-10 sm:pb-16">
      <div className="relative w-full max-w-10xl bg-white border px-4 sm:px-8 pt-8 pb-16 overflow-hidden">
        {/* guide lines */}
        <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed border-[#c5a98b]" />
        <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-24 border-t border-dashed border-[#c5a98b]" />

        <div className="relative z-10">
          {/* -------- ROW 1: 3 ITEMS, CROSS-SECTION BIG IN MIDDLE -------- */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Second floor */}
            <div className="lg:col-span-3 flex flex-col items-center">
              <p className="mb-2 text-xs sm:text-sm tracking-[0.18em] text-[#5a4739]">
                Second floor
              </p>
              <div className="w-full  aspect-[7/9] overflow-hidden">
                <img
                  src={secondPlan}
                  alt="Second floor plan"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Middle: BIG cross section */}
            <div className="lg:col-span-6">
              <p className="mb-2 text-xs sm:text-sm tracking-[0.18em] text-center text-[#5a4739]">
                Cross Section
              </p>
              <div className="w-full aspect-[10/6] overflow-hidden">
                <img
                  src={crossSection}
                  alt="Cross section drawing"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right: tall program diagram WITH TEXT */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
              <p className="mb-3 text-xs sm:text-sm tracking-[0.18em] text-[#5a4739]">
                Program Diagram
              </p>

              <div className="flex flex-row items-start ">
                {/* tall diagram */}
                <div className="w-52 sm:w-40 lg:w-74 aspect-[5/7] gap-1 overflow-hidden">
                  <img
                    src={programImage}
                    alt="Program diagram"
                    className="w-full h-full "
                  />
                </div>

                {/* TEXT LIST */}
                <div className="text-[0.7rem] sm:text-xs text-[#4A3B33]  leading-tight space-y-4">
                  <div>
                    <p className="font-semibold">Second Floor</p>
                    <p>Healing, Wellness &amp; Growth</p>
                    <p>Soul of the centre</p>
                    <p>Processing trauma</p>
                    <p>Building confidence</p>
                    <p>Future planning</p>
                  </div>

                  <div>
                    <p className="font-semibold">First Floor</p>
                    <p>Community, Culture </p>
                    <p>&amp; Skill-Building </p>
                    <p>Beating heart</p>
                    <p>Connection</p>
                    <p>Community</p>
                    <p>Contribution</p>
                  </div>

                  <div>
                    <p className="font-semibold">Ground Floor</p>
                    <p>Survival &amp; Practical support</p>
                    <p>First-stop space</p>
                    <p>Day-one essentials</p>
                    <p>Immediate help</p>
                    <p>Basic resources.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------- ROW 2: 3 ITEMS, LIKE BOARD -------- */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Left text */}
            <div className="lg:col-span-4 text-[0.75rem] sm:text-sm text-[#4A3B33] leading-relaxed">
              <p>
                The second floor focuses on healing, wellness, and long-term
                personal growth. It offers a calm, supportive environment with a
                library for quiet reflection, several counseling rooms, and a
                prayer room. A staff office ensures accessible assistance, while
                the conference room is suited for workshops and group
                discussions. The work lounge provides a flexible space for
                studying, working, or relaxing, encouraging recovery and
                resilience.
              </p>
            </div>

            {/* middle elevation + text */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-xl  aspect-[15/7] overflow-hidden opacity-80">
                <img
                  src={frontElevation}
                  alt="Front elevation"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-[0.75rem] sm:text-sm text-[#4A3B33] leading-relaxed">
                The front elevation of our site at 305 7th Avenue showcases its
                prominent location in the heart of the Flatiron District,
                creating a welcoming presence for the refugee centre.
              </p>
            </div>

            {/* Right: sculptures */}
            <div className="w-30 h-50 overflow-hidden">
              <img
                src={sculptureImages[0]}
                alt="sculptureImages"
                className="w-full h-full "
              />
            </div>
            <div className="w-30 h-50 overflow-hidden">
              <img
                src={sculptureImages[1]}
                alt="sculptureImages"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- SMALL LEGEND DOT COMPONENT ---------- */
const LegendDot = ({ label, color }) => (
  <div className="flex items-center gap-2">
    <span
      className="inline-block w-4 h-4 sm:w-5 sm:h-5 rounded-full"
      style={{ backgroundColor: color }}
    />
    <span>{label}</span>
  </div>
);

export default Interior;
