import React, { useContext } from 'react';
import Context from '../Context/Context';
import useFetchTasks from '../Hooks/useFetchTasks';
import useFetchAdd from '../Hooks/useFetchAdd';
import useFetchDelete from '../Hooks/useFetchDelete';
import useFetchRemove from '../Hooks/useFetchRemove';
import Table from '../components/Table';
import Input from '../components/Input';
import Button from '../components/Button';



const MainPage = () => {
  useFetchTasks();
  useFetchAdd();
  useFetchRemove();
  useFetchDelete();
  const { 
    setNewTask,
    setInsert,
    insert,
    removeTrigger,
    setRemoveTrigger,
    removeAll,
    setRemoveAll } = useContext(Context);  
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
  
  
  return (
    <div>
      <Input
        labelText='Inserir Nova'
        id='Inserir'
        inputType='text'
        handleChange={handleInput}
        placeholder='Nova Tarefa'
        className=''
        testId=''      
      />
      <Button
        buttonName='Adicionar'
        handleClick={handleInsert}
        className='addbuttom'
        testId='add-buttom'
      />
      <Table />
      <Button
        buttonName='Remover Selecionada'
        handleClick={handleRemove}
        className='removebuttom'
        testId='remove-buttom'
      />  
      <Button
        buttonName='Remover Todas'
        handleClick={handleRemoveAll}
        className='removebuttom'
        testId='remove-buttom'
      />     
    </div>
  );
};

export default MainPage;