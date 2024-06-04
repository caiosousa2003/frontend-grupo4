import { useMutation, useQuery } from "@tanstack/react-query";
import {
  DeleteSessoes,
  GetSessoes,
  PostSessoes,
} from "../../services/api/endpoints";

export function useGetSessoes({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["sessoes"],
    queryFn: GetSessoes,
    onError,
    onSuccess,
  });
}
export function useDeleteSessoes({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: DeleteSessoes,
    onSuccess,
    onError,
  });
}
export function usePostSessoes({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: PostSessoes,
    onSuccess,
    onError,
  });
}
