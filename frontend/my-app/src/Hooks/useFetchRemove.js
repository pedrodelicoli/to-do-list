import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchDelete = () => {
  const { removeAll } = useContext(Context);

  useEffect(() => {
    const fetchRemoveAll = async () => {
      try {
        await api.delete('/task')          
      } catch (err) {
        console.log(err);
      }
    };
    if(removeAll) fetchRemoveAll();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeAll]);
};

export default useFetchDelete;