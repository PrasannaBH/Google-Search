// import React from "react";
// const { createContext, useContext, useState } = require("react");

// const ResultContext = createContext();
// const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

// export const ResultContextProvider = ({ children }) => {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const getResults = async (type) => {
//     setIsLoading(true);

//     const response = await fetch(`${baseUrl}${type}`, {
//       method: "GET",
//       headers: {
//         // "X-User-Agent": "desktop",
//         // "X-Proxy-Location": "EU",
//         "X-RapidAPI-Key": "58633e0a85msh3d55deecfbf99f6p1f3c98jsn8184c535c83c",
//         "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
//       },
//     });

//     const data = await response.json();

//     console.log(data);

//     setResults(data);
//     setIsLoading(false);
//   };

//   <ResultContext.Provider
//     value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
//   >
//     {children}
//   </ResultContext.Provider>;
// };

// export const useResultContext = () => useContext(ResultContext);

import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "58633e0a85msh3d55deecfbf99f6p1f3c98jsn8184c535c83c",
      },
    });

    const data = await res.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isloading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
