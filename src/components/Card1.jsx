function Card({ icon, name, followers, jours, platform, darkMode }) {
  const isNegative = jours.includes("144");

  const topColor = {
    facebook: "bg-facebook",
    twitter: "bg-twitter",
    instagram: "bg-gradient-to-r from-orange-300 to-pink-500",
    youtube: "bg-youtube",
  };

  return (
    <section className={`relative flex flex-col items-center text-center rounded-md px-6 py-7 overflow-hidden hover:bg-gray-200 transition duration-200 ${darkMode ? "bg-dark-card-bg" : "bg-light-card-bg"}`}>
      
      <div className={`absolute top-0 left-0 w-full h-1 ${topColor[platform]}`}> </div>

      <div className="flex items-center gap-2 mt-2">
        <img src={icon} alt="" className="w-5 h-5" />

        <span className={`text-xs font-bold ${darkMode ? "text-dark-text" : "text-light-text" }`}>
          {name}
        </span>
      </div>

      <div className="mt-6">
        <h2 className={`text-5xl font-bold leading-none ${darkMode ? "text-dark-white-text" : "text-light-very-dark-text"}`}>
          {followers}
        </h2>

        <p className="mt-2 text-xs tracking-[0.35em] text-light-text">
          FOLLOWERS
        </p>
      </div>

      <div className="mt-6">
        <p className={`text-xs font-bold ${isNegative ? "text-bright-red" : "text-lime-green"}`}>
          {isNegative ? "▼" : "▲"} {jours}
        </p>
      </div>
    </section>
  );
}

export default Card;