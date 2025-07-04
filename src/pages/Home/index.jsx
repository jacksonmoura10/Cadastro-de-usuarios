import { useRef, useState } from "react";
import api from "../../services/api";
import {
  Container,
  Title,
  Form,
  ContainerInput,
  InputLabel,
  Input,
  Button,
} from "./styles.js";
import TopBackground from "../../components/TopBackground/index.jsx";
import DefaultButton from "../../components/Button/index.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  async function registerNewUser() {
    try {
      await api.post("/usuarios", {
        email: inputEmail.current.value,
        age: Number(inputAge.current.value),
        name: inputName.current.value,
      });

      console.log("Usuário cadastrado com sucesso!");
      console.log("Nome:", inputName.current.value);
      console.log("Idade:", inputAge.current.value);
      console.log("E-mail:", inputEmail.current.value);

      setMensagem("Usuário cadastrado com sucesso!");

    
      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";

      
      setTimeout(() => {
        setMensagem("");
      }, 3000);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setMensagem("Erro ao cadastrar usuário");
      setTimeout(() => {
        setMensagem("");
      }, 3000);
    }
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>

        {mensagem && <p>{mensagem}</p>}

        <ContainerInput>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInput>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <DefaultButton type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </DefaultButton>
      </Form>

      <DefaultButton
        type="button"
        onClick={() => navigate("/lista-de-usuarios")}
      >
        Ver lista de Usuários
      </DefaultButton>
    </Container>
  );
}

export default Home;



