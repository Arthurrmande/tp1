function Button({ darkMode, setDarkMode }) {

    return (
        <button onClick={() => setDarkMode(!darkMode)} className={`relative w-12 h-6 rounded-full transition ${darkMode ? "bg-gradient-to-r from-blue-400 to-green-400" : "bg-light-toggle"}`}>
            <span className={`absolute top-1 w-4 h-4 rounded-full transition-all ${darkMode ? "left-1 bg-dark-bg" : "left-7 bg-white"}`}/>
        </button>
  );
}

export default Button;