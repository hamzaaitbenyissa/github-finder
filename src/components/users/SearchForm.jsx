import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";

function SearchForm() {
  const [text, setText] = useState("");
  const { fetchUsers, isLoaded, clearSearch } = useContext(GithubContext);

  const handlechange = (e) => {
    setText(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") alert("please write something");
    else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <div className="mt-10 grid grid-cols-1  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handlesubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for"
                className="input input-lg pr-40  input-bordered w-full"
                value={text}
                onChange={handlechange}
              />

              <button
                type="submit"
                className="btn-info absolute top-0 right-0 rounded-l-none btn btn-lg w-36"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>

      {isLoaded && (
        <div>
          <button
            onClick={clearSearch}
            className="btn btn-outline btn-warning btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchForm;
