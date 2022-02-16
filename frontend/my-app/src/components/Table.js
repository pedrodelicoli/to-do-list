import React, { useContext } from 'react';
import Context from '../Context/Context';

const Table = () => {
  const { tasks } = useContext(Context);
  const taskList = () => {
    return tasks.map((task) => {
      return (
        <li key={task.id} className='list'>{task.name}</li>
      )
    });
  }

  return (
    <div>
      <ul className="ul">
        <span className="textul">Lista de Tarefas</span>
        {taskList()}
      </ul>      
    </div>
  );
};

export default Table;