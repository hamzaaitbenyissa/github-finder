import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function ReopList({ repos }) {
  return (
    <div className="rounded-lg shadow-md bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((element) => (
          <RepoItem key={element.id} item={element} />
        ))}
      </div>
    </div>
  );
}

ReopList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default ReopList;
