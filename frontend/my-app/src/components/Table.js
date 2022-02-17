import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { tasks, setRemove } = useContext(Context);
  const handleClick = ({ target }) => {
    setRemove(target.id);
    target.classList.toggle('completed');
    const list = document.querySelectorAll('li');
    list.forEach((item) => {
      if (item.id !== target.id) item.classList.remove('completed');
    });
  };
  const taskList = () => {
    if (tasks) {
      return tasks.map((task) => (
        <li onClick={handleClick} id={task._id} key={task._id} className="list">{task.name}</li>
      ));
    }
    return null;
  };

  return (
    <div className="tasks-table">
      <ol type="1" className="ul">
        <p className="textul">Lista de Tarefas</p>
        {taskList()}
      </ol>
    </div>
  );
}

export default Table;
