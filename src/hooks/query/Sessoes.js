import { useMutation, useQuery } from "@tanstack/react-query";
import { GetSessoes } from "../../services/api/endpoints";

export function useGetSessoes({
    onSuccess = ()=>{},
    onError = (err) => console.log(err),
} = {}){
    return useQuery({
        queryKey: ['tools'],
        queryFn: GetSessoes,
        onError,
        onSuccess,
    });
}