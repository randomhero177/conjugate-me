import axios from "axios";

export async function UserRegister(email: string, password: string) {
  const url = "/api/auth/register";
  console.log(email, password);
  const request = await axios.post(url, { email, password });
  return request;
}

export async function UserLogin(email: string, password: string) {
  const url = "/api/auth/login";

  const request = await axios.post(url, { email, password });
  return request;
}
