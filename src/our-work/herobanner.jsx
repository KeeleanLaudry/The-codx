import React from "react";

export default function HeroBanner() {
  return (
    <section className="px-6  pb-16 ">
      
      {/* Hero Container */}
      <div
        className="relative max-h-full  shadow-2xl"
        style={{
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-d-rendering-of-coworking-office-showing-computer-screens-for-online-schooling-image_3912466.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "650px",
        }}
      >
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          
          <div className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-6 mx-auto text-5xl`}>
       <h1 className={`gradient-text bg-clip-text font-inria  text-transparent font-semibold leading-tight pb-2`}>
              Transforming Brands, One Project at a Time
</h1>
            
           
            {/* Description */}
            <p className="text-gray-200 text-lg max-w-3xl leading-relaxed">
              At Codx, every project reflects our commitment to understanding
              our clients’ vision, industry, and business goals. We combine
              creative design with strategic digital solutions, helping brands
              evolve online, connect meaningfully with their audience, and
              achieve tangible results. From startups to luxury enterprises,
              our holistic approach ensures each brand thrives in a competitive
              digital landscape.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}