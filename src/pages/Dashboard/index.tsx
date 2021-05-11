import React from 'react';
import gitlogo from '../../assets/gitlogo.svg';
import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={gitlogo} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
};
export default Dashboard;
