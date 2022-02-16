import React, { useContext } from 'react';
import Context from '../Context/Context';
import useFetchTasks from '../Hooks/useFetchTasks';
import useFetchAdd from '../Hooks/useFetchAdd';
import useFetchDelete from '../Hooks/useFetchDelete';
import useFetchRemove from '../Hooks/useFetchRemove';
import useFetchUpdate from '../Hooks/useFetchUpdate';
import Table from '../components/Table';
import Input from '../components/Input';
import Button from '../components/Button';



const MainPage = () => {
  useFetchTasks();
  useFetchAdd();
  useFetchRemove();
  useFetchDelete();
  useFetchUpdate();
  const { 
    setNewTask,
    setInsert,
    insert,
    removeTrigger,
    setRemoveTrigger,
    removeAll,
    setRemoveAll,
    update,
    setUpdate } = useContext(Context);  
  const handleInput = ({ target: { value } }) => {
    setNewTask(value);  
  }; 

  const handleInsert = () => {
    insert ? setInsert(false) : setInsert(true)  
  };
  const handleRemove = () => {
    removeTrigger ? setRemoveTrigger(false) : setRemoveTrigger(true)  
  };

  const handleRemoveAll = () => {
    removeAll ? setRemoveAll(false) : setRemoveAll(true)  
  };

  const handleUpdate = () => {
    update ? setUpdate(false) : setUpdate(true)  
  };
  
  
  return (
    <div>
      <span className='span'>Digite Aqui</span>
      <Input
        labelText='Inserir Nova'
        id='Inserir'
        inputType='text'
        handleChange={handleInput}
        placeholder='Nova Tarefa'
        className='input'
        testId=''      
      />
      <Button
        buttonName='Adicionar'
        handleClick={handleInsert}
        className='buttom'
        testId='add-buttom'
      />
      <Button
        buttonName='Alterar'
        handleClick={handleUpdate}
        className='buttom'
        testId='update-buttom'
      />  
      <Table />
      <Button
        buttonName='Remover Selecionada'
        handleClick={handleRemove}
        className='buttom'
        testId='remove-buttom'
      />  
      <Button
        buttonName='Remover Todas'
        handleClick={handleRemoveAll}
        className='buttom'
        testId='remove-buttom'
      />        
    </div>
  );
};

export default MainPage;