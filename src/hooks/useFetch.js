import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};
