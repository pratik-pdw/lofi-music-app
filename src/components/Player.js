import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
}) => {
  // ref
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current.paused) {
      console.log(audioRef);
      audioRef.current.play();
    }
  }, [currentSong]);

  const playSongHandler = () => {
    console.log(audioRef);
    // audioRef.current.play();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    // if (currentTime === duration) {
    //   skipSongHandler("skip-forward");
    // }
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipSongHandler = (direction) => {
    const currentSongIndex = songs.findIndex((s) => s.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(
        songs[currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1]
      );
    } else {
      setCurrentSong(
        songs[currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1]
      );
    }
    setIsPlaying(true);
  };

  const getTime = (time) => {
    let minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            style={{
              transform: `translateX(${
                (songInfo.currentTime / songInfo.duration) * 100
              }%)`,
            }}
            className="animate-track"
          ></div>
        </div>

        <p>{getTime(songInfo.duration || 0.0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => {
            skipSongHandler("skip-back");
          }}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        {/* <FontAwesomeIcon  icon={faPause}/> */}
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => {
            skipSongHandler("skip-forward");
          }}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>

      <audio
        onEnded={() => skipSongHandler("skip-forward")}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
