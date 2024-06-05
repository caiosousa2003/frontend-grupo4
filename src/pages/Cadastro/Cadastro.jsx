import { Alert, DivPrincipal, Form, TituloCadastro } from "./styleCadastro";
import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "./utils";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateUsuarios } from "../../hooks/query/Usuarios";
import { useNavigate } from "react-router-dom";


function Cadastro() {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: criarUsuario } = useCreateUsuarios({
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ['usuarios'],
        });
        alert("Usuário criado com sucesso!")
        navigate('/login');
    },
    onError: (err) => {
        alert(err.response.data.message);
    },
  });

  const onSubmit = (data) => {
    data["nivel"] = false;
    criarUsuario(data);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header cadastro={false}></Header>
      <DivPrincipal>
        <TituloCadastro>CADASTRO</TituloCadastro>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputDefault name="email" placeholder="E-mail" error={errors} borda ={!!errors?.email?.message} {...register("email")}></InputDefault>
          {!!errors?.email?.message && <Alert>{errors?.email?.message}</Alert>}
          <InputDefault name="senha" placeholder="Senha" error={errors} borda ={!!errors?.senha?.message} {...register("senha")}></InputDefault>
          {!!errors?.senha?.message && <Alert>{errors?.senha?.message}</Alert>}
          <InputDefault name="nome" placeholder="Nome" error={errors} borda ={!!errors?.nome?.message} {...register("nome")}></InputDefault>
          {!!errors?.nome?.message && <Alert>{errors?.nome?.message}</Alert>}
          <InputDefault name="cargo" placeholder="Cargo" error={errors} borda ={!!errors?.cargo?.message} {...register("cargo")}></InputDefault>
          {!!errors?.cargo?.message && <Alert>{errors?.cargo?.message}</Alert>}
          <ButtonDefault>Criar Conta</ButtonDefault>
        </Form>
      </DivPrincipal>
    </div>
  );
}

export default Cadastro;
