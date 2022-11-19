import calculateCurrentUrl from "../utils/calculateCurrentUrl";

const Player = () => {
  return (
    <video controls>
      <source src={`${calculateCurrentUrl()}/stream`} type="video/mp4"></source>
    </video>
  );
};

export default Player;
