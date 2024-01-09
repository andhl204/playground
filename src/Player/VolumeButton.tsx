import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { musicRefState } from "../recoil/music";

export default function VolumeButton() {
  const musicRef = useRecoilValue(musicRefState);
  const onVolumeButtonClick = () => {
    if (musicRef) {
      if (musicRef.muted) {
        musicRef.muted = false;
      } else {
        musicRef.muted = true;
      }
    }
  };
  return <Button backgroundImage={"buttons/volume.png"} onClick={onVolumeButtonClick} />;
}

const Button = styled.button`
  background-image: url(${(props: { backgroundImage: string }) => props.backgroundImage});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 12px;
  width: 24px;
  height: 46px;
`;
