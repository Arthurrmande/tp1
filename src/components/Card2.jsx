import iconUp from "../images/icon-up.svg";
import iconDown from "../images/icon-down.svg";

import { getIcon } from "../icon/icon.js";

function Card2({ platform, indicateur, montant, pourcentage, darkMode }) {
  const isNegative = pourcentage.startsWith("-");

  return (
    <section className={`rounded-lg p-6 transition ${darkMode ? "bg-dark-card-bg hover:bg-gray-700" : "bg-light-card-bg hover:bg-gray-200"}`}>
      
      <div className="flex items-center justify-between">
        <span className={`text-sm font-bold ${darkMode ? "text-dark-text" : "text-light-text"}`}>
          {indicateur}
        </span>

        <img src={getIcon(platform)} alt="" className="w-5 h-5" />
      </div>

      <div className="flex items-end justify-between mt-6">
        <h2 className={`counter text-3xl font-bold ${darkMode ? "text-dark-white-text" : "text-light-very-dark-text" }`} style={{ "--final": montant }}></h2>

        <div className="flex items-center gap-1">
          <img src={isNegative ? iconDown : iconUp} alt="" />

          <span className={`text-xs font-bold ${isNegative ? "text-bright-red" : "text-lime-green"}`}>
            {pourcentage.replace("+", "")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Card2;
