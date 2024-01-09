import axios from "axios";
import { DefaultValue, atom, selector, selectorFamily } from "recoil";

export interface IUser {
  username: string;
  image: string;
}

export const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/users/me`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
      },
    );
    return data.username;
  },
});

export const userNameQuery = selectorFamily({
  key: "UserName",
  get: (token: string) => async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data.username;
  },
});
