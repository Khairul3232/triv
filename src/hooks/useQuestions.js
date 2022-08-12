import { useMemo, useState } from 'react';

const FETCH_FAILED = -1;

const useQuestions = (
  amount = "10",
  diffi = "hard",
  type = "boolean",
  fetchUrl = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diffi}&type=${type}`
) => {

  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(FETCH_FAILED);

  const fetchData = _ => {
    console.log("fetching data");
    fetch(fetchUrl)
      .then((response) =>
        (() => {
          if (response.status === 200) {
            setFetchStatus(_ => response.status);
            return response.json();
          }
          else { setFetchStatus(_ => response.status); }
        })()
      )
      .then((data) => {
        setData(prevData => ({ ...prevData, ...data }));
      });
  };

  useMemo(() => fetchData(), []);

  return [data, fetchStatus];
};

export default useQuestions;
