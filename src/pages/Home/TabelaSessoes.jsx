import {
  Conteiner,
  LinhaPrinc,
  ItensLista,
  LinhaSessoes,
  Botao,
  ConteinerMembro,
  ConteinerNomProj,
  Nome,
  Projeto,
  Cargo,
  Div,
  Tempo,
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

  function updateAgora() {
    const agora = new Date();
    return agora;
  }

  setInterval(updateAgora, 1000);

  const calculaHora = (horaSubtraida) => {
    const subtracao = updateAgora().getTime() - horaSubtraida.getTime();
    const tempo = new Date(subtracao);
    console.log(tempo);
    return `${String(tempo.getUTCHours()).padStart(2, '0')}:${String(
      tempo.getMinutes(),
    ).padStart(2, '0')}
    `;
  };

  setInterval(calculaHora, 1000);
  return (
    <Div>
      <Conteiner>
        <LinhaPrinc>
          <ItensLista>MEMBRO</ItensLista>
          <ItensLista></ItensLista>
          <ItensLista>TEMPO</ItensLista>
          <ItensLista></ItensLista>
        </LinhaPrinc>
        {sessoes?.map((sessao, index) => (
          <LinhaSessoes key={index}>
            <ConteinerMembro>
              <ConteinerNomProj>
                <Nome>{sessao?.id_usuario?.nome}</Nome>
                <Projeto>{sessao?.id_projeto?.nome}</Projeto>
              </ConteinerNomProj>
              <Cargo>{sessao?.id_usuario?.cargo}</Cargo>
            </ConteinerMembro>
            <Tempo>{`${String(new Date(sessao.createdAt).getHours()).padStart(
              2,
              '0',
            )}:${String(new Date(sessao.createdAt).getMinutes()).padStart(
              2,
              '0',
            )}
            `}</Tempo>
            <Tempo>{calculaHora(new Date(sessao.createdAt))}</Tempo>
            <Botao onClick={() => deleteSessoes(sessao?.id_usuario?._id)}>
              <TbLogout size={20} color="white"></TbLogout>
            </Botao>
          </LinhaSessoes>
        ))}
      </Conteiner>
    </Div>
  );
}

export default TabelaSessoes;
