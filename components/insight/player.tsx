import { formatNumber, getRandomNumber } from '@/libs/utils';

import style from './insight.module.css';

const InsightPlayer = () => {
  return (
    <div className={style.playerWrapper}>
      <div className={style.item}>
        <label>Pemenang Terbanyak</label>
        <h3 className="flex items-center !font-normal">
          Hasimas Koskoy
          <div className="ml-auto font-semibold">
            {formatNumber(getRandomNumber(50))}
            <span className="text-branding">x</span>
          </div>
        </h3>
      </div>
      <div className={style.item}>
        <label>Paling Pecundang</label>
        <h3 className="flex items-center !font-normal">
          Simakas Kiyaw
          <div className="ml-auto font-semibold">
            {formatNumber(getRandomNumber(50))}
            <span className="text-branding">x</span>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default InsightPlayer;
