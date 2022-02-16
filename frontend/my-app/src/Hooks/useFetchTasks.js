import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchTasks = () => {
  const { setTasks } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        api.get('/task')
          .then((response) => response.data)
          .then((data) => setTasks(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetchTasks;