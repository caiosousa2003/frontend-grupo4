import { useMutation, useQuery } from "@tanstack/react-query";
import { createProjetos, deleteProjetos, getProjetos, updateProjetos } from "../../services/api/endpoints";

export function useGetProjetos({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) {
    return useQuery({
        queryKey: ['projetos'],
        queryFn: getProjetos,
        onSuccess,
        onError,
    });
}

export function useCreateProjetos({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) {
    return useMutation({
        mutationFn: createProjetos,
        onSuccess,
        onError
    });
}

export function useDeleteProjetos({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) {
    return useMutation({
        mutationFn: deleteProjetos,
        onSuccess,
        onError
    });
}

export function useUpdateProjetos({
    onSuccess =() => {},
    onError = (err) => console.log(err),
} = {}){
    return useMutation({
        mutationFn: updateProjetos,
        onSuccess,
        onError,
    });
}