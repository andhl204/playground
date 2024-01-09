import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { musicState } from "../recoil/music";

export default function SoundBadge() {
  const { title, artist } = useRecoilValue(musicState);

  return (
    <SoundBadgeWrapper>
      <AlbumImage />
      <TitleContextContainer>
        <LightLink>{title}</LightLink>
        <Title>{artist}</Title>
      </TitleContextContainer>
    </SoundBadgeWrapper>
  );
}

const SoundBadgeWrapper = styled.div`
  box-sizing: border-box;
  width: 340px;
  padding: 0 8px;
  height: 48px;
  display: flex;
  align-items: center;
`;

const AlbumImage = styled.a`
  margin-right: 10px;
  float: left;
  width: 30px;
  height: 30px;
  background-color: turquoise;
  cursor: pointer;
`;

const TitleContextContainer = styled.div`
  width: 0;
  flex-grow: 1;
`;

const LightLink = styled.a`
  font-size: 12px;
  line-height: 16px;
  height: 17px;
  color: #999;
  display: flex;
  width: 100%;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;
  cursor: pointer;
`;

const Title = styled.div`
  height: 17px;
  display: flex;
  width: 100%;
  align-items: center;
  line-height: 1.5em;
  font-size: 12px;
`;
