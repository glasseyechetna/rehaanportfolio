// src/pages/Product.jsx
import React from "react";

const Product = () => {
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

  return (
    <main className="w-full bg-[#e6d0b6]">
      <NexuraIntroSection images={nexuraIntroImages} />
      <NexuraDetailsSection images={nexuraPage2Images} />
      <NexuraLightingSection images={nexuraPage3Images} />
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
                <span className="font-semibold">Recovery</span>{" "}
                <span className="mx-1">|</span>
                <span className="font-semibold">Fitness</span>{" "}
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
                Sight &nbsp;•&nbsp; Smell &nbsp;•&nbsp; Sound &nbsp;•&nbsp; Touch
                &nbsp;•&nbsp; Taste
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
      <div className="pointer-events-none absolute top-6 bottom-6 left-10 sm:left-16 border-l border-dashed" />
      <div className="pointer-events-none absolute left-10 sm:left-16 right-6 sm:right-10 top-24 border-t border-dashed" />

      <div className="relative z-10 space-y-10">
        {/* Top row: sections + lighting plan */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr,1.5fr] items-start">
          {/* Sections */}
          <div className="space-y-4">
            <div className="w-full bg-[#D6C4AF] overflow-hidden">
              <img
                src={images.sectionBB}
                alt="Section BB’"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full bg-[#D6C4AF] overflow-hidden">
              <img
                src={images.sectionAA}
                alt="Section AA’"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Lighting plan */}
          <div className="space-y-4 text-[11px] sm:text-xs md:text-[13px] text-[#5F4A3B] leading-relaxed">
            <div className="w-full bg-[#111] overflow-hidden">
              <img
                src={images.lightingPlan}
                alt="Lighting plan"
                className="w-full h-full object-cover"
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

        {/* Middle row: two green renders */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[40px] overflow-hidden aspect-[16/9] bg-[#D6C4AF]">
            <img
              src={images.studyLounge}
              alt="Physical model – study lounge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-[40px] overflow-hidden aspect-[16/9] bg-[#D6C4AF]">
            <img
              src={images.podRoom}
              alt="Physical model – float pod room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom row: logo + tshirt + diagrams */}
        <div className="grid gap-6 md:grid-cols-4 text-[11px] sm:text-xs md:text-[13px] text-[#5F4A3B] leading-relaxed">
          {/* Logo column */}
          <div className="space-y-3">
            <div className="w-full bg-[#D6C4AF] overflow-hidden">
              <img
                src={images.logoFrame}
                alt="Nexura logo applications"
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              The Nexura logo was thoughtfully designed to embody the essence of
              a forward-thinking wellness brand. The arrows symbolize progress,
              movement, and personal growth—core to Nexura’s mission.
            </p>
          </div>

          {/* T-shirt column */}
          <div className="space-y-3">
            <div className="w-full bg-[#D6C4AF] overflow-hidden flex items-center justify-center aspect-[4/5]">
              <img
                src={images.tshirt}
                alt="Nexura t-shirt mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              The logo on apparel reinforces brand recall in a subtle, wearable
              way, keeping Nexura present in both digital and physical contexts.
            </p>
          </div>

          {/* Venn diagram */}
          <div className="space-y-3">
            <div className="w-full bg-[#D6C4AF] overflow-hidden">
              <img
                src={images.venn}
                alt="Nexura brand pillars"
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              A visual mapping of Nexura’s core pillars—fitness, recovery,
              minimalism, and tech—anchored by holistic wellness at the centre.
            </p>
          </div>

          {/* Benefits stack */}
          <div className="space-y-3">
            <div className="w-full bg-[#D6C4AF] overflow-hidden">
              <img
                src={images.benefitsStack}
                alt="Nexura wellness benefits"
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              Layered benefits—from foundational comfort to emotional
              fulfillment—show how spatial design, technology, and care
              practices combine to elevate overall well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Product;
