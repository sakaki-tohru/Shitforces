import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter,  Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/*
    TODO: In MainPage, all user can check latest contest.
          And other user's ranking and so on.
 */
// URL: /
class ContestCard extends React.Component {
  render() {
    const contestInfo = this.props.contestInfo;
    const scores = (()=>{
      let res = "";
      for (let i = 0;i < contestInfo.scores.length;i++) {
        res += contestInfo.scores[i];
        if (i + 1 !== contestInfo.scores.length) {
          res += "-";
        }
      }
      return res;
    });
    const contestPath = "/contest" + this.props.contestId;
    return(
      <div className="contest-card card">
        <div className="contest-card-body card-body">
          <Link to={contestPath}>
            <h2 className="card-title contest-card-title">
              {contestInfo.title}
            </h2>
          </Link>
          <p className="contest-card-desc card-text">
            {contestInfo.description}
          </p>
          <p className="contest-card-scores card-text">
            {scores()}
          </p>
          <p className="contest-card-date card-text">
            {contestInfo.date}
          </p>
        </div>
      </div>
    );
  }
}
ContestCard.propTypes = {
  contestInfo: PropTypes.array,
  contestId: PropTypes.string
};
export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: [{
        title: "test",
        scores: [100, 200, 300]
      }
      ],
    };
  }
  render() {
    let contestCards = this.state.contests.map((val, index) => {
      return(
        <ContestCard contestInfo={ val } key={ val.title } contestId={ index }/>
      );
    });
    return (
      <BrowserRouter>
        <div className="MainPage">
          {contestCards}
        </div>
      </BrowserRouter>
    );
  }
}
