import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchDelete = () => {
  const { removeTrigger, remove } = useContext(Context);

  useEffect(() => {
    const fetchRemove = async () => {
      try {
        await api.delete(`/task/${remove}`)          
      } catch (err) {
        console.log(err);
      }
    };
    if (remove) fetchRemove();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeTrigger]);
};

export default useFetchDelete;