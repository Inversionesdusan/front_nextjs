import { create } from "zustand";

interface UseCompanyStore {
  nombreEmpresa: string;
  direccionContacto: string;
  telefonoFijo: string;
  telefonoCelular: string;
  email: string;
  ciudad: string;
  departamento: string;
  nombreContacto: string;
}

export interface CompanyDataStore {
  dataLoaded: boolean;
  companyData: UseCompanyStore;
}

const initialCompanyData: UseCompanyStore = {
  nombreEmpresa: "",
  direccionContacto: "",
  telefonoFijo: "",
  telefonoCelular: "",
  email: "",
  ciudad: "",
  departamento: "",
  nombreContacto: "",
};

interface CompanyStore {
  companyData: CompanyDataStore;
  setCompanyData: (data: UseCompanyStore) => void;
}

const useCompanyStore = create<CompanyStore>((set) => ({
  companyData: {
    dataLoaded: false,
    companyData: {
      nombreEmpresa: "",
      direccionContacto: "",
      telefonoFijo: "",
      telefonoCelular: "",
      email: "",
      ciudad: "",
      departamento: "",
      nombreContacto: "",
    },
  },
  setCompanyData: (data: UseCompanyStore) => {
    set({ companyData: { dataLoaded: true, companyData: { ...data } } });
  },
}));

export default useCompanyStore;
