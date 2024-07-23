import React, { useEffect, useState } from "react";
import Menu from "../presentetion/Menu";
import style from "./Publication.module.scss";
import axios from "axios";

function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/TMendesO/repos"
        );
        const sortedRepos = response.data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sortedRepos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.publication}>
      <Menu />
      <h1 className={`${style.title} grid-6`}>
        P.
        <hr className={style.line} />
      </h1>
      <div className={`${style.form1} `}></div>
      <div className={`${style.form2} `}></div>
      <div className={`${style.form3}`}></div>
      <ul className={style.repoList}>
        {repos.map((repo) => (
          <li key={repo.id} className={style.repoItem}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={style.repoName}
            >
              {repo.name}
            </a>
            <p className={style.repoDescription}>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repositories;
