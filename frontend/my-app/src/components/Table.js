import React, { useContext } from 'react';
import Context from '../Context/Context';

const Table = () => {
  const { tasks, setRemove } = useContext(Context);
  const handleClick = ({ target }) => {
    setRemove(target.id) 
    target.classList.toggle("completed");     
  }
  const taskList = () => {
    if(tasks) {
      return tasks.map((task) => {
        return (
          <li onClick={handleClick} id={task._id} key={task._id} className='list'>{task.name}</li>
        )
      });
    }  
  } 
 
  return (
    <div>
      <ol type="1" className="ul">
        <span className="textul">Lista de Tarefas</span>
        {taskList()}
      </ol>      
    </div>
  );
};

export default Table;