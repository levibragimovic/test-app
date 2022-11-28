import React from 'react';
import { filterAll, filterChageReducer } from '../state/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/pay.scss';
import { directions } from '../data';

const Pay = () => {
  const dispatch = useDispatch();
  const { all, crypto, cash, rub, uah } = useSelector((state) => state.filters);

  const setAllSelected = () => {
    dispatch(filterAll());
  };
  const setCurrentFilter = (e) => {
    const { name, checked } = e.target;
    dispatch(filterChageReducer({ name, checked }));
  };

  const directionsList = directions.map((el) => {
    return (
      <option value={el.code} key={el.code}>
        {el.name}
      </option>
    );
  });
  console.log('directionsList: ', directionsList);
  return (
    <div className="pay">
      <h3>Отдаёте</h3>
      <ul className="pay_filters">
        <li className="pay_filyters-item">
          <input
            type="checkbox"
            name="all"
            id="all"
            checked={all}
            onChange={setAllSelected}
          />
          <label htmlFor="all">Все</label>
        </li>
        <li className="pay_filyters-item">
          <input
            type="checkbox"
            name="crypto"
            id="crypto"
            checked={crypto}
            onChange={setCurrentFilter}
          />
          <label htmlFor="crypto">Криптовалюты</label>
        </li>
        <li className="pay_filyters-item">
          <input
            type="checkbox"
            name="cash"
            id="cash"
            checked={cash}
            onChange={setCurrentFilter}
          />
          <label htmlFor="cash">Наличные</label>
        </li>
        <li className="pay_filyters-item">
          <input
            type="checkbox"
            name="rub"
            id="rub"
            checked={rub}
            onChange={setCurrentFilter}
          />
          <label htmlFor="rub">Банки RUB</label>
        </li>
        <li className="pay_filyters-item">
          <input
            type="checkbox"
            name="uah"
            id="uah"
            checked={uah}
            onChange={setCurrentFilter}
          />
          <label htmlFor="uah">Банки UAH</label>
        </li>
      </ul>
      <div className="pay_output">
        <input type="text" disabled value="bla" />
        <select name="" id="">
          {directionsList}
        </select>
      </div>
    </div>
  );
};

export default Pay;
