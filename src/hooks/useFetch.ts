import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((res) => res.json())
      .then((data: T) => {
        if (isMounted) {
          setData(data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return data;
};

export default useFetch;
