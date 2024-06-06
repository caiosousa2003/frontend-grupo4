import {
  Conteiner,
  LinhaPrinc,
  ItensLista,
  LinhaSessoes,
  Botao,
  DivPrin,
} from './styleTabelaSessoes.js';
import { TbLogout } from 'react-icons/tb';
import { useQueryClient } from '@tanstack/react-query';
import {
  useDeleteSessoes,
  useGetSessoes,
  //usePostSessoes,
} from '../../hooks/query/Sessoes';

function TabelaSessoes() {
  const queryClient = useQueryClient();

  const { data: sessoes } = useGetSessoes({
    onError: (err) => {
      console.log(err);
    },
  });
  const { mutate: deleteSessoes } = useDeleteSessoes({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['sessoes'],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <DivPrin>
      <Conteiner>
        <LinhaPrinc>
          <ItensLista>Nome</ItensLista>
          <ItensLista>Cargo</ItensLista>
          <ItensLista>Entrada</ItensLista>
          <ItensLista>Saída</ItensLista>
          <ItensLista>Sair</ItensLista>
        </LinhaPrinc>
        {sessoes?.map((sessao, index) => (
          <LinhaSessoes key={index}>
            <ItensLista>{sessao?.id_usuario?.nome}</ItensLista>
            <ItensLista>{sessao?.id_usuario?.cargo}</ItensLista>
            <ItensLista>{sessao?.timestamps?.createdAt}</ItensLista>
            <ItensLista>{sessao?.id_usuario?.nome}</ItensLista>
            <Botao onClick={() => deleteSessoes(sessao?._id)}>
              <TbLogout size={20} color="white"></TbLogout>
            </Botao>
          </LinhaSessoes>
        ))}
      </Conteiner>
    </DivPrin>
  );
}

export default TabelaSessoes;
