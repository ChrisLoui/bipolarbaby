import React, { useState } from "react";

const movies = [
  { id: 1, title: "When Harry Met Sally...", emoji: "🥤" },
  { id: 2, title: "Chungking Express", emoji: "🎥" },
  { id: 3, title: "How to make millions before grandma dies", emoji: "👵" },
  { id: 4, title: "Bowling", emoji: "🎳" },
];

const MovieCheck = () => {
  const [checkedMovies, setCheckedMovies] = useState({});

  const handleCheck = (id) => {
    setCheckedMovies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="border-2 rounded-lg border-black flex justify-between items-center p-2 mb-2"
        >
          <div className="flex items-center">
            <h1 className="text-2xl p-2">{movie.emoji}</h1>
            <span
              className={`transition-all duration-500 ${checkedMovies[movie.id] ? "line-through text-green-600" : ""
                }`}
            >
              {movie.title}
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleCheck(movie.id)}
              className={`px-4 py-2 rounded-md transition duration-300 ${checkedMovies[movie.id]
                ? "bg-blue-500  text-black border-2"
                : "border-2 border-black text-white hover:bg-blue-700"
                }`}
            >
              {checkedMovies[movie.id] ? "✓" : ""}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCheck;
