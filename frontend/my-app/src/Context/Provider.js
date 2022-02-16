import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider(props) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();
  const [insert, setInsert] = useState(true);
  const [removeTrigger, setRemoveTrigger] = useState(true);
  const [remove, setRemove] = useState();
  const [removeAll, setRemoveAll] = useState();
  
  const { children } = props;
  const contextValue = {
    tasks,
    setTasks, 
    newTask,
    setNewTask,
    insert,
    setInsert,
    remove,
    setRemove,
    removeTrigger,
    setRemoveTrigger,
    removeAll,
    setRemoveAll 
  };

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;