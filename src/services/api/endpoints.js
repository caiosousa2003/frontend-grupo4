import api from "./api";

export async function loginUsuario(body){
    const {data} = await api.post("/login", body);
    return data;
}

export async function updateProjeto(params, body){
    const {data} = await api.update("/projetos", body);
    return data;
}