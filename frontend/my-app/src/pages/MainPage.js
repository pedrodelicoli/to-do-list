import React from 'react';
import useFetchTasks from '../Hooks/useFetchTasks';
import Table from '../components/Table';

const MainPage = () => {
  console.log('deu certo')
  useFetchTasks();
  return (
    <div>
      <header>Minha Lista de Tarefas</header>
      <p>Clique duas vezes em um item para marcá-lo como completo</p>    
      <label>Nova:</label>
      <input type="text" id="texto-tarefa" placeholder="Escreva sua tarefa"/>
      <button id="criar-tarefa">Adicionar</button>
      <ol id="lista-tarefas"></ol> 
      <Table />  
      <button id="apaga-tudo">Apagar</button>
      <button id="remover-finalizados">Remover Finalizados</button>
      <button id="salvar-tarefas">Salvar</button>
      <button id="remover-selecionado">Remover Selecionado</button>     
    </div>
  );
};

export default MainPage;