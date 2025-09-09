// src/components/Testimonial.jsx
import React from "react";


const AVATAR_1 =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop";
const AVATAR_2 =
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=600&auto=format&fit=crop";
const AVATAR_3 =
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop";

const Testimonial = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto max-w-[1200px] px-6 pt-6 pb-12 relative">
        {/* Top bar: brand + date */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[12px] tracking-[0.28em] leading-none">ICONIC</span>
          <span className="text-[11px] leading-none px-3 py-1 rounded-full border border-black/20 bg-white">
            15 May 2020
          </span>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-[1.2fr_1fr] items-start gap-6 border-b border-black/10 pb-6 mb-10">
          <h2 className="text-[64px] md:text-[88px] lg:text-[96px] leading-[0.95] font-extrabold tracking-tight">
            TESTIMONIAL
          </h2>
          <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed mt-2">
            Collaboratively off cursus et sed taciti rutrum diam. Aliquam erat
            pellentesque, malesuada ornare dignissim.
          </p>
        </div>

        {/* Three columns with thin vertical dividers */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vertical dividers (use pseudo columns for exact look) */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-black/15" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-black/15" />

          {/* LEFT card: lorem example block */}
          <div className="pr-4">
            <h3 className="uppercase tracking-[0.2em] text-[12px] text-black/70 mb-3">
              Lorem Example
            </h3>
            <p className="text-[13px] leading-6 text-black/70">
              DIn dictum quam varius sociosqu habitant taciti. Curabitur
              vulputate semper nascetur. At mi ante volutpat amet in faucibus
              cum sociosqu. Eros mi etiam volutpat ante quis conubia; sem
              senectus, auctor non.
            </p>
          </div>

          {/* MIDDLE card: Mary Smith */}
          <div className="px-4">
            <div className="mx-auto h-24 w-24 rounded-full overflow-hidden mb-4">
              <img
                src={AVATAR_1}
                alt="Mary Smith"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="text-center">
              <div className="font-semibold tracking-wide">MARY SMITH</div>
              <div className="text-[11px] tracking-[0.22em] text-black/60 mt-1">
                CEO FOUNDER
              </div>
              <p className="text-[13px] leading-6 text-black/70 mt-3">
                On quis volutpat tristique faucibus sem suscipit. Etiam
                consequat felis conubia vivamus euismod. Etiam suscipit
                lectus.
              </p>
            </div>
          </div>

          {/* RIGHT card: James Smith */}
          <div className="pl-4">
            <div className="mx-auto h-24 w-24 rounded-full overflow-hidden mb-4">
              <img
                src={AVATAR_2}
                alt="James Smith"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="text-center">
              <div className="font-semibold tracking-wide">JAMES SMITH</div>
              <div className="text-[11px] tracking-[0.22em] text-black/60 mt-1">
                CEO FOUNDER
              </div>
              <p className="text-[13px] leading-6 text-black/70 mt-3">
                On quis volutpat tristique faucibus sem suscipit. Etiam
                consequat felis conubia vivamus euismod. Etiam suscipit
                lectus.
              </p>
            </div>
          </div>

          {/* Salmon circle accent overlapping the middle divider */}
          <div className="hidden md:block absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-[#e8746b] opacity-90" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
