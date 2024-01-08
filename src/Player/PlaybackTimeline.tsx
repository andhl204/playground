import styled from "@emotion/styled";

export default function PlaybackTimeline() {
  return (
    <>
      <TimelineWrapper>
        <TimePassed>0:02</TimePassed>
        <PlayTrack>
          <ProgressBackground />
          <ProgressBar />
          <ProgressHandle />
        </PlayTrack>
        <Duration>3:37</Duration>
      </TimelineWrapper>
      <VolumeButton backgroundImage={"buttons/volume.png"} />
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

const PlayTrack = styled.div`
  margin: 13px 10px 0;
  padding: 10px 0;
  width: 252px;
  height: 13px;
  position: relative;

  @media (min-width: 1080px) {
    width: 352px;
  }
`;

const ProgressBackground = styled.div`
  height: 1px;
  background-color: #ccc;
  width: 100%;
  position: absolute;
`;

const ProgressBar = styled.div`
  min-width: 1px;
  height: 1px;
  background-color: #f50;
  position: absolute;
`;

const ProgressHandle = styled.div`
  border: 1px solid #f50;
  background-color: #f50;
  margin-top: 4px;
  border-radius: 100%;
  height: 8px;
  width: 8px;
  box-sizing: border-box;
  margin-left: 4px;
  opacity: 0;
  transition: opacity 0.15s;
  position: absolute;
`;

const Duration = styled.div`
  width: 50px;
  color: #333;
  text-align: left;
  padding-top: 2px;
`;

const VolumeButton = styled.button`
  background-image: url(${(props: { backgroundImage: string }) => props.backgroundImage});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 12px;
  width: 24px;
  height: 46px;
`;
