import styled from "@emotion/styled";

export default function Actions() {
  return (
    <ActionsWrapper>
      <ActionButton backgroundImage={"buttons/heart.png"} />
      <ActionButton backgroundImage={"buttons/follow.png"} />
      <ActionButton backgroundImage={"buttons/playlist.png"} />
    </ActionsWrapper>
  );
}

const ActionsWrapper = styled.div`
  margin-left: 7px;
  height: 24px;
  display: flex;
`;

const ActionButton = styled.div`
  background-image: url(${(props: { backgroundImage: string }) => props.backgroundImage});
  background-size: 16px auto;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 100%;
`;
