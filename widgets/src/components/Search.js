import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I RUN WITH EVERY RENDER!");
  // Second parameter on useEffect:
  // 1. [] == run initial render,
  // 2. nothing == 1. + run after every render
  // 3. [data] == 1. + run after every render if data has changed
  useEffect(() => {
    console.log("I ONLY RUN ALSO");
  }, []);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
