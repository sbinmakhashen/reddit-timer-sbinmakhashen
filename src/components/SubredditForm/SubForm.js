import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SubContext from '../../Context/SubContext';

const SubForm = () => {
  const { subreddit, setSubReddit } = useContext(SubContext);
  const history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    if (subreddit !== 'javascript') {
      history.push(`/search/${subreddit}`);
    }

    const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

    const res = await fetch(url);
    const redditData = await res.json();
    console.log(redditData);
  }

  const { sub } = useParams();
  useEffect(() => {
    setSubReddit(sub);
  }, [sub, setSubReddit]);

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h1 className="title">Find the best time for a subreddit</h1>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="subtitle" htmlFor="sub-input">
          r /
        </label>
        <input
          type="text"
          value={subreddit}
          onChange={(event) => setSubReddit(event.target.value)}
          id="sub-input"
        />
        <button type="submit" className="btn form-btn">
          SEARCH
        </button>
      </div>
    </form>
  );
};
export default SubForm;
