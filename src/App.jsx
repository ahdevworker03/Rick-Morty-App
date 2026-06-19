import { useState, useEffect, useCallback } from "react";
import CharacterCard from "./Components/CharacterCard";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  // ✅ 1. We start with loading as true, so the spinner shows immediately on first load
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ 2. Removed setLoading(true) from here.
  // Now, the first thing this function does is 'await'.
  // All setState calls below happen AFTER the await, so they are asynchronous!
  const fetchCharacters = useCallback(async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (!response.ok) {
        throw new Error("Failed to fetch characters");
      }

      const data = await response.json();

      // These are asynchronous, so the linter allows them
      setCharacters(data.results);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ 3. The effect just calls the function. No synchronous setState inside!
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>Loading Characters...</h2>
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <div className="error-container">
        <h2>Error: {error}</h2>

        {/* ✅ 4. We moved setLoading(true) into the EVENT HANDLER! */}
        {/* React perfectly allows synchronous state updates when a user clicks a button */}
        <button
          onClick={() => {
            setLoading(true);
            fetchCharacters();
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  // --- Success State ---
  return (
    <div className="app">
      <header className="app-header">
        <h1>🌌 Rick and Morty Characters</h1>
        <p>Total Characters Loaded: {characters.length}</p>
      </header>

      <div className="characters-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
