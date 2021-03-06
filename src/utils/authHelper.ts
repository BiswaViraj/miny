import jwtDecode from "jwt-decode";
// routes
import { PATH_AUTH } from "./routes";
//
import { privateAxiosInstance } from "./axios";

// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert("Token expired");

    localStorage.removeItem("accessToken");

    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    privateAxiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    const { exp } = jwtDecode<{ exp: number }>(accessToken);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
    delete privateAxiosInstance.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
