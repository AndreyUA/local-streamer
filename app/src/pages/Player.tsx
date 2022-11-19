import { useParams } from "react-router-dom";

import calculateCurrentUrl from "../utils/calculateCurrentUrl";

const Player = () => {
  const { id } = useParams();

  return (
    <video controls>
      <source
        src={`${calculateCurrentUrl()}/stream/${id}`}
        type="video/mp4"
      ></source>
    </video>
  );
};

export default Player;
