export interface UserInterface {
  uid?: string;
  token?: string;
  currentToken?: string;
  name?: string;
  firstSurname?: string;
  lastSurname?: string;
  email?: string;
  rol?: string;
  job?: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface UserRegistered {
  userId: string;
  fullName: string;
  rol: string;
  job: string;
}

export interface UsersCheckers {
  nameElaborated: string;
  jobElaborated: string;
  nameVerify: string;
  jobVerify: string;
}
