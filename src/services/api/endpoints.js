import api from "./api";

export async function loginUsuario(body) {
  const { data } = await api.post("/login", body);
  return data;
}
export async function GetSessoes() {
  const { data } = await api.get("/sessoes");
  console.log(data);
  return data;
}
export async function PostSessoes(body) {
  const { data } = await api.post("/sessoes", body);
  return data;
}
export async function DeleteSessoes(id) {
  const { data } = await api.delete(`/sessoes/${id}`);
  return data;
}
