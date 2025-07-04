import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { Container, Title, CardUsers, TrashIcon, AvatarUser, ContainerUsers } from "./styles";
import Trash from "../../assets/trash.svg";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function deleteUsers(id) {
    const confirm = window.confirm("Tem certeza que deseja deletar esse usuário?");
    if (confirm) {
      try {
        await api.delete(`/usuarios/${id}`);
        // Atualiza o estado removendo o usuário da lista, sem precisar buscar de novo
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Erro ao deletar usuário:", error);
      }
    }
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate(-1)}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;
