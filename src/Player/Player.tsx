import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import ControlButtons from "./ControlButtons";
import PlaybackTimeline from "./PlaybackTimeline";
import SoundBadge from "./SoundBadge";
import Actions from "./Actions";
import { RecoilRoot } from "recoil";
import AudioTag from "./AudioTag";
import VolumeButton from "./VolumeButton";

export default function Player() {
  return (
    <>
      <Global
        styles={css`
          button {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
          }
        `}
      />
      <RecoilRoot>
        <OuterBar>
          <InnerBar>
            <ControlButtons />
            <PlaybackTimeline />
            <VolumeButton />
            <SoundBadge />
            <Actions />
          </InnerBar>
        </OuterBar>
        <AudioTag />
      </RecoilRoot>
    </>
  );
}

const OuterBar = styled.div({
  backgroundColor: "#f2f2f2",
  borderTop: "1px solid #cecece",
  position: "fixed",
  bottom: 0,
  visibility: "visible",
  width: "100%",
  height: "48px",
  zIndex: 1001,
});

const InnerBar = styled.div`
  background-color: #f2f2f2;
  width: 960px;
  height: 100%;
  visibility: visible;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (min-width: 1080px) {
    width: 1080px;
  }
`;
