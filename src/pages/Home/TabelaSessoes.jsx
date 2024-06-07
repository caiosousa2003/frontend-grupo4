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
import { useState, useEffect } from 'react';

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

  const calculaHora = (horaSubtraida) => {
    setInterval(updateAgora, 1000);
    const subtracao = updateAgora().getTime() - horaSubtraida.getTime();
    const tempo = new Date(subtracao);
    return `${String(tempo.getUTCHours()).padStart(2, '0')}:${String(
      tempo.getMinutes(),
    ).padStart(2, '0')}
    `;
  };

  const [tempos, setTempos] = useState({});
  useEffect(() => {
    const atualizarTempos = () => {
      if (sessoes) {
        const novosTempos = {};
        sessoes.forEach((sessao) => {
          novosTempos[sessao.id_usuario._id] = calculaHora(
            new Date(sessao.createdAt),
          );
        });
        setTempos(novosTempos);
      }
    };

    atualizarTempos();

    const intervalId = setInterval(atualizarTempos, 1000);

    return () => clearInterval(intervalId);
  }, [sessoes]);

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
            <Tempo>{tempos[sessao.id_usuario._id]}</Tempo>
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
