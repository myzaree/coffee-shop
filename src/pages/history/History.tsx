import React, { useContext } from 'react';

import { AppContext, Types } from '@store';
import { HistoryCard } from '@components';
import './History.less';

const HistoryPage: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="history">
      <h2>История заказов:</h2>
      <ul>
        {state.history.map((h) => (
          <HistoryCard
            history={h}
            deleteHistory={() =>
              dispatch({ type: Types.RemoveHistory, payload: { id: h.id } })
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
