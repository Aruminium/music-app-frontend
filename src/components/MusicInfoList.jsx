import React from "react";
import MusicInfo from "./MusicInfo";

const MusicInfoList = ({ datas }) => {
  return datas.map((data, index) => (

    <MusicInfo
      h= {index===0 ? 0 : 140}
      artistName={data.artistName}
      albumName={data.albumName}
      releaseDate={data.releaseDate}
      key={data.id}
    />
  ));
};

export default MusicInfoList;
