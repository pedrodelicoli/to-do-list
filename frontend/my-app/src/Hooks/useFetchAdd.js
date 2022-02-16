import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchAdd = () => {
  const { insert, newTask } = useContext(Context);

  useEffect(() => {
    const fetchAdd = async () => {
      try {
        await api.post('/task', {
          name: newTask
        })               
      } catch (err) {
        console.log(err);
      }
    };
    if (newTask) fetchAdd();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insert]);
};

export default useFetchAdd;