import { Suspense } from "react";
import CurrentUserInfo from "./CurrentUserInfo";
import { RecoilRoot, useRecoilValue } from "recoil";
import { userNameQuery } from "./recoil/user";

function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <CurrentUserInfo />
          <UserInfo token={import.meta.env.VITE_TOKEN} />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;

function UserInfo({ token }: { token: string }) {
  const userName = useRecoilValue(userNameQuery(token));
  return <div>{userName}</div>;
}
