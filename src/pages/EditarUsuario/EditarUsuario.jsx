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
import { zodResolver } from '@hookform/resolvers/zod';
import { validador } from './utils';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdateUsuarios } from '../../hooks/query/Usuarios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditarUsuario() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validador) });
  const navigate = useNavigate();

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

  const onSubmit = (inputs) => {
    const filledData = Object.keys(inputs)
      .filter((key) => inputs[key] !== '')
      .reduce((obj, key) => {
        obj[key] = inputs[key];
        return obj;
      }, {});

    if (Object.keys(filledData).length === 0) {
      alert('Usuario não foi alterado!');
    } else {
      updateUsuario({ id, body: filledData });
    }
  };
  return (
    <div>
      <Header cadastro={true} />
      <DivPrincipal>
        <TituloEditar>EDITAR USUÁRIO</TituloEditar>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerPadrao>
            <TextoPadrao>Nome:</TextoPadrao>
            <InputDefault
              error={errors}
              borda={!!errors?.descricao?.message}
              {...register('nome')}
            ></InputDefault>
          </ContainerPadrao>
          <ContainerPadrao>
            <TextoPadrao>Cargo:</TextoPadrao>
            <InputDefault
              error={errors}
              borda={!!errors?.descricao?.message}
              {...register('cargo')}
            ></InputDefault>
          </ContainerPadrao>
          <Botao>
            <ButtonDefaultBlack>SALVAR</ButtonDefaultBlack>
          </Botao>
        </Form>
        <ButtonDefaultBlack onClick={() => navigate('/gerenciar-usuarios')}>
          CANCELAR
        </ButtonDefaultBlack>
      </DivPrincipal>
    </div>
  );
}

export default EditarUsuario;
