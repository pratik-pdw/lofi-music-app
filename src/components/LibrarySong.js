import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  setSongs,
  songs,
  setIsPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt="Song Cover" src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
