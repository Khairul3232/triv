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

  const validateResponse = response => (() => {
    if (response.status === 200) {
      setFetchStatus(_ => response.status);
      return response.json();
    }
    else { setFetchStatus(_ => response.status); }
  })();

  const setResponseData = data => setData(prevData => ({ ...prevData, ...data }));

  const fetchData = _ => {
    fetch(fetchUrl)
      .then(response => validateResponse(response), error => console.log(`Failed to receive response. ${error}`))
      .then(data => {
        return setResponseData(data);
      }, error => console.log(`Failed to validate response. ${error}`));
  };

  const memoised = useMemo(async () => fetchData(), []);

  return [data, fetchStatus, memoised];
};

export default useQuestions;
