import api from "./api";

export async function loginUsuario(body){
    const {data} = await api.post("/login", body);
    return data;
}
export async function GetSessoes(){
    const {data} = await api.get("/sessoes")
    return data;
}
export async function PostSessoes(){
    const {data} = await api.post("/sessoes")
    return data;
}
