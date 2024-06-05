import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createUsuarios,
  deleteUsuarios,
  getUsuarios,
  updateUsuario,
} from '../../services/api/endpoints';

export function useGetUsuarios({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['usuarios'],
    queryFn: getUsuarios,
    onSuccess,
    onError,
  });
}

export function useCreateUsuarios({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUsuarios,
    onSuccess,
    onError,
  });
}

export function useDeleteUsuarios({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUsuarios,
    onSuccess,
    onError,
  });
}

export function useUpdateUsuarios({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateUsuario,
    onSuccess,
    onError,
  });
}
