import { DivPrincipal, TituloCadastro } from "./styleCadastro";
import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "./utils";

export default function Cadastro() {
  const queryClient = useQueryClient();
  const { data: tools } = UseGetTools({
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: deleteTools } = useDeleteTools({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tools"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: createTolls } = useCreateTools({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tools"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data) => {
    createTolls(data);
  };

  const {
    handleSubmit,
    register,
    formStat: { errors },
  } = useForm({ resolver: zodResolver(validador) });

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header cadastro={true}></Header>
      <DivPrincipal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TituloCadastro>CADASTRO</TituloCadastro>
          <InputDefault
            placeholder="E-mail"
            id="email"
            {...registrer("email")}
            email="email"
            error={!!errors?.email.message}
          ></InputDefault>
          {errors?.email?.message && <p>{errors?.email?.message}</p>}
          <InputDefault
            placeholder="Senha"
            id="senha"
            {...registrer("senha")}
            senha="senha"
            error={!!errors?.senha.message}
          ></InputDefault>
          {errors?.senha?.message && <p>{errors?.senha?.message}</p>}
          <InputDefault
            placeholder="Nome"
            id="nome"
            {...registrer("nome")}
            nome="nome"
            error={!!errors?.nome.message}
          ></InputDefault>
          {errors?.nome?.message && <p>{errors?.nome?.message}</p>}
          <InputDefault
            placeholder="Cargo"
            id="cargo"
            {...registrer("cargo")}
            cargo="cargo"
            error={!!errors?.cargo.message}
          ></InputDefault>
          {errors?.cargo?.message && <p>{errors?.cargo?.message}</p>}
          <ButtonDefault type="submit">Criar Conta</ButtonDefault>
        </form>
      </DivPrincipal>
    </div>
  );
}
