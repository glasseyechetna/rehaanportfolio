// src/pages/Collection.jsx
import React from "react";

const Collection = () => {
  /* ---------- PAGE 1 IMAGES ---------- */
  const collageImages = [
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
      {/* PAGE 1 */}
      <HavenHouseSection images={collageImages} />

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

/* ---------------- PAGE 1 ---------------- */
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

/* ---------------- PAGE 2 ---------------- */
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
              <LegendDot label="Safety" color="#F4A3A1"/>
              <LegendDot label="Belonging" color="#5CC4FF"/>
              <LegendDot label="Comfort" color="#E9E0C3"/>
              <LegendDot label="Opportunity" color="#C4A6FF"/>
              <LegendDot label="Guidance" color="#7E7A7A"/>
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

/* ---------------- PAGE 3 (FIXED LAYOUT) ---------------- */
const HavenHouseVerticalSection = ({
  secondPlan,
  crossSection,
  frontElevation,
  programDiagrams,
  sculptureImages,
}) => {
  const programImage = programDiagrams[0]; // your tall stacked diagram

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

           {/* Right: tall program diagram WITH TEXT (exact like your screenshot) */}
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

    {/* TEXT LIST (exact from your PDF) */}
    <div className="text-[0.7rem] sm:text-xs text-[#4A3B33]  leading-tight space-y-4">

      <div>
        <p className="font-semibold">Second Floor</p>
        <p>Healing, Wellness & Growth</p>
        <p>Soul of the centre</p>
        <p>Processing trauma</p>
        <p>Building confidence</p>
        <p>Future planning</p>
      </div>

      <div>
        <p className="font-semibold">First Floor</p>
        <p>Community, Culture </p>
        <p>& Skill-Building </p>
          <p>Beating heart</p>
        <p>Connection</p>
        <p>Community</p>
        <p>Contribution</p>
      </div>

      <div>
        <p className="font-semibold">Ground Floor</p>
        <p>Survival & Practical support</p>
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

export default Collection;
