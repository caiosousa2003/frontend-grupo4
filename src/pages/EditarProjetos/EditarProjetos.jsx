import {
  Campo,
  ContainerButtons,
  ContainerPrincipal,
  Form,
  Titulo,
  Label,
  InputDescricao,
  ContainerForm,
  Alert,
} from './styleEditarProjetos';
import Header from '../../components/header/header';
import { InputDefault } from '../../components/commom/InputDefault';
import { ButtonDefaultBlack } from '../../components/commom/ButtonDefaultBlack';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdateProjetos } from '../../hooks/query/Projetos';
import { validador } from './utils';

function EditarProjetos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validador) });
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state;

  const queryClient = useQueryClient();

  const { mutate: updateProjeto } = useUpdateProjetos({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projetos'],
      });
      alert('Projeto alterado com sucesso!');
      navigate('/gerenciar-projetos');
    },
    onError: (err) => {
      alert('ERRO');
      alert(err.response.data.message);
    },
  });

  const onSubmit = (data) => {
    const filledData = Object.keys(data)
      .filter((key) => data[key] !== '')
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});

    if (Object.keys(filledData).length === 0) {
      alert('Projeto não foi alterado!');
    } else {
      updateProjeto({ id, body: filledData });
    }
  };

  const onCancel = () => {
    navigate('/gerenciar-projetos');
  };

  return (
    <div>
      <Header cadastro={false} />
      <ContainerPrincipal>
        <Titulo>Editar projeto</Titulo>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerForm>
            <Campo>
              <Label htmlFor="nome" margin="50px">
                Nome:{' '}
              </Label>
              <InputDefault
                width="75%"
                height="40px"
                font="18px"
                name="nome"
                error={errors}
                borda={!!errors?.nome?.message}
                {...register('nome')}
              ></InputDefault>
            </Campo>
            {!!errors?.nome?.message && <Alert>{errors?.nome?.message}</Alert>}
            <Campo>
              <Label htmlFor="descricao">Descrição: </Label>
              <InputDescricao
                width="75%"
                height="150px"
                name="descricao"
                error={errors}
                borda={!!errors?.descricao?.message}
                {...register('descricao')}
              ></InputDescricao>
            </Campo>
            {!!errors?.descricao?.message && (
              <Alert>{errors?.descricao?.message}</Alert>
            )}
            <Campo>
              <Label htmlFor="equipe" margin="40px">
                Equipe:{' '}
              </Label>
              <InputDefault
                width="75%"
                height="40px"
                font="18px"
                name="equipe"
                error={errors}
                borda={!!errors?.equipe?.message}
                {...register('equipe')}
              ></InputDefault>
            </Campo>
            {!!errors?.equipe?.message && (
              <Alert>{errors?.equipe?.message}</Alert>
            )}
          </ContainerForm>
          <ContainerButtons>
            <ButtonDefaultBlack
              onClick={handleSubmit(onCancel)}
              font="16px"
              margin="15px"
            >
              CANCELAR
            </ButtonDefaultBlack>
            <ButtonDefaultBlack
              onClick={handleSubmit(onSubmit)}
              font="16px"
              margin="15px"
            >
              SALVAR
            </ButtonDefaultBlack>
          </ContainerButtons>
        </Form>
      </ContainerPrincipal>
    </div>
  );
}

export default EditarProjetos;
