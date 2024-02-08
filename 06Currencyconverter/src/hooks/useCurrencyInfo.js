// import { useEffect,useState } from "react"

// function useCurrencyInfo(currency){
//   const [data,setData] = useState({});
//   useEffect(() => {
//      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//   },[currency]).then((res) => res.json())
//   .then((res) => setData(res[currency]))
//   return data;
// }

// console.log(data);


// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
