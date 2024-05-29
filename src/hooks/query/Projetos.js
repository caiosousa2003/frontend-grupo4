import { useMutation, useQuery } from "@tanstack/react-query";
import { GetProjetos } from "../../services/api/endpoints";

export function useGetProjetos({
    onSuccess = ()=>{},
    orError = (err) =>console.log(err),
} = {}){
    return useQuery({
        queryKey: ['projetos'],
        queryFn: GetProjetos,
        orError,
        onSuccess,
    })
}