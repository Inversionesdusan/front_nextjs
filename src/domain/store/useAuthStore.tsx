import { create } from "zustand";

interface UserDataAuthStore {
  userId: number;
  email: string;
  nombres: string;
  apellidos: string;
}

export interface AuthDataStore {
  isAuthenticated: boolean;
  dataLoaded: boolean;
  token: string;
  refreshToken: string;
  user: UserDataAuthStore;
}

interface AuthStore {
  authData: AuthDataStore;
  authenticate: (token: string, user: UserDataAuthStore) => void;
  logout: () => void;
}

const initialData: AuthDataStore = {
  isAuthenticated: false,
  dataLoaded: false,
  token: "",
  refreshToken: "",
  user: {
    userId: 0,
    email: "",
    nombres: "",
    apellidos: "",
  },
};

const useAuthStore = create<AuthStore>((set) => ({
  authData: { ...initialData },
  authenticate: (token: string, user: UserDataAuthStore) => {
    set((state) => ({
      ...state,
      authData: {
        isAuthenticated: true,
        dataLoaded: true,
        token,
        refreshToken: "",
        user,
      },
    }));
  },

  logout: () => {
    set((state) => ({ authData: { ...initialData } }));
  },
}));

export default useAuthStore;
