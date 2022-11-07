import { FC } from 'react';

interface CardStatsProps {
  statFrom: string;
  statTo: string;
  statArrow: 'up' | 'down';
  statPercent: string;
  statPercentColor: string;
  statDescripiron: string;
  statIconColor: string;
  statActual: string;
}

export const CardStats: FC<CardStatsProps> = ({
  statFrom,
  statTo,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconColor,
  statActual,
}) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-gray-800 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap justify-center ">
            <div
              className={
                'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ' +
                statIconColor
              }>
              {statFrom}
            </div>
            <div className={'text-gray-300 p-3 text-center items-center justify-center w-16 h-12 '}>
              <i className="fa-solid fa-chevron-right"></i> {statActual}
            </div>
            <div
              className={
                'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ' +
                statIconColor
              }>
              {statTo}
            </div>
          </div>
          <p className="text-sm text-center text-gray-300 mt-4">
            <span className={statPercentColor + ' mr-2'}>
              <i className={statArrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'}></i> {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
};
