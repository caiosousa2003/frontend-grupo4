import api from "./api";

// LOGIN

export async function loginUsuario(body) {
  const { data } = await api.post("/login", body);
  return data;
}
// SESSOES

export async function GetSessoes() {
  const { data } = await api.get("/sessoes");
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
// USUÁRIO

export async function getUsuarios() {
  const { data } = await api.get(`/usuarios`);
  return data;
}

export async function createUsuarios(body) {
  const { data } = await api.post(`/usuarios`, body);
  return data;
}

export async function deleteUsuarios(id) {
  const { data } = await api.delete(`/usuarios/${id}`);
  return data;
}

export async function updateUsuario(data) {
  const { data1 } = await api.put(`/usuarios/${data.id}`, {
    nome: data.nome,
    cargo: data.cargo,
  });
  return data1;
}
//SESSÕES

// PROJETOS

export async function getProjetos() {
  const { data } = await api.get(`/projetos`);
  return data;
}

export async function createProjetos(body) {
  const { data } = await api.post(`/projetos`, body);
  return data;
}

export async function deleteProjetos(id) {
  const { data } = await api.delete(`/projetos/${id}`);
  return data;
}

export async function updateProjetos(obj) {
  const { data } = await api.put(`/projetos/${obj.id}`, obj.body);
  return data;
}
