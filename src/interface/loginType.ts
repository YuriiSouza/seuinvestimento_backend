export interface LoginType {
  email: string;
  password: string;
}

export type DataUser = {
  id?: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  repeatPassword?: any;
  agreeTerms: boolean;
};
