import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchTasks = () => {
  const { setTasks } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      api.get('/task')
        .then((response) => response.data)
        .then((data) => setTasks(data));
    };
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });
};

export default useFetchTasks;
