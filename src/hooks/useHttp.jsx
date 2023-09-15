import { useEffect, useState } from 'react';
import { options } from '../data/options';

const useHttp = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchResponse().then(() => {});
  }, []);

  async function fetchResponse() {
    setSuccess(false);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if(!result) throw new Error('Could not fetch eror from the server')
      if (result) {
        setSuccess(true);
        setData(result);
        setLoading(false);
      }

    } catch (error) {
      if (error) {
        setError(error.message || 'Server Error, try again!');
        setSuccess(false);
      }
    } finally {
      setLoading(false);
    }
  }
  return { data, error, loading, success };
};

export default useHttp;
