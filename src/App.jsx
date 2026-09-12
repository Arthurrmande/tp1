import Card from "./components/Card1";
import Card2 from "./components/Card2";
import data from "./data/data.js";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const overviewData = [
    // Facebook
    { ...data[0].stats[0], icon: data[0].icon },
    { ...data[0].stats[1], icon: data[0].icon },

    // Instagram
    { ...data[2].stats[0], icon: data[2].icon },
    { ...data[2].stats[1], icon: data[2].icon },

    // Twitter
    { ...data[1].stats[0], icon: data[1].icon },
    { ...data[1].stats[1], icon: data[1].icon },

    // Youtube
    { ...data[3].stats[0], icon: data[3].icon },
    { ...data[3].stats[1], icon: data[3].icon },
  ];

  return (
    <main className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-dark-bg" : "bg-light-bg"}`}>
      
      <header className="px-40 pt-10 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${darkMode ? "text-dark-white-text" : "text-light-very-dark-text"}`}>
            Social Media Dashboard
          </h1>

          <p className={`font-bold ${darkMode ? "text-dark-text" : "text-light-text"}`}>
            Total Followers: 23,004
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className={`font-bold ${darkMode ? "text-dark-white-text" : "text-light-text"}`}>
            Dark Mode
          </span>

          <button onClick={() => setDarkMode(!darkMode)} className={`relative w-12 h-6 rounded-full transition ${darkMode ? "bg-gradient-to-r from-blue-400 to-green-400" : "bg-light-toggle"}`}>
            <span className={`absolute top-1 w-4 h-4 rounded-full transition-all ${darkMode ? "left-1 bg-dark-bg" : "left-7 bg-white"}`}/>
          </button>
        </div>
      </header>

      <ul className="grid grid-cols-4 gap-8 px-40 pt-12">
        {data.map((item, index) => (
          <li key={index}>
            <Card
              icon={item.icon}
              name={item.name}
              followers={item.followers}
              jours={item.jours}
              platform={item.platform}
              darkMode={darkMode}
            />
          </li>
        ))}
      </ul>

      <section className="px-40 pt-12 pb-10">
        <h2 className={`font-bold text-2xl mb-6 ${darkMode ? "text-dark-white-text" : "text-light-text"}`}>
          Overview - Today
        </h2>

        <ul className="grid grid-cols-4 gap-6">
          {overviewData.map((item, index) => (
            <li key={index}>
              <Card2
                icon={item.icon}
                indicateur={item.indicateur}
                montant={item.montant}
                pourcentage={item.pourcentage}
                darkMode={darkMode}
              />
            </li>
          ))}
        </ul>
      </section>
    
    </main>
  );
}

export default App;
