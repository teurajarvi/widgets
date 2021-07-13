import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  // Second parameter on useEffect:
  // 1. [] == run initial render,
  // 2. nothing == 1. + run after every render
  // 3. [data] == 1. + run after every render if data has changed
  useEffect(() => {
    const search = async () => {
      await axios.get("fsadsf");
    };

    search();
  }, [term]);

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
