import { useMutation } from "@tanstack/react-query";
import { loginUsuario } from "../../services/api/endpoints";

export function useLoginUsuario({
    onSuccess =() => {},
    onError = (err) => console.log(err),
} = {}){
    return useMutation({
        mutationFn: loginUsuario,
        onSuccess,
        onError,
    });
}