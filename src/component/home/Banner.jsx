import React from "react";



const Banner = () => {
  const colors = [
    { name: "Soft Cream", hex: "#F8F5F0" },
    { name: "Light Sand", hex: "#E7E2D7" },
    { name: "Charcoal Black", hex: "#262626" },
    { name: "Graphite Grey", hex: "#494949" },
    { name: "Warm Taupe", hex: "#A3947A" },
    { name: "Off-White Beige", hex: "#F3EEE6" },
  ];

  return (
    <>
    
    <section className="bg-white">
      
      <div className=" mx-auto relative">
        {/* Portfolio Image */}
        <div className="h-180">
        <img
          src={"https://res.cloudinary.com/dp5koojwa/image/upload/v1756974153/Screenshot_2025-09-04_at_1.48.24_PM_ymog5h.png"}
          alt="Portfolio Cover"
          className="w-full h-full"
        />
        
        </div>
        
        </div>

        
    </section>



</>

    );
};

export default Banner;
