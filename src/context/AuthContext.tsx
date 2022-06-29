import { createContext, ReactNode, useEffect, useReducer } from "react";
import { publicAxiosInstance } from "../utils/axios";
import { setSession } from "../utils/authHelper";
import { ActionMap, AuthState, AuthUser, AuthContextType } from "../types/auth";
import { BASE_ENPOINTS } from "../utils/constant";

enum Types {
  Initial = "INITIALIZE",
  Login = "LOGIN",
  Logout = "LOGOUT",
  Register = "REGISTER",
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

export type JWTActions =
  ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "REGISTER":
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  const login = async (email: string, password: string) => {
    const response = await publicAxiosInstance.post(
      `${BASE_ENPOINTS.auth}/login`,
      {
        email,
        password,
      }
    );
    const {
      accessToken,
      firstName,
      lastName,
      refreshToken,
      userId,
      email: resEmail,
    } = response.data?.data;

    setSession(accessToken);

    dispatch({
      type: Types.Login,
      payload: {
        user: {
          firstName,
          lastName,
          refreshToken,
          userId,
          email: resEmail,
        },
      },
    });
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const response = await publicAxiosInstance.post(
      `${BASE_ENPOINTS.auth}/signup`,
      {
        email,
        password,
        firstName,
        lastName,
      }
    );
    const { accessToken, user } = response.data;

    localStorage.setItem("accessToken", accessToken);

    dispatch({
      type: Types.Register,
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
