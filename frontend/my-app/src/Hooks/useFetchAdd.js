import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchAdd = () => {
  const { insert, newTask } = useContext(Context);

  useEffect(() => {
    const fetchAdd = async () => {
      await api.post('/task', {
        name: newTask.name,
      });
    };
    if (newTask) fetchAdd();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insert]);
};

export default useFetchAdd;
