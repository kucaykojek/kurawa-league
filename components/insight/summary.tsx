import { formatNumber, getRandomNumber } from '@/libs/utils';

import style from './insight.module.css';

const InsightSummary = () => {
  const data = {
    league: getRandomNumber(10),
    games: getRandomNumber(100),
    rounds: getRandomNumber(10000),
    players: getRandomNumber(10)
  };

  return (
    <div className={style.summaryWrapper}>
      <div className={style.item}>
        <label>Total Liga</label>
        <h3>{formatNumber(data.league)}</h3>
      </div>
      <div className={style.item}>
        <label>Total Permainan</label>
        <h3>{formatNumber(data.games)}</h3>
      </div>
      <div className={style.item}>
        <label>Total Putaran</label>
        <h3>{formatNumber(data.rounds)}</h3>
      </div>
      <div className={style.item}>
        <label>Total Pemain</label>
        <h3>{formatNumber(data.players)}</h3>
      </div>
    </div>
  );
};

export default InsightSummary;
