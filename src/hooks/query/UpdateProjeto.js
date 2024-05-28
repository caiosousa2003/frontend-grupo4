import { useMutation } from "@tanstack/react-query";
import { updateProjeto } from "../../services/api/endpoints";

export function useUpdateProjeto({
    onSuccess =() => {},
    onError = (err) => console.log(err),
} = {}){
    return useMutation({
        mutationFn: updateProjeto,
        onSuccess,
        onError,
    });
}