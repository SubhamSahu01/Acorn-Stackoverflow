import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./MainContent.css";

function MainContent({ searchQuery }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("activity");

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const Query = searchQuery
          ? `https://api.stackexchange.com/2.3/search`
          : `https://api.stackexchange.com/2.3/questions`;

        const params = {
          order: "desc",
          sort: filter,
          site: "stackoverflow",
        };
        if (searchQuery) {
          params.intitle = searchQuery;
        }
        const response = await axios.get(Query, { params });
        setQuestions(response.data.items);
      } catch (err) {
        setError("Failed to fetch questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [filter, searchQuery]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="main-content">
      <div className="top-question">Top Questions</div>
      <div className="filter-buttons">
        {["activity", "votes", "hot", "week", "month"].map((f) => (
          <button
            key={f}
            className={`filter-button ${filter === f ? "active" : ""}`}
            onClick={() => handleFilterChange(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.question_id} className="question-card">
              <div className="question-title">
                {question.title}
              </div>
              <div className="question-tags">
                {question.tags.map((tag) => (
                  <span key={tag} className="tags">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="question-score">
                <div className="question-tags">
                  Votes: {question.score} | Answers: {question.answer_count} |
                  Views: {question.view_count}
                </div>
                <div>Last activity: {moment.unix(question.creation_date).fromNow()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MainContent;
