import React, { useEffect, useState } from "react";

// Adding Components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Importing Styles
import "./styles/app.scss";

//Importing Data
import data from "./data";

const App = () => {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(
    songs.filter((s) => s.active)[0]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  useEffect(() => {
    const newSongs = songs.map((s) => {
      return { ...s, active: s.id === currentSong.id };
    });
    setSongs(newSongs);
  }, [currentSong]);

  return (
    <div className={`App ${isLibraryOpen ? "library-active" : ""}`}>
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        setIsPlaying={setIsPlaying}
        isLibraryOpen={isLibraryOpen}
        setSongs={setSongs}
        setIsLibraryOpen={setIsLibraryOpen}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
      <Footer />
    </div>
  );
};

export default App;
