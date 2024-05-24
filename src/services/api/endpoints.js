import api from "./api";

export async function loginUsuario(body) {
  const { data } = await api.post("/login", body);
  return data;
}
