import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(() => {
    return null;
  });
  const [isPending, setIsPending] = useState(() => {
    return true;
  });
  const [error, setError] = useState(() => {
    return null;
  });

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not load data for that resources");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (!err.name === "AbortError") {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
