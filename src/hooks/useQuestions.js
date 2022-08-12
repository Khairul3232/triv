import { useMemo, useState } from 'react';

const useQuestions = (
  amount = "10",
  diffi = "hard",
  type = "boolean",
  fetchUrl = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diffi}&type=${type}`
) => {

  const [data, setData] = useState(null);

  useMemo(() => {
    fetch(fetchUrl)
      .then((response) =>
        (() => {
          if (response.status === 200) {
            return response.json();
          }
        })()
      )
      .then((data) => {
        setData(prevData => ({ ...prevData, ...data }));
      });
  }, []);

  return data;
};

export default useQuestions;
