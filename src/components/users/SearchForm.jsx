import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import Alert from "../layout/Alert";

function SearchForm() {
  const [text, setText] = useState("");
  const { fetchUsers, isLoaded, clearSearch } = useContext(GithubContext);
  const [alert, setAlert] = useState(false);

  const handlechange = (e) => {
    setAlert(false);
    setText(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setAlert(true);
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <>
      {alert && <Alert />}

      <div className="mt-10 grid grid-cols-1  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handlesubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search ..."
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
    </>
  );
}

export default SearchForm;
