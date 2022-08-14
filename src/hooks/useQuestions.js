import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FETCH_FAILED = -1;

const useQuestions = (
  amount = "10",
  diffi = "hard",
  type = "boolean",
  fetchUrl = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diffi}&type=${type}`
) => {

  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(FETCH_FAILED);
  // const navigate = useNavigate();

  const validateResponse = response => (() => {
    if (response.status === 200) {
      setFetchStatus(_ => response.status);
      return response.json();
    }
    else { setFetchStatus(_ => response.status); }
  })();

  const setResponseData = data => setData(prevData => ({ ...prevData, ...data }));

  const fetchData = _ => {
    console.log("fetching data");
    fetch(fetchUrl)
      .then(response => validateResponse(response))
      .then(data => {
        // const { results } = data;
        // console.log(data.results);
        return setResponseData(data);
      })
      .catch(error => {
        // navigate("/", { replace: true }); // Error page
      });
  };

  const memoised = useMemo(() => fetchData(), []);

  return [data, fetchStatus, memoised];
};

export default useQuestions;
