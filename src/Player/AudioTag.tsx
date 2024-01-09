import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { currentTimeState, musicRefState, musicState, playingState } from "../recoil/music";
import { throttle } from "../util/throttle";

export default function AudioTag() {
  const setMusic = useSetRecoilState(musicState);
  const setMusicRef = useSetRecoilState(musicRefState);
  const setPlaying = useSetRecoilState(playingState);
  const setCurrentTime = useSetRecoilState(currentTimeState);
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (musicRef.current !== null) {
      musicRef.current.addEventListener("loadeddata", () => {
        if (musicRef.current && musicRef.current.readyState >= 2) {
          setMusic({
            id: 0,
            title: "Hello",
            artist: "John Smith",
            duration: musicRef.current.duration,
          });
          setMusicRef(musicRef.current);
          musicRef.current.addEventListener(
            "timeupdate",
            () => musicRef.current && setCurrentTime(musicRef.current.currentTime),
          );
          musicRef.current.addEventListener("play", () => setPlaying(true));
          musicRef.current.addEventListener("pause", () => setPlaying(false));
        }
      });
    }
  }, []);
  return <audio src="/sample.mp3" ref={musicRef} />;
}
