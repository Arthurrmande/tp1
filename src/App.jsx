import Card from "./components/Card1";
import Card2 from "./components/Card2";
import Button from "./components/Button";
import data from "./data/data.js";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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

          <Button darkMode={darkMode} setDarkMode={setDarkMode}/>

        </div>
      </header>

      <ul className="grid grid-cols-4 gap-8 px-40 pt-12">
        {data.map((item, index) => (
          <li key={index}>
            <Card
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
          {data.map((item) =>
            item.stats.map((stat, index) => (
              <li key={`${item.platform}-${index}`}>
                <Card2
                  platform={item.platform}
                  indicateur={stat.indicateur}
                  montant={stat.montant}
                  pourcentage={stat.pourcentage}
                  darkMode={darkMode}
                />
              </li>
            ))
          )}
        </ul>
      </section>
    
    </main>
  );
}

export default App;
