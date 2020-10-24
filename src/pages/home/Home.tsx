import React, { useContext, useState } from 'react';
import { AppContext, Types } from '@store';
import {
  CoffeeList,
  MilkList,
  SyrupList,
  CreamList,
  EspressoShots,
} from '@constants';
import { CoffeeCard, OptionsList, SizeButton, Modal } from '@components';

import './Home.less';

const Home: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [visible, setVisible] = useState<boolean>(false);
  const { current, size, options } = state.coffee;
  const totalPrice = size
    ? size.price + options.reduce((total, current) => total + current.price, 0)
    : 0;

  const toggleModal = () => setVisible(!visible);

  return (
    <div className="coffee">
      <div className="coffee__cards">
        <h3>Выберите кофе:</h3>
        {CoffeeList.map((coffee) => (
          <CoffeeCard
            coffee={coffee}
            key={coffee.name}
            active={current?.name === coffee.name}
            onPress={() =>
              dispatch({ type: Types.SetCoffee, payload: { coffee } })
            }
          />
        ))}
      </div>
      <div className="coffee__options">
        <h4>Размер</h4>
        <div className="coffee__sizes">
          <h4>{current && current.name}</h4>
          {current ? (
            current.sizes.map((s) => (
              <SizeButton
                title={s.title}
                price={s.price}
                active={size?.title === s.title}
                onPress={() =>
                  dispatch({ type: Types.SetSize, payload: { size: s } })
                }
              />
            ))
          ) : (
            <div className="coffee__placeholder">Выберите кофе</div>
          )}
        </div>
        <h4>Добавки к напиткам (+250₸)</h4>
        <OptionsList list={MilkList} listTitle="Молоко" listType="milk" />
        <OptionsList list={SyrupList} listTitle="Сироп" listType="syrup" />
        <OptionsList list={CreamList} listTitle="Сливки" listType="cream" />
        {current?.name === 'Эспрессо' && (
          <OptionsList
            list={EspressoShots}
            listTitle="Эспрессо"
            listType="shot"
          />
        )}
        <h3>Итого: {totalPrice}₸</h3>
        <button
          type="button"
          disabled={size === null}
          onClick={() => setVisible(true)}
        >
          Заказать
        </button>
      </div>
      <Modal
        visible={visible}
        toggleModal={toggleModal}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default Home;
