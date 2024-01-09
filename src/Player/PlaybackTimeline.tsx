import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { currentTimeState, musicRefState, musicState } from "../recoil/music";
import { useRef } from "react";

export default function PlaybackTimeline() {
  const { duration } = useRecoilValue(musicState);
  const currentTime = useRecoilValue(currentTimeState);
  const musicRef = useRecoilValue(musicRefState);
  const handleRef = useRef(null);

  const formatedCurrentTime = (time: number) => {
    const minutes = Math.floor(time / 60),
      seconds = Math.floor(time) % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const onProgressBackgroundClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (musicRef) {
      musicRef.currentTime = ((event.clientX - rect.x) / rect.width) * duration;
    }
  };

  const currentTimePercentage = currentTime / duration;

  return (
    <>
      <TimelineWrapper>
        <TimePassed>{formatedCurrentTime(currentTime)}</TimePassed>
        <PlayTrack onClick={onProgressBackgroundClick}>
          <ProgressBackground />
          <ProgressBar width={currentTimePercentage || 0.01} />
          <ProgressHandle xPosition={currentTimePercentage} ref={handleRef} />
        </PlayTrack>
        <Duration>{formatedCurrentTime(duration)}</Duration>
      </TimelineWrapper>
    </>
  );
}

const TimelineWrapper = styled.div`
  font-size: 12px;
  display: flex;
  height: 46px;
  line-height: 46px;
  width: 372px;
  margin-right: 12px;

  @media (min-width: 1080px) {
    width: 472px;
  }
`;

const TimePassed = styled.div`
  width: 50px;
  color: #f50;
  text-align: right;
  padding-top: 2px;
`;

const ProgressBackground = styled.div`
  height: 1px;
  background-color: #ccc;
  width: 100%;
  position: absolute;
`;

const ProgressBar = styled.div<{ width: number }>`
  min-width: 1px;
  width: ${(props) => props.width * 100}%;
  height: 1px;
  background-color: #f50;
  position: absolute;
`;

const ProgressHandle = styled.div<{ xPosition: number }>`
  border: 1px solid #f50;
  background-color: #f50;
  border-radius: 100%;
  height: 8px;
  width: 8px;
  box-sizing: border-box;
  margin-top: -3px;
  margin-left: ${(props) => props.xPosition * 252 - 4}px;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 2;
  position: absolute;

  @media (min-width: 1080px) {
    margin-left: ${(props) => props.xPosition * 352 - 4}px;
  }
`;

const PlayTrack = styled.div`
  margin: 13px 10px 0;
  padding: 10px 0;
  width: 252px;
  height: 13px;
  position: relative;
  cursor: pointer;

  &:hover {
    ${ProgressHandle} {
      opacity: 1;
    }
  }

  @media (min-width: 1080px) {
    width: 352px;
  }
`;

const Duration = styled.div`
  width: 50px;
  color: #333;
  text-align: left;
  padding-top: 2px;
`;
