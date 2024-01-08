import styled from "@emotion/styled";

export default function ControlButtons() {
  return (
    <>
      <ControlButton backgroundImage={"buttons/previous.png"} />
      <ControlButton backgroundImage={"buttons/play.png"} />
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
