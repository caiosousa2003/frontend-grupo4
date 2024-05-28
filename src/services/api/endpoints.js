import api from "./api";

export async function loginUsuario(body){
    const {data} = await api.post("/login", body);
    return data;
}

export async function updateProjeto(id, body){
    const {data} = await api.update(`/projetos/:${id}`, body);
    return data;
}