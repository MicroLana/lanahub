import { getAuth } from "firebase/auth";
import { jwtDecode } from "jwt-decode";

const getTokenRemainingTime = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const idToken = await user.getIdToken();
    const decodedToken = jwtDecode(idToken);

    const exp = decodedToken.exp; // Expiration time in seconds (Unix timestamp)
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    const remainingTimeSeconds = exp - currentTime;
    const remainingMinutes = Math.floor(remainingTimeSeconds / 60);
    const remainingSeconds = remainingTimeSeconds % 60;

    console.log(`Token expires in ${remainingMinutes}m ${remainingSeconds}s`);
    return remainingTimeSeconds;
  } else {
    console.warn("User is not logged in");
    return null;
  }
};

export default getTokenRemainingTime;
