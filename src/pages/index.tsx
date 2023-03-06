// create a nextjs homepage
// src/pages/index.tsx
import {
  WhenLoggedInWithProfile,
  WhenLoggedOut,
} from "../components/auth/auth";
import { LoginButton } from "../components/auth/loginButton";

export default function Home() {
  return (
    <>
      <WhenLoggedInWithProfile>
        {({ profile }) => (
          <div>
            <h1>Welcome {profile.handle}</h1>
          </div>
        )}
      </WhenLoggedInWithProfile>

      <WhenLoggedOut>
        <div>
          <h1>Welcome to Lens</h1>
          <LoginButton />
        </div>
      </WhenLoggedOut>
    </>
  );
}
