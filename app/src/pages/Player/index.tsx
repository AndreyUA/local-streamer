import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled as materialStyled } from "@mui/material/styles";

import styled from "styled-components";

import calculateCurrentUrl from "../../utils/calculateCurrentUrl";

const StyledContainer = materialStyled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Video = styled.video`
  width: 100%;
`;

// TODO: add here title with film name
const Player = () => {
  const { id } = useParams();

  return (
    <StyledContainer>
      <Video controls>
        <source
          src={`${calculateCurrentUrl()}/stream/${id}`}
          type="video/mp4"
        ></source>
      </Video>
    </StyledContainer>
  );
};

export default Player;
