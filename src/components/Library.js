import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Library = ({
  songs,
  setCurrentSong,
  setSongs,
  isLibraryOpen,
  setIsLibraryOpen,
  setIsPlaying,
}) => {
  return (
    <div className={`library ${isLibraryOpen ? "library-open" : ""}`}>
      <div className="library-header">
        <h2>Library</h2>
        <FontAwesomeIcon
          onClick={() => setIsLibraryOpen(!isLibraryOpen)}
          className="closebtn"
          icon={faTimes}
        />
      </div>

      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              setIsPlaying={setIsPlaying}
              songs={songs}
              setSongs={setSongs}
              setCurrentSong={setCurrentSong}
              key={song.id}
              song={song}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
