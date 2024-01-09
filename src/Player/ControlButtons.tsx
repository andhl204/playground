import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { musicRefState, playingState } from "../recoil/music";

export default function ControlButtons() {
  const playing = useRecoilValue(playingState);
  const musicRef = useRecoilValue(musicRefState);
  const onPlayClick = () => {
    if (playing) {
      musicRef?.pause();
    } else {
      musicRef?.play();
    }
  };

  return (
    <>
      <ControlButton backgroundImage={"buttons/previous.png"} />
      <ControlButton backgroundImage={"buttons/play.png"} onClick={onPlayClick} />
      <ControlButton backgroundImage={"buttons/next.png"} />
      <ControlButton backgroundImage={"buttons/shuffle.png"} />
      <ControlButton backgroundImage={"buttons/repeat.png"} css={{ marginRight: "24px" }} />
    </>
  );
}

const ControlButton = styled.button`
  background-image: url(${(props: { backgroundImage: string }) => props.backgroundImage});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 100%;
  margin-left: 12px;
`;
