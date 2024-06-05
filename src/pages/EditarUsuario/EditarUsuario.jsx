import {
  TituloEditar,
  ContainerPadrao,
  TextoPadrao,
  Form,
  Botao,
  DivPrincipal,
} from './styleEditarUsuario';
import Header from '../../components/header/header';
import { InputDefault } from '../../components/commom/InputDefault';
import { ButtonDefaultBlack } from '../../components/commom/ButtonDefaultBlack';
import { useForm } from 'react-hook-form';
//import { zodResolver } from '@hookform/resolvers/zod';
//import { validador } from "./utils";
import { useQueryClient } from '@tanstack/react-query';
import { useUpdateUsuarios } from '../../hooks/query/Usuarios';
import { useParams } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

function EditarUsuario() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  // const navigation = useNavigate();

  const { mutate: updateUsuario } = useUpdateUsuarios({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['usuarios'],
      });
      alert('Usuário editado com sucesso!');
    },
    onError: (err) => {
      alert(err.response.data.message);
    },
  });
  console.log('oi');

  const onSubmit = (inputs) => {
    const data = { id: id, nome: inputs.nome, cargo: inputs.cargo };
    console.log(data);
    updateUsuario(data);
  };
  return (
    <div>
      <Header cadastro={true} />
      <DivPrincipal>
        <TituloEditar>EDITAR USUÁRIO</TituloEditar>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerPadrao>
            <TextoPadrao>Nome:</TextoPadrao>
            <InputDefault {...register('nome')}></InputDefault>
          </ContainerPadrao>
          <ContainerPadrao>
            <TextoPadrao>Cargo:</TextoPadrao>
            <InputDefault {...register('cargo')}></InputDefault>
          </ContainerPadrao>
          <Botao>
            <ButtonDefaultBlack>SALVAR</ButtonDefaultBlack>
          </Botao>
        </Form>
        <ButtonDefaultBlack>CANCELAR</ButtonDefaultBlack>
      </DivPrincipal>
    </div>
  );
}

export default EditarUsuario;
