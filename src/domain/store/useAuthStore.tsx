import { create } from "zustand";

interface UserDataAuthStore {
  userId: number;
  email: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  tipoDocumento: string;
  numeroDocumento: string;
  digitoVerifica: string;
  tipoUsuario: string;
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
  updateUserData: (userData: UserDataAuthStore) => void;
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
    telefono: "",
    tipoDocumento: "",
    numeroDocumento: "",
    digitoVerifica: "",
    tipoUsuario: "",
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

  updateUserData: (userData: UserDataAuthStore) => {
    set((state) => ({
      authData: {
        ...state.authData,
        user: { ...userData },
      },
    }));
  },
}));

export default useAuthStore;
