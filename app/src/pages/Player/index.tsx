import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled as materialStyled } from "@mui/material/styles";
import { Player as ReactPlayer } from "video-react";

import calculateCurrentUrl from "../../utils/calculateCurrentUrl";

const StyledContainer = materialStyled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// TODO: add here title with film name
const Player = () => {
  const { id } = useParams();

  return (
    <StyledContainer>
      <ReactPlayer playsInline>
        <source src={`${calculateCurrentUrl()}/stream/${id}`}></source>
      </ReactPlayer>
    </StyledContainer>
  );
};

export default Player;
