import { atom } from "recoil";

export const musicState = atom({
  key: "Music",
  default: {
    id: 0,
    title: "",
    artist: "",
    duration: 0,
  },
});

export const musicRefState = atom<null | HTMLAudioElement>({
  key: "MusicRef",
  default: null,
});

export const currentTimeState = atom({
  key: "CurrentTime",
  default: 0,
});

export const playingState = atom({
  key: "Playing",
  default: false,
});
