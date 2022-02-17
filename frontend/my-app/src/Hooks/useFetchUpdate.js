import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchUpdate = () => {
  const { update, remove, newTask } = useContext(Context);

  useEffect(() => {
    const fetchUpdate = async () => {
      await api.put('/task/', {
        id: remove,
        name: newTask,
      });
    };
    if (remove) fetchUpdate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);
};

export default useFetchUpdate;
