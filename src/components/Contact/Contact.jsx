import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.wrapper}>
        <p><FaUser />{name}</p>
        <p><FaPhone />{number}</p>
      </div>
      <button className={css.delete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
  );
}
