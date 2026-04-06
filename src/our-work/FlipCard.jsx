export default function FlipCard({ logo, title, description }) {
  return (
    <div className="group w-full h-[260px]" style={{ perspective: "1000px" }}>

      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
        }}
      >

        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={logo}
            alt={title}
            className="w-38 h-20 object-contain"
          />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-center"
          style={{
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(to bottom right, #0D1F3C, #1a3a5c, #2ABFBF)",
          }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {title}
          </h3>

          <p className="text-base leading-relaxed font-medium text-[#EDE7DF]">
            {description}
          </p>
        </div>

      </div>

      {/* HOVER EFFECT */}
      <style>
        {`
          .group:hover > div {
            transform: rotateX(180deg);
          }
        `}
      </style>

    </div>
  );
}