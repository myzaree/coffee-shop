import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext, Types } from '@store';
import './Modal.less';

interface ModalProps {
  visible: boolean;
  toggleModal: () => void;
  totalPrice: number;
}

const optionTitle = {
  milk: 'молоко',
  syrup: 'сироп',
  cream: 'сливки',
  shot: '',
};

export const Modal: React.FC<ModalProps> = ({
  visible,
  toggleModal,
  totalPrice,
}: ModalProps) => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const [place, setPlace] = useState<'С собой' | 'В кафе'>('С собой');

  const onSubmit = () => {
    const id = Math.random() * 1000;
    dispatch({
      type: Types.AddHistory,
      payload: {
        history: {
          id,
          coffee: state.coffee.current!,
          size: state.coffee.size!,
          options: state.coffee.options,
          place,
          totalPrice,
        },
      },
    });
    toggleModal();
    history.push('/history');
  };

  return (
    <div className={visible ? 'modal' : 'modal hide'}>
      <div className="modal__window">
        <span className="modal__close" onClick={toggleModal}>
          X
        </span>
        <ul>
          <li>
            <span>
              - {state.coffee.current?.name} {state.coffee.size?.title}
            </span>
            <span>{state.coffee.size?.price}₸</span>
          </li>
          {state.coffee.options.map((opt) => (
            <li key={opt.title}>
              <span>
                - {opt.title} {optionTitle[opt.type]}
              </span>
              <span>{opt.price}₸</span>
            </li>
          ))}
          <li className="total">
            <span>Итого</span>
            <span>{totalPrice}₸</span>
          </li>
        </ul>
        <div className="modal__place">
          <div
            className={place === 'С собой' ? 'place active-place' : 'place'}
            onClick={() => setPlace('С собой')}
          >
            С собой
          </div>
          <div
            className={place === 'В кафе' ? 'place active-place' : 'place'}
            onClick={() => setPlace('В кафе')}
          >
            В кафе
          </div>
        </div>
        <button onClick={onSubmit}>Заказать</button>
      </div>
    </div>
  );
};
