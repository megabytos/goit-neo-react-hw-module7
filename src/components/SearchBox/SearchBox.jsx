import { useSelector, useDispatch } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const query = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" value={query} onChange={e => dispatch(setNameFilter(e.target.value))} />
    </div>
  );
}
