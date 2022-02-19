import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const {
    tasks,
    setRemove,
    setNewTask,
    setUpdate,
    update,
  } = useContext(Context);
  const handleClick = ({ target }) => {
    setRemove(target.id);
    target.classList.toggle('completed');
    target.classList.toggle('list');
    const list = document.querySelectorAll('li');
    list.forEach((item) => {
      if (item.id !== target.id) {
        item.classList.remove('completed');
        item.classList.add('list');
      }
    });
  };

  const handleSelect = (obj) => {
    setNewTask({ state: obj.target.value });
    setRemove(obj.target.id);
    update ? setUpdate(false) : setUpdate(true);
  };
  const taskList = () => {
    if (tasks) {
      return tasks.map((task) => (
        <div key={task._id + 6} className="list">
          <li onClick={handleClick} id={task._id} key={task._id}>{task.name}</li>
          <select id={task._id} onClick={handleSelect} name="estado">
            <option value="Status" selected disabled hidden>{task.state || 'Status'}</option>
            <option value="Pendente">Pendente</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Finalizada">Finalizada</option>
          </select>
        </div>
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
