export const api = {
  login: "/v1/accounts/accounts_data/login/",
  register: "register",
};

export interface APIResponse<T = any> {
  data: T;
  status: 0 | 1;
  token: string;
  message: string;
}
