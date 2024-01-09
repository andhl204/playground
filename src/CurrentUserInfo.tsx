import { useRecoilValue } from "recoil";
import { currentUserNameQuery } from "./recoil/user";

export default function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
