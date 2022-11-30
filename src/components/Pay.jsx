import React from 'react';
import { filterAll, filterChageReducer } from '../state/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/pay.scss';

const Pay = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filtersList);
  console.log('filters: ', filters);

  // const selected = useSelector((state) => state.filters.selectedCategory);

  const setCurrentFilter = ({
    target: {
      checked: active,
      dataset: { value }
    }
  }) => {
    if (value === 'all') return dispatch(filterAll({ active, value }));
    dispatch(filterChageReducer({ active, value }));
  };

  return (
    <div className="pay">
      <h3>Отдаёте</h3>
      <ul className="pay_filters">
        {filters.map((el) => (
          <Filter key={el.id} {...el} onChange={setCurrentFilter} />
        ))}
      </ul>
      <div className="pay_output">
        <input type="text" disabled value="bla" />
        <select name="" id="">
          {/* {filteredItems.map((n) => (
            <Item key={n.id} {...n} />
          ))} */}{' '}
          НАПИСАТЬ ФУНКЦИЮ РАСПАКОВКИ ЭЛЕМЕНТОВ ПО ВЫБРАННОМУ ФИЛЬТРУ
        </select>
      </div>
    </div>
  );
};

const Filter = ({ value, active, onChange, text }) => {
  return (
    <li className="pay_filyters-item">
      <input
        type="checkbox"
        checked={active}
        data-value={value}
        onChange={onChange}
        id={value}
      />
      <label htmlFor={value}>{text}</label>
    </li>
  );
};

export default Pay;
