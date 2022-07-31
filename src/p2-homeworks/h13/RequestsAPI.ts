import axios from "axios";

export type ResponseType = {
  errorText: string;
  info: string;
  yourBody: {
    success: boolean;
  };
  yourQuery: {};
};

const instance = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com/",
});

export const RequestsAPI = {
  reuest(success: boolean) {
    return instance.post<ResponseType>(`auth/test`, { success: success });
  },
};
