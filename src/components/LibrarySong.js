import React from "react";
const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    setCurrentSong(song);
    const newSongs = songs.map((eachSong) => {
      if (eachSong.id === song.id) {
        return {
          ...eachSong,
          active: true,
        };
      } else {
        return {
          ...eachSong,
          active: false,
        };
      }
    });
    await setSongs(newSongs);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      {" "}
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3> {song.name} </h3>
        <h4> {song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
