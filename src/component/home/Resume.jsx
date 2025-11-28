import React from "react";


const RESUME_URL =
  "https://drive.google.com/file/d/1TYPc_5f_75XC_Kmr_hQqP9RBxGqkfb6q"; 

const Resume = () => {
  return (
  <section className="bg-[#e6d0b6] ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full h-full flex items-center justify-center ">
          <img
            src={'https://res.cloudinary.com/dp5koojwa/image/upload/v1764150095/51_cdnclf.png'}
            alt="Profile"
            className="w-full h-auto "
          />
        </div>

       

        {/* Right Side - Details */}
        <div className="bg-white  ">
          

            <div className=" items-center">
  <a
    href={RESUME_URL}
    download="Rehaan-Tuli-Resume.pdf"
    className="text-black text-[20px]  hover:bg-[#e8d6c0] transition"
  >
    Download Resume
  </a>
</div>


          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#C6A662]">
                Rehaan Tuli
              </h1>
              <h2 className="text-lg font-semibold text-gray-800">480 2nd Ave, New York, NY</h2>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p className=" text-[#C6A662] font-bold">DESIGNER</p>
            
              
            </div>
          </div>
          
          {/* Info Sections */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-800">
            {/* Education */}
            <div>
              <h3 className="font-bold mb-2">EDUCATION</h3>
              <p>
              
     Parsons School of Design<br />
     BFA in Interior Design
               </p>
            </div>

               {/* Experience */}
            <div>
              <h3 className="font-bold mb-2">Experience</h3>
              <p>
             <ul className="space-y-1"> 
 
 <li> Management Associate | Jul 2021 –Present</li>
 <li>Sales & Marketing Intern | Aug 2022 – Jan 2023</li>
<li>Affiliate Partner | May 2020 – Jan 2021</li>
             </ul> 
               </p>
            </div>

            {/* Right small box */}
            <div className="flex items-center justify-center border border-gray-400 text-xs p-2">
              <span className="text-gray-500">929-727-7000</span>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-bold mb-2">SKILLS</h3>
              <ul className="space-y-1">

   <li>Software: AutoCAD, SketchUp, Vray, Photoshop, InDesign, Revit</li>
   <li>Expertise: Concept development, spatial strategy, material curation.</li>
   <li> Strengths: Brand storytelling, project leadership, client relations.</li>

               
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-bold mb-2">LANGUAGE</h3>
            
              <p>English</p>
              <p>Hindi</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-2">CONTACT</h3>
              <p>Email: rehaantuli2@gmail.com</p>
              <p>LinkedIn: linkedin.com/in/rehaan-tuli </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>   
       
  );
};

export default Resume;
